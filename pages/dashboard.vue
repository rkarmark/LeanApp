<template>
    logged in!


</template>

<script setup lang="ts">
const hanko = useHanko()
console.log(hanko.relay._session._sessionState.ls.session.userID)

definePageMeta({
    middleware: ["hanko-logged-in"],
    
    })
</script>