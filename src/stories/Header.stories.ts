import type { Meta, StoryObj } from '@storybook/vue3';
import Header from './Header.vue';

const meta = {
  title: 'Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;
export const HeaderControl: Story = {
  args: {},
};
