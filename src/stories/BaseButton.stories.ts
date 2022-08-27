import BaseButton from "../components/BaseButton.vue";
import Icon from '../components/Icon.vue'
import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "BaseButton",
  component: BaseButton,
  subcomponents: { Icon },
  argTypes: {
    default: {
      control: 'text',
      description: 'Slot content',
      defaultValue: 'Button Idle'
    }
  }
} as Meta<typeof BaseButton>;


const Template : StoryFn<typeof BaseButton> = (args) =>  ({
    components: { BaseButton, Icon },
    setup(){
        return { args }
    },
    template: `
      <BaseButton> 
        {{ args.default }}
        <template v-if="args.icon" #icon>
          <Icon :icon="args.icon" />
        </template>
      </BaseButton>
      `
})

export const Default = Template.bind({})
Default.args = {
    default: 'Button Idle',
    icon: `arrow-right`
}