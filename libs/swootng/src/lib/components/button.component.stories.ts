import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { ButtonModule } from './button.module';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonModule],
    }),
  ],
} as Meta<ButtonComponent>;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
    <button swoot-button [kind]='kind' [color]='color' [size]='size'>Submit</button>
  `,
});

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
  kind: 'fill',
  size: 'md',
};
