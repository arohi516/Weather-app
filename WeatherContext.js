import { createContext } from 'react';
import { useWeatherData } from 'hooks/useWeatherData';

export const WeatherContext = createContext();

export function WeatherProvider({ children }) {
    const { weatherData, loading, error } = useWeatherData();

    return (
        <WeatherContext.Provider value={{ weatherData, loading, error }} style={{ height: '100%' }}>
            {children}
        </WeatherContext.Provider>
    );
}
