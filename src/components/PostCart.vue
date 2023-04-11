<script setup lang="ts">
import type { CartDTO } from '@/interfaces/CartDTO'; 
import { ref } from 'vue';
import axios from 'axios';
import { ProductDTO } from '../interfaces/ProductDTO';


async function postCart() {

const existingProduct: ProductDTO = {
    id: id.value,
    quantity: quantity.value
}

const newCart: CartDTO = {
    userId: userId.value,
    products: [existingProduct]
}



const created = await axios.post<Cart>("https://dummyjson.com/carts/add", newCart)

console.log(created.data)

}

const body = ref()
const postId = ref()
const userId = ref()

</script>

<template>


Body:
<input type="text" v-model="body" />

<br>
Post ID:
<input type="text" v-model="postId">

<br>

User ID:
<input type="text" v-model="userId">

<button @click="postComment">Post Comment</button>



</template>