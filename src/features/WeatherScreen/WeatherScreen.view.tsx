import React from 'react';
import { useTimelinesData } from '../hooks/useTimelinesData';
import { Loader } from '../../components/atoms/Loader';
import { ErrorMessage } from '../../components/atoms/ErrorMessage';
import { WeatherScreenScene } from './WeatherScreen.scene';
import {adaptWeatherData} from './WeatherScreen.adapter'

export const WeatherScreenView: React.FC = () => {
  const { data, isLoading, isError, refetch } = useTimelinesData();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <ErrorMessage message="Error fetching weather data. Please try again." />;
  }

  if (!data) {
    return <ErrorMessage message="No weather data available." />;
  }

  const weatherData = adaptWeatherData(data);
  
  return <WeatherScreenScene weatherData={weatherData} onRefresh={refetch} isLoading={isLoading} />;
};