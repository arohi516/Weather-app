import { Box, Typography } from '@mui/material';
import { getWeatherDescription } from 'utils/getWeatherInfo';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function Temperature() {
    const {
        weatherData: { current, current_units },
    } = useContext(WeatherContext);

    const weatherDescription = getWeatherDescription(current.weather_code, current.is_day);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <Typography
                variant='h3'
                sx={{
                    fontSize: { xs: '12px', sm: '14px', md: '16px' },
                    fontWeight: { xs: '500', sm: '700' },
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    marginBottom: '0.5rem',
                }}
            >{`${current.temperature_2m}${current_units.temperature_2m}`}</Typography>
            <Typography variant='h4' sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px' } }}>
                {weatherDescription}
            </Typography>
        </Box>
    );
}

export default Temperature;
