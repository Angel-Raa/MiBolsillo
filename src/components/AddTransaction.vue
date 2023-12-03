<script setup lang="ts">
import type { Transaction } from '@/types';
import { ref, type Ref, defineEmits } from 'vue'
import {useToast} from "vue-toastification"
const text: Ref<string> = ref('')
const amount: Ref<string> = ref('')
const toast = useToast()
const emit = defineEmits(['handlerTransaction'])
const onSumit = (): void => {
  if(!text.value || !amount.value){
      toast.error('Se deben llenar ambos campos.')
      return;
  }

  const transaccion:Transaction = {
    id:Math.floor(Math.random() * 100000) , // Unique ID
    text:text.value,
    amount:parseFloat(amount.value)
  }
  emit('handlerTransaction', transaccion)
  text.value = ''
  amount.value = ''
}

</script>
<template>
  <h3>Agregar nueva transacción</h3>
  <form id="form" @submit.prevent="onSumit()">
    <div class="form-control">
      <label for="text">Texto</label>
      <input type="text" id="text" placeholder="Ingrese texto..." v-model="text" />
    </div>
    <div class="form-control">
      <label for="amount"
        >Cantidad <br />
        (negativo - gastos, positivo - ingresos)</label
      >
      <input type="text" id="amount" placeholder="Ingrese la cantidad..." v-model="amount" />
    </div>
    <button class="btn">Agregar transacción</button>
  </form>
</template>
