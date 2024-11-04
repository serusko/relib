import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import Component from "./index";
import { useState } from "react";
import Props from "./props";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "Components/TextField",
  component: Component,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
  render: (props: Props) => {
    const [value, setValue] = useState<null | string>(props.value);

    return <Component {...props} value={value} setValue={setValue} />;
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Default: Story = {
  args: {
    helperText: "Helper text",
    label: "Text field",
    autoComplete: "off",
    name: "field",
    setValue: fn,
    value: "initial",
    max: 22,
  },
};
