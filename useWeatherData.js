import { useEffect, useState } from 'react';
import axios from 'axios';

export function useWeatherData() {
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const apiUrl = 'https://api.open-meteo.com/v1/forecast';
    let params;

    const setParameters = (latitude, longitude) => {
        params = {
            latitude: latitude,
            longitude: longitude,
            current: [
                'temperature_2m',
                'relative_humidity_2m',
                'apparent_temperature',
                'is_day',
                'precipitation',
                'weather_code',
                'cloud_cover',
                'wind_speed_10m',
            ],
            hourly: [
                'temperature_2m',
                'precipitation_probability',
                'weather_code',
                'wind_speed_10m',
            ],
            daily: [
                'weather_code',
                'temperature_2m_max',
                'apparent_temperature_max',
                'precipitation_probability_max',
                'wind_speed_10m_max',
            ],
            forecast_hours: 4,
        };
    };

    const getLocation = async () => {
        if ('geolocation' in navigator) {
            try {
                const position = await new Promise((resolve, reject) => {
                    navigator.geolocation.getCurrentPosition(resolve, reject);
                });

                const { latitude, longitude } = position.coords;
                let city;

                try {
                    const response = await axios.get(
                        'https://us1.locationiq.com/v1/reverse.php',
                        {
                            params: {
                                // eslint-disable-next-line no-undef
                                key: process.env.REACT_APP_API_KEY,
                                lat: latitude,
                                lon: longitude,
                                format: 'json',
                            },
                        }
                    );
                    const data = response.data;
                    city = data?.address?.city;
                } catch (err) {
                    console.error('Error in reverse geocoding:', err);
                    // setError('External API Error');
                }

                return {
                    latitude,
                    longitude,
                    city: city || null,
                };
            } catch (err) {
                console.error('Error in geolocation:', err);
                setError('Error in geolocation API');
                return null;
            }
        } else {
            console.error('Geolocation is not supported');
            setError('Geolocation is not supported');
            return null;
        }
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const { latitude, longitude, city } = await getLocation();
            await setParameters(latitude, longitude);
            const response = await axios.get(apiUrl, { params });

            // Set user's city to the weather data object
            const data = response.data;
            data.city = city || null;
            setWeatherData(response.data);
        } catch (err) {
            console.error('Error:', err);
            setError('Unable to fetch weather data');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return { weatherData, loading, error };
}
