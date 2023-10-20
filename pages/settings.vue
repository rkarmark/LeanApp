<script setup>
definePageMeta({
    middleware: ["hanko-logged-in"],
    layout: "custom"
})
</script>

<template>
    <hanko-profile/>
</template>