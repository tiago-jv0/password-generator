import BaseInput from "../components/BaseInput.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "BaseInput",
  component: BaseInput,
} as Meta<typeof BaseInput>;


const Template : StoryFn<typeof BaseInput> = (args) => ({
    components: { BaseInput },
    setup(){
        return args
    },
    template: `<BaseInput v-bind="args" />`
}) 


export const Default = Template.bind({})