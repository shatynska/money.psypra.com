import type { Meta, StoryObj } from '@storybook/react';

import '~/app/index.css';
import { QueryProvider } from '~/shared/ui';

import { CashBalance } from './CashBalance';

const meta = {
  title: 'entities/CashBalance',
  component: CashBalance,
  decorators: [(Story) => <QueryProvider>{Story()}</QueryProvider>],
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof CashBalance>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'CashBalance',
  },
};
