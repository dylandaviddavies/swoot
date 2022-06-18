import { Story, Meta } from '@storybook/react';
import { Button } from './button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story = (args) => <Button {...args}>Submit</Button>;
export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  kind: 'fill',
  size: 'md',
};
