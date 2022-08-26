<template>
  <label :for="props.id" class="checkbox">
    <input
      class="checkbox__input"
      @click.stop="handleChange"
      type="checkbox"
      :name="props.name"
      :id="props.id"
      :checked="props.isChecked"
    />
    <span class="checkbox__landmark" />
    <p class="checkbox__text">{{ props.text }}</p>
  </label>
</template>

<script setup lang="ts">
type Props = {
  text: string;
  name: string;
  id: string;
  isChecked: boolean;
};

const handleChange = () => {
  console.log("emitting...");
  emit("clicked");
};

const props = defineProps<Props>();

const emit = defineEmits<{
  (event: "clicked"): void;
}>();
</script>
