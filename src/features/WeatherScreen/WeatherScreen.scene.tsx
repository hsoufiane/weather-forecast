import React from 'react';
import { Container, Box } from '@mui/material';
import { GenericText } from '../../components/atoms/GenericText';
import { RefreshButton } from '../../components/atoms/RefreshButton';
import { WeatherList } from '../../components/organisms/WeatherList';

interface WeatherData {
  time: string;
  windSpeed: number;
  temperature: number;
  apparentTemperature: number;
}

interface WeatherScreenSceneProps {
  weatherData: WeatherData[];
  onRefresh: () => void;
  isLoading: boolean;
}

export const WeatherScreenScene: React.FC<WeatherScreenSceneProps> = ({ weatherData, onRefresh, isLoading }) => {
  return (
    <Container maxWidth="md">
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        my: 4 
      }}>
        <GenericText variant="h4">
          {"Weather Forecast"}
        </GenericText>
        <RefreshButton onRefresh={onRefresh} isLoading={isLoading} />
      </Box>
      <WeatherList weatherData={weatherData} />
    </Container>
  );
};

