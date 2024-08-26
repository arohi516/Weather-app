import { Box, Typography } from '@mui/material';
import WeatherInfoTooltip from 'components/AirConditions/WeatherInfoTooltip ';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function CloudCover() {
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
            <WeatherInfoTooltip type='Clouds' />
            <Typography
                variant='h3'
                sx={{
                    margin: 'auto',
                    fontSize: { xs: '12px', sm: '14px', md: '16px' },
                    fontWeight: { xs: '400', sm: '600' },
                }}
            >{`${current.cloud_cover} ${current_units.cloud_cover}`}</Typography>
        </Box>
    );
}

export default CloudCover;
