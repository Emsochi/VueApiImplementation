<script setup lang=ts>
import type * as UserList from '@/interfaces/UserList'
import axios from 'axios';
import { ref } from 'vue';


let response = await axios.get<UserList>("https://dummyjson.com/users")

let type users = ref(response.data)

</script>

<template>

    <Product :key="productIndex" :product="UserList" v-for="(UserList, productIndex) in products.products "></Product>
    
    </template>