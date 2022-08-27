import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";

import PasswordStrength from "@/components/PasswordStrength.vue";

describe("PasswordStrength.vue", () => {
  it("should render properly", () => {
    const wrapper = mount(PasswordStrength, {
      strength: 'weak'
    });

    expect(wrapper.vm).toBeDefined();
  });

  it("should handle too weak state when strength is too weak", () => {
    const wrapper = mount(PasswordStrength, {
      props: {
        strength: "too-weak"
      }
    });

    expect(wrapper.text()).toContain("Too Weak!");
    expect(wrapper.findAll('.password-strength__rating--active')).toHaveLength(1)
  });

  it("should handle weak state when strength is weak", () => {
    const wrapper = mount(PasswordStrength, {
      props: {
        strength: 'weak'
      }
    });

    expect(wrapper.text()).toContain("Weak");
    expect(wrapper.findAll('.password-strength__rating--active')).toHaveLength(2)
  });

  it("should handle medium state when strength is medium", () => {
    const wrapper = mount(PasswordStrength, {
      props: {
        strength: "medium"
      }
    });

    expect(wrapper.text()).toContain("Medium");
    expect(wrapper.findAll('.password-strength__rating--active')).toHaveLength(3)
  });

  it("should handle medium state when strength is strong", () => {
    const wrapper = mount(PasswordStrength, {
      props: {
        strength: "strong"
      }
    });

    expect(wrapper.text()).toContain("Strong");
    expect(wrapper.findAll('.password-strength__rating--active')).toHaveLength(4)
  });
});
