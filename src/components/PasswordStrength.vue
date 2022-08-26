<template>
  <section class="password-strength">
    <span class="password-strength__name">Strength</span>
    <span class="password-strength__classification">{{
      strengthClassicationMessage
    }}</span>
    <ul
      :class="[
        'password-strength__ratings',
        `password-strength__ratings--${props.strength}`,
      ]"
    >
      <li
        v-for="(_, index) in 4"
        :key="index"
        :class="[
          'password-strength__rating',
          index < amountOfActiveRatings && 'password-strength__rating--active',
        ]"
      />
    </ul>
  </section>
</template>

<script setup lang="ts">
import { computed } from "vue";

type StrengthLevels = "too-weak" | "weak" | "medium" | "strong";

type Props = {
  strength: StrengthLevels;
};

const props = defineProps<Props>();

const strengthClassicationMessage = computed(() => {
  const classificationsMessage = {
    "too-weak": "Too Weak!",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
  };

  return classificationsMessage[props.strength];
});

const amountOfActiveRatings = computed(() => {
  const levels = ["too-weak", "weak", "medium", "strong"];
  const ratingsAmount = levels.findIndex((level) => level === props.strength);
  return ratingsAmount + 1;
});
</script>
