<template>
    <UContainer>

        <UCard>
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
            {{ info }}
        </UCard>

    </UContainer>
</template>

<script setup lang="ts">

const info = await useFetch('/api/endpoint');

import { md5 } from 'js-md5';

const token = useCookie('hanko')

import decodeJWT from 'jwt-decode'

if (!token.value) {
    throw new Error("No token")
}

const decoded = decodeJWT(token.value)

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


definePageMeta({
    middleware: ["hanko-logged-in"],
})

</script>
