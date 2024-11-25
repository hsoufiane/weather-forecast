import React from 'react';
import { Story, Meta } from '@storybook/react';
import { WeatherIcon } from './WeatherIcon';

export default {
  title: 'Atoms/WeatherIcon',
  component: WeatherIcon,
} as Meta;

const Template: Story<{ temperature: number }> = (args) => <WeatherIcon {...args} />;

export const Sunny = Template.bind({});
Sunny.args = {
  temperature: 30,
};

export const Cloudy = Template.bind({});
Cloudy.args = {
  temperature: 20,
};

export const Stormy = Template.bind({});
Stormy.args = {
  temperature: 10,
};

