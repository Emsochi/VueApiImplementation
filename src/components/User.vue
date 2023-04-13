<script setup lang="ts">
import type {User} from "../interfaces/User"

interface Props {
user : User
}

const props = defineProps<Props>();


</script>

<template>
  <div>{{ user.firstName}}</div>
  <div>{{ user.lastName}}</div>
  <div>{{ user.age}}</div>
</template>