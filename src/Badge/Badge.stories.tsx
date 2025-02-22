import type { Meta, StoryObj } from '@storybook/react';

import { Badge } from './Badge';

import { Icon } from '../Icon';

const meta = {
  title: 'Design System/Badge',
  component: Badge,
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllBadges: Story = {
  args: {
    icon: 'facehappy',
    inline: true,
  },
  name: 'all badges',
  render: (args) => (
    <>
      <Badge status='positive'>Positive</Badge>
      <Badge status='negative'>Negative</Badge>
      <Badge status='neutral'>Neutral</Badge>
      <Badge status='error'>Error</Badge>
      <Badge status='warning'>Warning</Badge>
      <Badge status='positive'>
        <Icon {...args} />
        with icon
      </Badge>
    </>
  ),
};

export const Positive: Story = {
  args: {
    status: 'positive',
    children: 'Positive',
  },
};

export const Negative: Story = {
  args: {
    status: 'negative',
    children: 'Negative',
  },
};
export const Warning: Story = {
  args: {
    status: 'warning',
    children: 'Warning',
  },
};

export const Neutral: Story = {
  args: {
    status: 'neutral',
    children: 'Neutral',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
    children: 'Error',
  },
};

export const WithIcon: Story = {
  args: {
    status: 'warning',
    icon: 'check',
    inline: true,
  },
  name: 'with icon',
  render: (args) => (
    <Badge {...args}>
      <Icon {...args} />
      with icon
    </Badge>
  ),
};
