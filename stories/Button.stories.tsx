import { StoryFn, Meta } from '@storybook/react';
import { Button, ButtonProps } from '@components/Button';

export default {
  title: 'Button',
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = ({ children, variant, ...args }: ButtonProps) => (
  <Button variant={variant} {...args}>
    {children}
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Button',
  variant: 'secondary',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  children: 'Button',
  variant: 'tertiary',
};

export const Quarternary = Template.bind({});
Quarternary.args = {
  children: 'Button',
  variant: 'quarternary',
};
