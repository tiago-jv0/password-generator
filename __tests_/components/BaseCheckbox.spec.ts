import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import BaseCheckbox from "@/components/BaseCheckbox.vue";

describe("BaseCheckbox.vue", () => {
  it("should render properly", () => {
    const wrapper = mount(BaseCheckbox, {
      props: {
        label: "Any text",
        id: "any_id",
        value: "any_value",
        modelValue: false,
      },
    });

    const input = wrapper.find(".checkbox__input").element as HTMLInputElement;

    expect(wrapper.text()).toContain("Any text");
    expect(input.checked).toBeFalsy();
  });

  describe("Array Cases", () => {
    it("should set checked to false if value property is not included in modelValue", async () => {
      const wrapper = mount(BaseCheckbox, {
        props: {
          label: "Any text",
          id: "any_id",
          value: "any_value",
          modelValue: [],
        },
      });

      const input = wrapper.find(".checkbox__input")
        .element as HTMLInputElement;

      expect(input.checked).toBeFalsy();
    });

    it("should set checked to true if value property is included in modelValue", async () => {
      const wrapper = mount(BaseCheckbox, {
        props: {
          label: "Any text",
          id: "any_id",
          value: "any_value",
          modelValue: ["any_value"],
        },
      });

      const input = wrapper.find(".checkbox__input")
        .element as HTMLInputElement;

      expect(input.checked).toBeTruthy();
    });

    it("should emit update:modelValue with checkbox value on change", async () => {
        const wrapper = mount(BaseCheckbox, {
          props: {
            label: "Any text",
            id: "any_id",
            value: "any_value",
            modelValue: [],
          },
        });
  
        const input = wrapper.find(".checkbox__input");
  
        await input.setValue(true);
  
        expect(wrapper.emitted()["update:modelValue"]).toBeDefined();
        expect(wrapper.emitted()["update:modelValue"].length).toBe(1);
        expect(wrapper.emitted()["update:modelValue"]).toEqual([[['any_value']]]);
  
      });

      it("should emit update:modelValue with checkbox value on change", async () => {
        const wrapper = mount(BaseCheckbox, {
          props: {
            label: "Any text",
            id: "any_id",
            value: "any_value",
            modelValue: ['any_value'],
          },
        });
  
        const input = wrapper.find(".checkbox__input");
  
        await input.setValue(false);
  
        expect(wrapper.emitted()["update:modelValue"]).toBeDefined();
        expect(wrapper.emitted()["update:modelValue"].length).toBe(1);
        expect(wrapper.emitted()["update:modelValue"]).toEqual([[[]]]);
  
      });
  });

  describe("Boolean Cases", () => {
    it("should emit update:modelValue with checkbox value  on change", async () => {
      const wrapper = mount(BaseCheckbox, {
        props: {
          label: "Any text",
          id: "any_id",
          value: "any_value",
          modelValue: false,
        },
      });

      const input = wrapper.find(".checkbox__input");

      await input.setValue(true);

      expect(wrapper.emitted()["update:modelValue"]).toBeDefined();
      expect(wrapper.emitted()["update:modelValue"].length).toBe(1);
      expect(wrapper.emitted()["update:modelValue"]).toEqual([[true]]);

    });

    it("should set checked to false if modelValue is false", async () => {
      const wrapper = mount(BaseCheckbox, {
        props: {
          label: "Any text",
          id: "any_id",
          value: "any_value",
          modelValue: false,
        },
      });

      const input = wrapper.find(".checkbox__input")
        .element as HTMLInputElement;

      expect(input.checked).toBeFalsy();
    });

    it("should set checked to true if modelValue is true", async () => {
      const wrapper = mount(BaseCheckbox, {
        props: {
          label: "Any text",
          id: "any_id",
          value: "any_value",
          modelValue: true,
        },
      });

      const input = wrapper.find(".checkbox__input")
        .element as HTMLInputElement;

      expect(input.checked).toBeTruthy();
    });
  });
});
