import { render, screen } from '@testing-library/react';
import { WeatherItem } from '../WeatherItem';

describe('WeatherItem', () => {
  it('renders weather information correctly', () => {
    const props = {
      time: '12:00 PM',
      windSpeed: 5,
      temperature: 20,
      apparentTemperature: 22,
    };

    render(<WeatherItem {...props} />);

    expect(screen.getByText('12:00 PM')).toBeInTheDocument();
    expect(screen.getByText('Wind Speed: 5 m/s')).toBeInTheDocument();
    expect(screen.getByText('Temperature: 20°C')).toBeInTheDocument();
    expect(screen.getByText('Feels like: 22°C')).toBeInTheDocument();
  });
});

