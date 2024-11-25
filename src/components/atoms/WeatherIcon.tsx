import React from 'react';
import { WbSunny, Cloud, Thunderstorm } from '@mui/icons-material';

interface WeatherIconProps {
  temperature: number;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({ temperature }) => {
  if (temperature > 25) return <WbSunny />;
  if (temperature > 15) return <Cloud />;
  return <Thunderstorm />;
};

