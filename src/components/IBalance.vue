<script setup lang="ts">
import { defineProps } from 'vue';


const props = defineProps({
    total:{
        type:Number,
        required:true
    }
})
</script>
<template>
    <h3>Tu Balance</h3>
    <h2 id="balance">{{ props.total }}</h2>
</template>