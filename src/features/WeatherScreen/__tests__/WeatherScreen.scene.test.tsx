import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { WeatherScreenScene } from '../WeatherScreen.scene';

describe('WeatherScreenScene', () => {
  const mockWeatherData = [
    {
      time: 'Now',
      windSpeed: 5,
      temperature: 25,
      apparentTemperature: 27,
    },
    {
      time: '14:00',
      windSpeed: 6,
      temperature: 26,
      apparentTemperature: 28,
    },
  ];

  it('renders weather data correctly', () => {
    render(
      <WeatherScreenScene
        weatherData={mockWeatherData}
        onRefresh={vi.fn()}
        isLoading={false}
      />
    );

    expect(screen.getByText('Weather Forecast')).toBeInTheDocument();
    expect(screen.getByText('Now')).toBeInTheDocument();
    expect(screen.getByText('25 °C')).toBeInTheDocument();
    expect(screen.getByText('14:00')).toBeInTheDocument();
    expect(screen.getByText('26 °C')).toBeInTheDocument();
  });

  it('renders refresh button', () => {
    render(
      <WeatherScreenScene
        weatherData={mockWeatherData}
        onRefresh={vi.fn()}
        isLoading={false}
      />
    );

    expect(screen.getByText('Refresh')).toBeInTheDocument();
  });

  it('disables refresh button when loading', () => {
    render(
      <WeatherScreenScene
        weatherData={mockWeatherData}
        onRefresh={vi.fn()}
        isLoading={true}
      />
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Loading...' })).toBeDisabled();
  });
});

