<script setup lang=ts>
import Product from './Product.vue';
import type { ProductsList } from '@/interfaces/ProductsList';
import axios from 'axios';
import { ref } from 'vue';

let response = await axios.get<ProductsList>("https://dummyjson.com/products")

let products = ref(response.data)


</script>

<template>

<Product :key="productIndex" :product="product" v-for="(product, productIndex) in products.products "></Product>

</template>