<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
  income: {
    type: String,
    required: true
  },
  expenses: {
    type: String,
    required: true
  }
})
</script>
<template>
  <article class="inc-exp-container">
    <div>
      <h4>Ingreso</h4>
      <p id="money-plus" class="money plus">${{ props.income }}</p>
    </div>
    <div>
      <h4>Gastos</h4>
      <p class="money minus" id="money-minus">-${{ props.expenses }}</p>
    </div>
  </article>
</template>
