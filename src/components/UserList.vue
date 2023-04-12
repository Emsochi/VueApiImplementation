<script setup lang=ts>
import type {UserList} from '@/interfaces/UserList'
import axios from 'axios';
import { ref } from 'vue';
import User from './User.vue';


let response = await axios.get<UserList>("https://dummyjson.com/users")

let users = ref(response.data)

</script>

<template>

    <User :user="user" :key="userIndex" v-for="(user, userIndex) in users.users"/>
    
</template>