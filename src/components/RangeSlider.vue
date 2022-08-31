<template>
  <div class="slider">
    <label :for="props.id" class="slider__information">
      <p class="slider__purpose">{{ props.purpose }}</p>
      <strong class="slider__progress">{{ progress }}</strong>
    </label>
    <input
      aria-hidden="false"
      type="range"
      name="slider"
      class="slider__input"
      min="0"
      :id="props.id"
      :max="props.maximum"
      :value="progress"
      @input="handleInput"
      ref="inputRef"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const props = defineProps<{
  id: string;
  purpose: string;
  maximum: number;
  modelValue: number;
}>();

const emit = defineEmits<{
  (event: "change", payload: number): void;
  (event: "update:modelValue", payload: number): void;
}>();

const progress = ref(0);
const inputRef = ref(null);

watch(progress, (newProgressValue) => {
  if (inputRef.value) {
    const progressInPercentage = newProgressValue * (100 / props.maximum);

    (inputRef.value as HTMLInputElement).style.setProperty(
      "--progress",
      `${progressInPercentage}%`
    );
  }
});

const handleInput = (event: Event) => {
  const slider = event.target as HTMLInputElement;
  progress.value = parseInt(slider.value);

  emit("update:modelValue", progress.value);
};
</script>
