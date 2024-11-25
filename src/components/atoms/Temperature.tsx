import React from 'react';
import { Typography } from '@mui/material';

interface TemperatureProps {
  value: number;
  type: 'actual' | 'apparent';
}

export const Temperature: React.FC<TemperatureProps> = ({ value, type }) => (
  <Typography variant="body1">
    {type === 'actual' ? 'Temperature' : 'Feels like'}: {value}°C
  </Typography>
);

