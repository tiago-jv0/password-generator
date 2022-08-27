import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import BaseCheckbox from "@/components/BaseCheckbox.vue";
import { nextTick } from "vue";

describe('BaseCheckbox.vue', () => {
    it('should render properly', () => {
        const wrapper = mount(BaseCheckbox, {
            props: {
                label: 'Any text',
                id: 'any_id',
                value: 'any_value',
                modelValue: false
            },
        })

        expect(wrapper.text()).toContain('Any text')
    })

});