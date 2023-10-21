<template>
    <UContainer class="flex justify-center items-center h-screen">
        <UCard class="max-w-2xl ">
            <hanko-auth @onAuthFlowCompleted="afterLogin()" />
        </UCard>
    </UContainer>
</template>
<script setup>
definePageMeta({
    middleware: ["hanko-logged-out"],
})


</script>
