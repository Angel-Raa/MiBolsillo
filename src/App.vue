<script setup lang="ts">
import { ref, type Ref, computed, type ComputedRef, onMounted } from 'vue'
import IHeader from './components/IHeader.vue'
import IBalance from './components/IBalance.vue'
import IncomeExpenses from './components/IncomeExpenses.vue'
import TransactionList from './components/TransactionList.vue'
import AddTransaction from './components/AddTransaction.vue'
import { type Transaction } from './types/index'
import {useToast} from "vue-toastification"

const toast = useToast()
onMounted(() => {
  const savedTransactions = localStorage.getItem("transactions");
  
  if (savedTransactions !== null) {
    const parsedTransactions = JSON.parse(savedTransactions);
    transactions.value = parsedTransactions;
  }
})
// Total
const total: ComputedRef<number> = computed(() => {
  return transactions.value.reduce((acc, transaccion) => {
    return acc + transaccion.amount
  }, 0)
})

const transactions: Ref<Array<Transaction>> = ref([])
const handleTransactionDeleted = (id:number):void => {
  transactions.value =  transactions.value.filter((it) => it.id !== id)
  saveTransactionsToLocalStorage()
  toast.success('Transacción eliminada')
}
const handlerTransaction = (data: Transaction):void => {
  console.log(data)
  transactions.value.push({ id: data.id, text: data.text, amount: data.amount })
  saveTransactionsToLocalStorage()
  toast.success('Transacción agregada.');
}
console.log(transactions.value)
// income
const income: ComputedRef<string> = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount > 0)
    .reduce((acc, transaccion) => {
      return acc + transaccion.amount
    }, 0)
    .toFixed(2)
})
// expenses
const expenses: ComputedRef<string> = computed(() => {
  return transactions.value
    .filter((transaction) => transaction.amount < 0)
    .reduce((acc, transaccion) => {
      return acc + transaccion.amount
    }, 0)
    .toFixed(2)
})
const saveTransactionsToLocalStorage = ( ) => {
  localStorage.setItem('transactions', JSON.stringify(transactions.value))
}
</script>

<template>
  <IHeader />
  <main class="container">
    <IBalance :total="total" />
    <IncomeExpenses :income="income" :expenses="expenses" />
    <TransactionList :transactions="transactions" @handleTransactionDeleted="handleTransactionDeleted"/>
    <AddTransaction @handlerTransaction="handlerTransaction" />
  </main>
</template>
