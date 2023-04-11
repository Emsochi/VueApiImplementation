<script setup lang=ts>
import type { QuotesList } from '@/interfaces/QuotesList'; 
import axios from 'axios';
import { ref } from 'vue';
import Quotes from './Quotes.vue';


let response = await axios.get<QuotesList>("https://dummyjson.com/quotes")

let quoteList = ref(response.data)

</script>

<template>

    <Quotes :quotes="quotes" :key="quotesIndex" v-for="(quotes, quotesIndex) in quoteList.quotes"/>
    
</template>