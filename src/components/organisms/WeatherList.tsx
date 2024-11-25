import React from 'react';
import { Grid } from '@mui/material';
import { WeatherCard } from '../molecules/WeatherCard';

interface WeatherData {
  time: string;
  temperature: number;
  apparentTemperature: number;
  windSpeed: number;
}

interface WeatherListProps {
  weatherData: WeatherData[];
}

export const WeatherList: React.FC<WeatherListProps> = ({ weatherData }) => {
  return (
    <Grid container spacing={2}>
      {weatherData.map((data, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <WeatherCard {...data} />
        </Grid>
      ))}
    </Grid>
  );
};

