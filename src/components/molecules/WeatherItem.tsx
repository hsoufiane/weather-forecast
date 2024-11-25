import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { WindSpeed } from '../atoms/WindSpeed';
import { Temperature } from '../atoms/Temperature';

interface WeatherItemProps {
  time: string;
  windSpeed: number;
  temperature: number;
  apparentTemperature: number;
}

export const WeatherItem: React.FC<WeatherItemProps> = ({
  time,
  windSpeed,
  temperature,
  apparentTemperature,
}) => (
  <Card>
    <CardContent>
      <Typography variant="h6">{time}</Typography>
      <WindSpeed speed={windSpeed} />
      <Temperature value={temperature} type="actual" />
      <Temperature value={apparentTemperature} type="apparent" />
    </CardContent>
  </Card>
);

