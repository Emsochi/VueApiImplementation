<script setup lang="ts">
import type { CommentDTO } from '@/interfaces/CommentDTO';
import { ref } from 'vue';
import axios from 'axios';


async function postComment() {

const newComment : CommentDTO = {
    body: body.value,
    postId: postId.value,
    userId: userId.value
}

const created = await axios.post<Comment>("https://dummyjson.com/comments/add", newComment)

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