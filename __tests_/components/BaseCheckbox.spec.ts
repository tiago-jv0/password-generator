import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import BaseCheckbox from "@/components/BaseCheckbox.vue";

describe('BaseCheckbox.vue', () => {
    it('should render properly', () => {
        const wrapper = mount(BaseCheckbox, {
            props: {
                text: 'Any text',
                name: 'any_name',
                id: 'any_id',
                isChecked: false
            },
        })

        expect(wrapper.text()).toContain('Any text')
    })

    it('should emit change if user clicks label', async () => {
        const wrapper = mount(BaseCheckbox, {
            props: {
                text: 'Any text',
                name: 'any_name',
                id: 'any_id',
                isChecked: false
            },
            slots: {
                default: 'Checkbox Active'
            }
        })

        const label = wrapper.find('label')

        await label.trigger('click')

        const emittedEvents = wrapper.emitted()

        expect(emittedEvents.clicked).toBeDefined()
        expect(emittedEvents.clicked.length).toBe(1)
        expect(emittedEvents.clicked).toEqual([[]])
    })
});