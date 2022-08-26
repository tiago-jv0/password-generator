<template>
  <button class="button" @click="emit('click')">
    <slot />
    <slot name="icon" />
  </button>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (event: "click"): void;
}>();
</script>
