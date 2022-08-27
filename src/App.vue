<template>
  <div class="page">
    <h1 class="page__title">Password Generator</h1>

    <div class="page__input-container">
      <BaseInput
        placeholder="P4$5W0rD!"
        name="password"
        id="password"
        :disabled="true"
        :value="generatedPassword"
      />
    </div>

    <main class="page__content">
      <RangeSlider
        purpose="Character Length"
        :maximum="20"
        v-model="maximumLength"
      />
      <div class="page__checkboxes">
        <BaseCheckbox
          label="Include Uppercase Letters"
          id="criterias-uppercase"
          value="uppercase"
          v-model="selectedCriterias"
        ></BaseCheckbox>

        <BaseCheckbox
          label="Include Lowercase Letters"
          id="criterias-lowercase"
          value="lowercase"
          v-model="selectedCriterias"
        ></BaseCheckbox>

        <BaseCheckbox
          label="Include Numbers"
          id="criterias-numbers"
          value="numbers"
          v-model="selectedCriterias"
        ></BaseCheckbox>

        <BaseCheckbox
          label="Include Symbols"
          id="criterias-symbols"
          value="symbols"
          v-model="selectedCriterias"
        ></BaseCheckbox>
      </div>

      <PasswordStrength :strength="passwordStrength" />

      <BaseButton @click="handleGeneratePassword"
        >Generate <span><BaseIcon icon="arrow-right" /></span
      ></BaseButton>
    </main>
  </div>
</template>

<script setup lang="ts">
import BaseButton from "./components/BaseButton.vue";
import BaseIcon from "./components/BaseIcon.vue";
import RangeSlider from "./components/RangeSlider.vue";
import BaseCheckbox from "./components/BaseCheckbox.vue";
import PasswordStrength from "./components/PasswordStrength.vue";
import BaseInput from "./components/BaseInput.vue";

import { ref, watch } from "vue";
import { generatePassword } from "./services/generatePassword";

type PasswordStrengthLevels = "too-weak" | "weak" | "medium" | "strong";

const selectedCriterias = ref<Array<string>>([]);
const maximumLength = ref(0);
const generatedPassword = ref("");
const passwordStrength = ref<PasswordStrengthLevels | null>(null);

watch(selectedCriterias, (newCriterias) => {
  const strenghtLevels = ["too-weak", "weak", "medium", "strong"] as const;

  passwordStrength.value = strenghtLevels[newCriterias.length - 1];
});

const handleGeneratePassword = () => {
  generatedPassword.value = generatePassword({
    hasLowercase: selectedCriterias.value.includes("lowercase"),
    hasNumbers: selectedCriterias.value.includes("numbers"),
    hasSymbols: selectedCriterias.value.includes("symbols"),
    hasUppercase: selectedCriterias.value.includes("uppercase"),
    length: maximumLength.value,
  });
};
</script>
