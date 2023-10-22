<template>
    <UContainer>

        <UCard>
            <template #header>
                <div class="flex justify-between">
                    <UAvatar :src="info.data.value?.body.res[0].userImage" :alt="info.data.value?.body.res[0].userName" />
                    <h1>
                        {{ info.data.value?.body.res[0].userName }}
                    </h1>
                    <UButton @click="signOut">
                        Sign Out
                    </UButton>
                </div>
            </template>
            {{ info.data.value?.body.res[0].userId }}
            {{ info }}
        </UCard>

    </UContainer>
</template>

<script setup lang="ts">

const info = await useFetch('/api/user');

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
    hash.value = `https://gravatar.com/avatar/${md5(user.email)}?d=404`
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
