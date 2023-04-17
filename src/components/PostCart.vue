<script setup lang="ts">
import type { CartDTO } from '@/interfaces/CartDTO'; 
import { ref } from 'vue';
import axios from 'axios';
import type { ProductDTO } from '../interfaces/ProductDTO';


async function postCart() {

const existingProduct: ProductDTO = {
    id: id.value,
    quantity: quantity.value
}

const newCart: CartDTO = {
    userId: userId.value,
    products: [existingProduct]
}



const created = await axios.post<CartDTO>("https://dummyjson.com/carts/add", newCart)

console.log(created.data)

}

const id = ref()
const products = ref()
const quantity = ref()
const userId = ref ()

</script>s

<template>


ID:
<input type="text" v-model="id" />

<br>
Products:
<input type="text" v-model="products">

<br>

Quantity:
<input type="text" v-model="quantity">

<br>

User ID:
<input type="text" v-model="userId"

<button @click="postCart">Add To Cart</button>



</template>