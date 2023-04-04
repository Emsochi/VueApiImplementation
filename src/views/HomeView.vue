<script setup lang="ts">
import Product from '@/components/Product.vue';
import axios from 'axios';
import type { Product as ProductType  } from '@/interfaces/Product';
import { ref } from 'vue';

const myProduct = ref()

axios.get<ProductType>('https://dummyjson.com/product/1').then((response) => {
myProduct.value = response.data
})

//1. Stwórz komponent HomePage, który będzie zawierał logike odpowiedzialna za wyswietlanie produktow
//2. Wyświetl listę wszystkich produktów
//3* Utwórz żądanie post przez axios do którego dasz dane produktu, obojętnie jakie

const myTable = ["a", "b", "c"];


</script>

<template>
  <main>

    <p :key="productIndex" v-for="(product, productIndex) in myTable">{{ product }}</p>
    <Product :product="myProduct" />
  </main>
</template>
