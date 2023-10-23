<template>
    <UContainer class="flex justify-center pt-4">
        <UCard>
            <UForm
    :schema="insertUserSchema"
    :state="state"
    @submit="submit"
  >
    <UFormGroup label="Firstname" name="firstname">
      <UInput v-model="state.firstName" />
    </UFormGroup>
  
    <UFormGroup label="Lastname" name="lastname">
      <UInput v-model="state.lastName" />
    </UFormGroup>

    <UButton type="submit" class="mt-2">
      Submit
    </UButton>
  </UForm>


        </UCard>
    </UContainer>
</template>

<script setup lang="ts">

import { md5 } from 'js-md5';


import { createInsertSchema } from 'drizzle-zod';

import { z } from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui/dist/runtime/types'

import {users} from '~/server/db/schema'
const insertUserSchema = createInsertSchema(users)


type Schema = z.output<typeof insertUserSchema>

const state = ref<Schema>({
    userId: '',
    firstName: '',
    lastName: '',
    email: '',
    imageUrl: '',
})

const hanko = useHanko()

 await hanko?.user.getCurrent().then(
     (u) => {
        console.log(u)
        
             state.value.email = u.email
         state.value.userId = u.id
            state.value.imageUrl = `https://gravatar.com/avatar/${md5(u.email)}`
     }
)




async function submit (event: FormSubmitEvent<Schema>) {
    // Do something with data
  console.log(state.value)
    useFetch('/api/user', {method: 'post', body:{userId: state.value.userId, firstName: state.value.firstName, lastName: state.value.lastName, email: state.value.email, imageUrl: state.value.imageUrl    }}
    
    )
    navigateTo('/dashboard')
}

</script>
