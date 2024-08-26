import { Box, Typography, Grid } from '@mui/material';
import { timestampToTime } from 'utils/formatDate';
import { getWeatherImage } from 'utils/getWeatherInfo';
import TodayTemperature from './TodayTemperature';
import TodayPrecipitation from './TodayPrecipitation';

function ForecastItem({ time, temp, precipitation, weather_code }) {
    const iconUrl = getWeatherImage(weather_code, 1);
    return (
        <Grid
            item
            xs={3}
            sm={2.1}
            sx={{
                marginBottom: { xs: '1rem', sm: '0' },
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                mt: { xs: '1rem', sm: 0 },
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%',
                    background:
                        'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
                    borderRadius: '8px',
                    boxShadow:
                        'rgba(0, 0, 0, 0.05) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
                    textAlign: 'center',
                    padding: '0.35rem 0',
                }}
            >
                <Typography variant='h4' sx={{ fontSize: { xs: '10px', sm: '12px' } }}>
                    {timestampToTime(time)}
                </Typography>
                <Box
                    component='img'
                    src={iconUrl}
                    alt=''
                    sx={{ width: { xs: '36px', sm: '42px' } }}
                />
                <TodayTemperature temp={temp} />
                <TodayPrecipitation perc={precipitation} />
            </Box>
        </Grid>
    );
}

export default ForecastItem;
