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
            <UTable :columns="columns" :rows="users.data.value?.body.res" />
            {{ info }}
        </UCard>

    </UContainer>
</template>

<script setup lang="ts">
const columns = [{
    key: 'userId',
    label: 'ID'
}, {
    key: 'firstName',
    label: 'Fornavn'
}, {
    key: 'lastName',
    label: 'efternavn'
}, {
    key: 'email',
    label: 'Email'
},]


const info = await useFetch('/api/user');

const users = await useFetch('/api/users');

import { md5 } from 'js-md5';

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
