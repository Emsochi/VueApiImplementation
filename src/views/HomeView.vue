<script setup lang="ts">
import Product from '@/components/Product.vue';
import axios from 'axios';
import type { Product as ProductType  } from '@/interfaces/Product';
import { ref } from 'vue';
import ProductList from '@/components/ProductList.vue';
import UserList from '@/components/UserList.vue';
import QuotesList from '@/components/QuotesList.vue';
import PostComment from '@/components/PostComment.vue';
import PostCart from '@/components/PostCart.vue'; 




//1. Stwórz komponent HomePage, który będzie zawierał logike odpowiedzialna za wyswietlanie produktow
//2. Wyświetl listę wszystkich produktów
//3* Utwórz żądanie post przez axios do którego dasz dane produktu, obojętnie jakie

const myTable = ["a", "b", "c"];


</script>

<template>
  <main>

    <PostComment/>
    <PostCart/>

    <Suspense>
      <QuotesList/>
    </Suspense>
  </main>
</template>
