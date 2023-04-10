<script setup lang=ts>
import type * as UserList from '@/interfaces/UserList'
import axios from 'axios';
import { ref } from 'vue';


let response = await axios.get<UserList>("https://dummyjson.com/users");


</script>