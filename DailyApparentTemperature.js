import { Box, Typography } from '@mui/material';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyApparentTemperature({ temp }) {
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
            <WbSunnyIcon />
            <Typography
                variant='h5'
                sx={{ fontWeight: { xs: '400', sm: '500' }, fontSize: { xs: '12px', sm: '13px' } }}
            >{`${temp} ${daily_units.apparent_temperature_max}`}</Typography>
        </Box>
    );
}

export default DailyApparentTemperature;
