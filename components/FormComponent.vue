<template>
  <div class="custom-form">
    <h1 class="form-title">{{ head }}</h1>
    <div v-for="(field, index) in fields" :key="index" class="form-field">
      <label class="field-label">{{ field.label }}</label>
      <input type="text" v-model="field.value" class="field-input" />
    </div>
    <button @click="handleSubmit" class="submit-button">{{ button }}</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  head: String,
  fields: Array,
  button: String,
});

const emits = defineEmits(['form-submit']);

const handleSubmit = () => {
  const formData = {};
  props.fields.forEach((field) => {
    formData[field.label] = field.value;
    field.value = ''; // Clear the field after submitting
  });
  emits('form-submit', formData);
};
</script>

<style scoped>
/* Different styles for the form component */
.custom-form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.form-title {
  font-size: 24px;
  color: #333;
  margin-bottom: 20px;
}

.form-field {
  margin-bottom: 15px;
}

.field-label {
  display: block;
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
}

.field-input {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
}

.submit-button {
  background-color: #3498db;
  color: #fff;
  padding: 12px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.submit-button:hover {
  background-color: #2980b9;
}
</style>
