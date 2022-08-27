import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import RangeSlider from "@/components/RangeSlider.vue";

describe('RangerSlider.vue', () => {

    it('should render properly', () => {
        const wrapper = mount(RangeSlider, {
            props: {
                purpose : 'Any Purpose',
                maximum: 100,
                modelValue: 0
            }
        })

        expect(wrapper.text()).toContain('Any Purpose')

        const input = wrapper.find('.slider__input').element as HTMLInputElement

        expect(input.getAttribute('max')).toBe('100')
        expect(input.value).toBe('0')

    })

    it('should emit update model value when user swipes slider' , async () => {
        const wrapper = mount(RangeSlider, {
            props: {
                purpose : 'Any Purpose',
                maximum: 100,
                modelValue: 0
            }
        })

        const input = wrapper.find('.slider__input')
        await input.setValue(15)

        expect(wrapper.emitted()['update:modelValue']).toBeDefined()
        expect(wrapper.emitted()['update:modelValue'].length).toBe(1)
        expect(wrapper.emitted()['update:modelValue']).toEqual([[15]])

    })



    it('should update progress bar when user swipes slider' , async () => {
        const wrapper = mount(RangeSlider, {
            props: {
                purpose : 'Any Purpose',
                maximum: 100,
                modelValue: 0
            }
        })

        const input = wrapper.find('.slider__input')
        await input.setValue(15)

        const inputElement = input.element as HTMLInputElement

        expect(inputElement.style.getPropertyValue('--progress')).toBe("15%")
    })
})