import type { Meta, StoryObj } from '@storybook/vue3';
import Footer from './Footer.vue';

const meta = {
  title: 'Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;
export const PageFooter: Story = {
  args: {},
};
