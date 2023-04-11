<script setup lang="ts">
import type { Quote } from '../interfaces/Quote';

interface Props {
quotes : Quote
}

const props = defineProps<Props>();


</script>

<template>
  <div>{{ quotes.id}}</div>
  <div>{{ quotes.quote}}</div>
  <div>{{ quotes.author}}</div>
</template>