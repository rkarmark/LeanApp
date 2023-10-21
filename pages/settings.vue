<script setup lang="ts">
definePageMeta({
    middleware: ["hanko-logged-in"],
})

import { md5 } from 'js-md5';

const hanko = useHanko()

const user = await hanko?.user.getCurrent()

const hash = ref<String | undefined>(undefined)

if (user) {
    hash.value = `https://gravatar.com/avatar/${md5(user.email)}`
} else {
    hash.value = undefined
}


function signOut() {
    console.log("signing out")
    hanko?.user.logout()
}

</script>

<template>
    <UContainer class="flex justify-center pt-4">
        <UCard class="max-w-2xl ">
            <template #header>
                <div class="flex justify-between">
                    <UAvatar :src="hash" alt="Rolf Andersen" />
                    <h1>
                        {{ user?.email }}
                    </h1>
                    <UButton @click="signOut">
                        Sign Out
                    </UButton>
                </div>
            </template>
            <hanko-profile />
        </UCard>
    </UContainer>
</template>
