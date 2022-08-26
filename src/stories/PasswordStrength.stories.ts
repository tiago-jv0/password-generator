import PasswordStrength from "../components/PasswordStrength.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "PasswordStrength",
  component: PasswordStrength,
  argTypes: {
    strength: {
      control: { type: "radio" },
      options: ["too-weak", "weak", "medium", "strong"],
    },
  },
} as Meta<typeof PasswordStrength>;

const Template: StoryFn<typeof PasswordStrength> = (args) => ({
  components: { PasswordStrength },
  setup() {
    return { args };
  },
  template: '<PasswordStrength v-bind="args" />',
});

export const TooWeak = Template.bind({});
TooWeak.args = {
  strength: "too-weak",
};

export const Weak = Template.bind({});
Weak.args = {
  strength: "weak",
};

export const Medium = Template.bind({});
Medium.args = {
  strength: "medium",
};

export const Strong = Template.bind({});
Strong.args = {
  strength: "strong",
};
