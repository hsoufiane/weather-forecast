import React from 'react';
import { Typography } from '@mui/material';

interface WindSpeedProps {
  speed: number;
}

export const WindSpeed: React.FC<WindSpeedProps> = ({ speed }) => (
  <Typography variant="body1">
    Wind Speed: {speed} m/s
  </Typography>
);

