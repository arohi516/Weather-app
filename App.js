import { WeatherProvider } from 'context/WeatherContext';
import WeatherLayouts from 'layout/WeatherLayouts';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <WeatherProvider>
                <WeatherLayouts />
            </WeatherProvider>
        </ThemeProvider>
    );
}

export default App;
