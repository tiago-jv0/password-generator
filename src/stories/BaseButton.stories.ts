import BaseButton from "../components/BaseButton.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "BaseButton",
  component: BaseButton,
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Button Idle'
    }
  }
} as Meta<typeof BaseButton>;


const Template : StoryFn<typeof BaseButton> = (args) =>  ({
    components: { BaseButton },
    setup(){
        return { args }
    },
    template: `
      <BaseButton> 
        {{ args.default }}
        <template v-if="args.icon" #icon>
          <span v-html="args.icon">{{args.icon}}</span>
        </template>
      </BaseButton>
      `
})

export const Default = Template.bind({})
Default.args = {
    default: 'Button Idle',
    icon: `<svg width="12" height="12" viewBox="0 0 12 12" fill="currenctColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.10553 12L11.1055 6.00002L5.10553 0L3.84051 1.26501L7.681 5.10547L6.10352e-05 5.10547V6.8946L7.681 6.8946L3.84051 10.735L5.10553 12Z" fill="currentColor"/>
    </svg>
    `
}