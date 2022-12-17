import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@components/Button';

export default {
  title: 'Button',
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ children, ...args }: ButtonProps) => (
  <Button {...args}>{children}</Button>
);

export const Regular = Template.bind({});
Regular.args = {
  children: 'Button',
};
