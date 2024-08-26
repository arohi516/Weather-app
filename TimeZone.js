import { Box, Typography } from '@mui/material';
import { formatDate } from 'utils/formatDate';
import { useContext } from 'react';
import { WeatherContext } from 'context/WeatherContext';

function TimeZone() {
    const {
        weatherData: { current, city },
    } = useContext(WeatherContext);

    const formattedDate = formatDate(current.time);

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
            >
                {city}
            </Typography>
            <Typography variant='h4' sx={{ fontSize: { xs: '10px', sm: '12px', md: '14px' } }}>
                {formattedDate}
            </Typography>
        </Box>
    );
}

export default TimeZone;
