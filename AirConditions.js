import { Box } from '@mui/material';
import ApparentTemp from 'components/AirConditions/ApparentTemp';
import WindSpeed from 'components/AirConditions/WindSpeed';
import CloudCover from 'components/AirConditions/CloudCover';
import Humidity from 'components/AirConditions/Humidity';
import SectionHeader from 'components/Layout/SectionHeader';

function AirConditions() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                margin: '0 0 3rem',
            }}
        >
            <SectionHeader title='Air Conditions' />
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    p: 1,
                    m: 1,
                    width: '100%',
                }}
            >
                <ApparentTemp />
                <WindSpeed />
                <CloudCover />
                <Humidity />
            </Box>
        </Box>
    );
}

export default AirConditions;
