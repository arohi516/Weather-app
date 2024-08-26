import Box from '@mui/material/Box';
import { GridSpinner } from 'react-spinners-kit';

function LoadingScreen() {
    return (
        <Box
            sx={{
                minWidth: '100%',
                minHeight: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <GridSpinner />
        </Box>
    );
}

export default LoadingScreen;
