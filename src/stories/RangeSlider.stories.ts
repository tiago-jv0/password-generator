import RangeSlider from "../components/RangeSlider.vue";

import type { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "RangeSlider",
  component: RangeSlider,
} as Meta<typeof RangeSlider>;


const Template : StoryFn<typeof RangeSlider> = (args) =>  ({
    components: { RangeSlider },
    setup(){
        return { args }
    },
    template: ` <RangeSlider v-bind="args" /> `
})

export const Default = Template.bind({})
Default.args = {
    purpose: 'Character Length',
    maximum: 20
}