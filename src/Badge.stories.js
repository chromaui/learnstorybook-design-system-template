import React from "react";
import { Badge } from "./Badge";
import { Icon } from "./Icon";

export default {
  title: "Design System/Badge",
  component: Badge,
};
/* 
export const AllBadges = (args) => (
  <div>
    <Badge status="positive">Positive</Badge>
    <Badge status="negative">Negative</Badge>
    <Badge status="neutral">Neutral</Badge>
    <Badge status="error">Error</Badge>
    <Badge status="warning">Warning</Badge>
    <Badge status="positive">
      <Icon {...args} />
      with icon
    </Badge>
  </div>
);
AllBadges.args = {
  icon: "facehappy",
  inline: true,
};

AllBadges.storyName = "all badges"; */

export const AllBadges = {
  args: {
    icon: "facehappy",
    inline: true,
  },
  name: "all badges",
  render: (args) => (
    <>
      <Badge status="positive">Positive</Badge>
      <Badge status="negative">Negative</Badge>
      <Badge status="neutral">Neutral</Badge>
      <Badge status="error">Error</Badge>
      <Badge status="warning">Warning</Badge>
      <Badge status="positive">
        <Icon {...args} />
        with icon
      </Badge>
    </>
  ),
};

// export const Positive = () => <Badge status="positive">Positive</Badge>;
export const Positive = {
  args: {
    status: "positive",
    children: "Positive",
  },
};
// export const Negative = () => <Badge status="negative">Negative</Badge>;

export const Negative = {
  args: {
    status: "negative",
    children: "Negative",
  },
};

//export const Warning = () => <Badge status="warning">Warning</Badge>;
export const Warning = {
  args: {
    status: "warning",
    children: "Warning",
  },
};

// export const Neutral = () => <Badge status="neutral">Neutral</Badge>;
export const Neutral = {
  args: {
    status: "neutral",
    children: "Neutral",
  },
};

//export const Error = () => <Badge status="error">Error</Badge>;
export const Error = {
  args: {
    status: "error",
    children: "Error",
  },
};

/* export const WithIcon = (args) => (
  <Badge {...args}>
    <Icon {...args} />
    with icon
  </Badge>
);
WithIcon.args = {
  status: "warning",
  icon: "check",
  inline: true,
}; 
WithIcon.storyName = "with icon";
*/
export const WithIcon = {
  args: {
    status: "warning",
    icon: "check",
    inline: true,
  },
  name: "with icon",
  render: (args) => (
    <Badge {...args}>
      <Icon {...args} />
      with icon
    </Badge>
  ),
};
