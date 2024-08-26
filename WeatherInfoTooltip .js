import { Box, Typography } from '@mui/material';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';

export default function WeatherInfoTooltip({ type }) {
    let icon;
    if (type == 'Real Feel') icon = <ThermostatIcon />;
    else if (type == 'Wind') icon = <AirIcon />;
    else if (type == 'Clouds') icon = <CloudQueueIcon />;
    else if (type == 'Humidity') icon = <WaterDropOutlinedIcon />;

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '2.5rem',
            }}
        >
            {icon}
            <Typography
                variant='h4'
                sx={{
                    paddingLeft: { xs: '0px', sm: '4px', md: '6px' },
                    fontSize: { xs: '10px', sm: '12px', md: '14px' },
                }}
            >
                {type}
            </Typography>
        </Box>
    );
}
