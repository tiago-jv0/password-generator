import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import BaseButton from "@/components/BaseButton.vue";


describe('BaseButton.vue', () => {
    it('should render properly' , () => {
        const wrapper = mount(BaseButton, {
            slots: {
                default: 'Button Idle',
                icon: `any Icon`
            }
        })

        expect(wrapper.text()).toContain('Button Idle')
        expect(wrapper.text()).toContain('any Icon')
    })

    it('should emit click when user clicks the button',async () => {
        const wrapper = mount(BaseButton)

        await wrapper.trigger('click')

        const emittedEvents = wrapper.emitted()

        expect(emittedEvents.click).toBeDefined()
        expect(emittedEvents.click.length).toBe(1)
        expect(emittedEvents.click).toEqual([[]])
    })
});
