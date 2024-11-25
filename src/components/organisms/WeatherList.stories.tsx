import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WeatherList } from './WeatherList';

export default {
  title: 'Organisms/WeatherList',
  component: WeatherList,
} as Meta;

const Template: Story<React.ComponentProps<typeof WeatherList>> = (args) => <WeatherList {...args} />;

export const Default = Template.bind({});
Default.args = {
  weatherData: [
    { time: '12:00', temperature: 25, apparentTemperature: 27, windSpeed: 5 },
    { time: '15:00', temperature: 28, apparentTemperature: 30, windSpeed: 4 },
    { time: '18:00', temperature: 22, apparentTemperature: 20, windSpeed: 6 },
    { time: '21:00', temperature: 18, apparentTemperature: 16, windSpeed: 3 },
  ],
};

