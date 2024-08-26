import Github from '@mui/icons-material/GitHub';
import Button from '@mui/material/Button';

function GithubIcon() {
    return (
        <Button
            href='https://github.com/disalad/weather-app'
            target='_blank'
            sx={{
                position: 'absolute',
                top: { xs: '1rem', sm: '0.5rem' },
                right: { xs: '-0.5rem', sm: 0 },
            }}
        >
            <Github sx={{ fontSize: { xs: 20, sm: 24 } }} />
        </Button>
    );
}

export default GithubIcon;
