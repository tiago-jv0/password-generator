import BaseCheckbox from "../components/BaseCheckbox.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "BaseCheckbox",
  component: BaseCheckbox,
} as Meta<typeof BaseCheckbox>;


const Template : StoryFn<typeof BaseCheckbox> = (args) =>  ({
    components: { BaseCheckbox },
    setup(){
        return { args }
    },
    template: ` <BaseCheckbox v-bind="args" /> `
})

export const Default = Template.bind({})
Default.args = {
    label: 'Any text',
    id: 'any_id',
    modelValue : false
}

export const Active = Template.bind({})
Active.args = {
    label: 'Any text',
    id: 'any_id',
    modelValue: true
}