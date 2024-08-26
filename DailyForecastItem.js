import { Box, Typography, Grid } from '@mui/material';
import { getDayOfWeek } from 'utils/formatDate';
import { getWeatherImage } from 'utils/getWeatherInfo';
import DailyTemperature from 'components/DailyForecast/DailyTemperature';
import DailyPrecipitation from 'components/DailyForecast/DailyPrecipitation';
import DailyWindSpeed from './DailyWindSpeed';
import DailyApparentTemperature from './DailyApparentTemperature';

function DailyForecastItem({ time, temp, apparent_temp, precipitation, weather_code, wind_speed }) {
    const iconUrl = getWeatherImage(weather_code, 1);

    return (
        <Grid
            container
            xs={12}
            sx={{
                background:
                    'linear-gradient(0deg, rgba(255, 255, 255, .05) 0%, rgba(171, 203, 222, .05) 100%) 0% 0%',
                border: '1px solid rgba(0, 0, 0, 0.05)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                flexWrap: 'nowrap',
                '& > *': {
                    margin: 0,
                },
                padding: '0.25rem 0',
            }}
        >
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                }}
            >
                <Typography
                    variant='p'
                    sx={{
                        margin: '0.1rem 1rem 0',
                        fontWeight: { xs: '400', sm: '500' },
                        fontSize: { xs: '12px', sm: '13px', md: '14px' },
                    }}
                >
                    {getDayOfWeek(time)}
                </Typography>
                <Box
                    component='img'
                    src={iconUrl}
                    alt=''
                    sx={{
                        marginRight: 1,
                        height: '2.1rem',
                        width: { xs: '24px', sm: '28px', md: '31px' },
                    }}
                />
            </Grid>
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                }}
            >
                <DailyTemperature temp={temp} />
                <Box sx={{ height: '0.65rem' }} />
                <DailyApparentTemperature temp={apparent_temp} />
            </Grid>
            <Grid
                container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: 2,
                }}
            >
                <DailyPrecipitation perc={precipitation} />
                <Box sx={{ height: '0.65rem' }} />
                <DailyWindSpeed perc={wind_speed} />
            </Grid>
        </Grid>
    );
}

export default DailyForecastItem;
