<template>
      <hanko-auth  @onAuthFlowCompleted="afterLogin()" />
</template>
<script setup>
definePageMeta({
    middleware: ["hanko-logged-out"],
})


</script>
   