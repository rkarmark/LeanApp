<template>
    <UContainer>

        <UCard>
            <template #header>
                <div class="flex justify-between" >
                    
                    <UButton @click="signOut">
                        Sign Out
                    </UButton>
                </div>
            </template>
            <UTable v-if="users?.body.res" :columns="columns" :rows="users.body.res" />
        </UCard>
    </UContainer>
</template>

<script setup lang="ts">
import jwtDecode from 'jwt-decode';

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



const { data } = await useFetch('/api/user');

const {data: users} = await useFetch('/api/users');


const hanko = useHanko()

const user = await hanko?.user.getCurrent()

const cookie = useCookie('hanko')


 const header = jwtDecode(cookie.value!)


if (users.value?.body.res.filter(e => e.userId === header.sub).length > 0) {
    console.log("exists")
} else {
    navigateTo('/newuser')
}

function signOut() {
    console.log("signing out")
    hanko?.user.logout()
}


definePageMeta({
    middleware: ["hanko-logged-in"],
})

</script>
