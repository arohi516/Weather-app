import AirIcon from '@mui/icons-material/Air';
import { Box, Typography } from '@mui/material';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyWindSpeed({ perc }) {
    const {
        weatherData: { daily_units },
    } = useContext(WeatherContext);

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                gap: { xs: '3px', sm: '4px', md: '6px' },
                width: '100%',
            }}
        >
            <AirIcon />
            <Typography
                variant='h5'
                sx={{ fontWeight: { xs: '400', sm: '500' }, fontSize: { xs: '12px', sm: '13px' } }}
            >{`${perc}${daily_units.wind_speed_10m_max}`}</Typography>
        </Box>
    );
}

export default DailyWindSpeed;
