import { Box, Grid } from '@mui/material';
import ForecastItem from 'components/TodayForecast/ForecastItem';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';
import SectionHeader from 'components/Layout/SectionHeader';

function TodayForecast() {
    const {
        weatherData: { hourly },
    } = useContext(WeatherContext);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <SectionHeader title='Today&#39;s Forecast' />
            <Grid
                item
                container
                xs={12}
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
                spacing={{xs: '8px', sm:'4px'}}
                // sx={{
                //     display: 'flex',
                //     justifyContent: 'space-evenly',
                //     flexDirection: 'row',
                //     width: '100%',
                //     flexWrap: { xs: 'wrap', sm: 'nowrap' },
                //     gap: { xs: '1rem', sm: '1rem' },
                // }}
            >
                {hourly.time.map((time, index) => {
                    const temp = hourly.temperature_2m[index];
                    const precipitation = hourly.precipitation_probability[index];
                    const weather_code = hourly.weather_code[index];
                    return (
                        <ForecastItem
                            time={time}
                            temp={temp}
                            precipitation={precipitation}
                            weather_code={weather_code}
                            key={index}
                        />
                    );
                })}
            </Grid>
        </Box>
    );
}

export default TodayForecast;
