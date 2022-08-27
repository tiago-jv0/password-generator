import { describe, expect, it, vitest } from "vitest";
import { flushPromises, mount } from "@vue/test-utils";

import BaseInput from "@/components/BaseInput.vue";


describe('BaseInput.vue', () => {
    it('Should render properly', () => {
        const wrapper = mount(BaseInput, {
            props: {
                value: "",
                placeholder: 'any_placeholder',
                name: 'any_name',
                id: 'any_id',
                disabled: false
            }
        })

        expect(wrapper.vm).toBeDefined()
    })

    it('Should emit input when user type in input', async () => {
        const wrapper = mount(BaseInput, {
            props: {
                value: "",
                placeholder: 'any_placeholder',
                name: 'any_name',
                id: 'any_id',
                disabled: false
            }
        })

        const input = wrapper.find('input')

        await input.setValue('any_value')

        expect(wrapper.emitted().input).toBeDefined()
        expect(wrapper.emitted().input.length).toBe(1)
        expect(wrapper.emitted().input).toEqual([['any_value']])
    })

    it('Should handle copy funcionality when clicks to copy text', async () => {
        const navigatorMock = {
            clipboard: {
                writeText: vitest.fn()
            }
        }

        Object.assign(navigator, navigatorMock)

        

        const wrapper = mount(BaseInput, {
            props: {
                value: "any_value",
                placeholder: 'any_placeholder',
                name: 'any_name',
                id: 'any_id',
                disabled: false
            }
        })

        const copyIcon = wrapper.find('.input__icon')

        await copyIcon.trigger('click')

        expect(navigatorMock.clipboard.writeText).toHaveBeenCalledTimes(1)
        expect(navigatorMock.clipboard.writeText).toHaveBeenCalledWith('any_value')
        expect(wrapper.text()).toContain('Copied')

       
    })


});