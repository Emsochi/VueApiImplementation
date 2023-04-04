<script setup lang="ts">
import type { Product } from '@/interfaces/Product';

interface Props {
product : Product
}


const props = defineProps<Props>();


</script>

<template>
  <div>{{ product.title}}</div>
  <div>{{ product.brand }}</div>
  <div>{{ product.category }}</div>
</template>