import BaseButton from "../components/BaseButton.vue";
import BaseIcon from '../components/BaseIcon.vue'
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "BaseButton",
  component: BaseButton,
  subcomponents: { BaseIcon },
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Button Idle'
    }
  }
} as Meta<typeof BaseButton>;


const Template : StoryFn<typeof BaseButton> = (args) =>  ({
    components: { BaseButton, BaseIcon },
    setup(){
        return { args }
    },
    template: `
      <BaseButton> 
        {{ args.default }}
        <template v-if="args.icon" #icon>
          <BaseIcon :icon="args.icon" />
        </template>
      </BaseButton>
      `
})

export const Default = Template.bind({})
Default.args = {
    default: 'Button Idle',
    icon: `arrow-right`
}