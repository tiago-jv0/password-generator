<template>
  <label :for="props.id" class="checkbox">
    <input
      class="checkbox__input"
      type="checkbox"
      :id="props.id"
      :value="props.value"
      v-model="isChecked"
      :aria-checked="isChecked"
    />
    <p class="checkbox__label">{{ props.label }}</p>
  </label>
</template>

<script setup lang="ts">
import { computed } from "vue";

type Props = {
  label: string;
  id: string;
  value: string;
  modelValue: boolean | Array<string>;
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: "update:modelValue", value: Array<string> | boolean): void;
}>();

const isChecked = computed({
  get: () => {
    if (Array.isArray(props.modelValue)) {
      return props.modelValue.includes(props.value);
    }
    return props.modelValue;
  },
  set: (isChecked) => {
    if (Array.isArray(props.modelValue)) {
      const newValue = [...props.modelValue];
      if (isChecked) {
        newValue.push(props.value);
      } else {
        newValue.splice(newValue.indexOf(props.value), 1);
      }
      emit("update:modelValue", newValue);
    } else {
      emit("update:modelValue", isChecked);
    }
  },
});
</script>
