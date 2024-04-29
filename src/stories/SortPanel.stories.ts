import type { Meta, StoryObj } from '@storybook/vue3';
import SortPanel from './SortPanel.vue';

const meta = {
  title: 'Sort Panel',
  component: SortPanel,
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof SortPanel>;

export default meta;
type Story = StoryObj<typeof meta>;
export const SortSection: Story = {
  args: {},
};
