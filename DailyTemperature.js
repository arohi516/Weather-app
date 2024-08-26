import { Box, Typography } from '@mui/material';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function DailyTemperature({ temp }) {
    const {
        weatherData: { daily_units },
    } = useContext(WeatherContext);
    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
                gap: { xs: '3px', sm: '4px', md: '6px' },
                width: '100%',
            }}
        >
            <ThermostatIcon />
            <Typography
                variant='h5'
                sx={{
                    fontWeight: { xs: '400', sm: '500' },
                    fontSize: { xs: '12px', sm: '13px' },
                    marginRight: '0.5rem',
                }}
            >{`${temp} ${daily_units.temperature_2m_max}`}</Typography>
        </Box>
    );
}

export default DailyTemperature;
