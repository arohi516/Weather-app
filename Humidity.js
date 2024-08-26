import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';
import WeatherInfoTooltip from 'components/AirConditions/WeatherInfoTooltip ';

function Humidity() {
    const {
        weatherData: { current, current_units },
    } = useContext(WeatherContext);
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-evenly',
            }}
        >
            <WeatherInfoTooltip type='Humidity' />
            <Typography
                variant='h3'
                sx={{
                    margin: 'auto',
                    fontSize: { xs: '12px', sm: '14px', md: '16px' },
                    fontWeight: { xs: '400', sm: '600' },
                }}
            >{`${current.relative_humidity_2m} ${current_units.relative_humidity_2m}`}</Typography>
        </Box>
    );
}

export default Humidity;
