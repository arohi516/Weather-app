import { Typography } from '@mui/material';
import React from 'react';

function SectionHeader({ title }) {
    let marginB;
    let margin = '';

    if (title === "Today's Forecast") {
        marginB = { xs: 0, sm: '1rem' };
    } else if (title === 'Daily Forecast') {
        margin = { xs: '2.25rem 0 1rem 0', sm: '2.25rem 0 1rem 0', md: '0 0 0.8rem' };
    } else {
        margin = '0 0 1rem';
    }

    const sx = {
        fontSize: { xs: '12px', sm: '16px', md: '18px', lg: '19px' },
        lineHeight: 1,
        textAlign: 'center',
        marginBottom: marginB,
        margin: margin,
        textTransform: 'uppercase',
    };

    return (
        <Typography variant='h2' component='h2' sx={sx}>
            {title}
        </Typography>
    );
}

export default SectionHeader;
