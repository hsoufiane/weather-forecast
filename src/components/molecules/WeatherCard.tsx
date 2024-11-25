import React from 'react';
import { Card, CardContent, Box } from '@mui/material';
import { WeatherIcon } from '../atoms/WeatherIcon';
import { GenericText } from '../atoms/GenericText';

interface WeatherCardProps {
  time: string;
  temperature: number;
  apparentTemperature: number;
  windSpeed: number;
}

export const WeatherCard: React.FC<WeatherCardProps> = ({
  time,
  temperature,
  apparentTemperature,
  windSpeed,
}) => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <GenericText variant="h6">{time}</GenericText>
          <WeatherIcon temperature={temperature} />
        </Box>
        <GenericText variant="h4" gutterBottom>
          {`${Math.round(temperature)} °C`}
        </GenericText>
        <GenericText variant="body2" color="text.secondary">
          {`Feels like: ${Math.round(apparentTemperature)} °C`}
        </GenericText>
        <GenericText variant="body2" color="text.secondary">
          {`Wind: ${windSpeed.toFixed(1)} m/s`}
        </GenericText>
      </CardContent>
    </Card>
  );
};

