<template>
  <label class="input__container">
    <input
      type="text"
      class="input__input"
      :placeholder="props.placeholder"
      :name="props.name"
      :value="props.value"
      @input="handleInput"
      :disabled="props.disabled"
      :aria-disabled="props.disabled"
      ref="inputRef"
    />

    <div class="input__icon" @click="copyTextToClipboard">
      <p
        class="input__icon-text"
        :class="[isCopying && 'input__icon-text--active']"
      >
        Copied
      </p>
      <BaseIcon icon="copy" />
    </div>
  </label>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BaseIcon from "./BaseIcon.vue";

const emit = defineEmits<{
  (event: "input", payload: string): void;
}>();

const inputRef = ref(null);
const isCopying = ref(false);

const copyTextToClipboard = () => {
  if (inputRef.value) {
    /* Select the text field */
    isCopying.value = true;
    (inputRef.value as HTMLInputElement).select();
    (inputRef.value as HTMLInputElement).setSelectionRange(
      0,
      99999
    ); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText((inputRef.value as HTMLInputElement).value);

    setTimeout(() => {
      isCopying.value = false;
    }, 2000);
  }
};

const handleInput = (event: Event) => {
  const input = event.target as HTMLInputElement;
  emit("input", input.value);
};

const props = defineProps<{
  value: string;
  placeholder: string;
  name: string;
  id: string;
  disabled: boolean;
}>();
</script>
