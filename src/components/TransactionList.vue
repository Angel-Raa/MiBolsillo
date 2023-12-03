<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import { type Transaction } from '@/types';
const emit = defineEmits(['handleTransactionDeleted'])
const props = defineProps({
  transactions:{
    type:Array<Transaction>,
    required:true,    
  }
})

const deleteTransaction = (id:number) => {
  emit('handleTransactionDeleted', id)
}
</script>

<template>
  <h3>Historia</h3>
  <ul class="list" id="list">
    <li v-for="transaction in props.transactions" :key="transaction.id"
    :class="transaction.amount < 0 ? 'minus' : 'plus' ">
      {{ transaction.text }}<span>${{ transaction.amount }}</span>
      <button class="delete-btn" @click="deleteTransaction(transaction.id)">X</button>
    </li>
  </ul>
</template>
