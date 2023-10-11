<template>
    <header class="bg-white shadow">
        <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        </div>
    </header>
    <main>

            <UContainer class="mt-4">
                <UCard 
                    :ui="{
                        divide: 'divide-y-0',
                        header: {
                            padding: 'px-4 py-2 sm:px-6'                  
                        }
                    }">
                    <template #header >
                        <div class="flex justify-between">
                            <div>
                                <a href="#" class="ui-user flex gap-x-2 p-2 rounded-full hover:shadow-md bg-gray-100">
                                    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" size="xs" />
                                    <div class="min-w-0 flex-auto">
                                        <p class="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                                    </div>
                                </a>
                            </div>
                            <div>
                                <UDropdown :items="items" :popper="{ placement: 'bottom-start' }">
                                    <UButton color="white" variant="ghost" label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" />
                                </UDropdown>
                            </div>
                        </div>
                        
                    </template>
                    
                    <a href="#" class="ui-user flex min-w-0 gap-x-4 w-60 p-2 rounded-md -ml-2 hover:shadow-lg">
                        
                        <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Avatar" size="lg" />
                        <div class="min-w-0 flex-auto">
                            <p class="text-sm font-semibold leading-6 text-gray-900">Leslie Alexander</p>
                            <p class="truncate text-xs leading-5 text-gray-300">Общественный деятель, экономист, специалист цифровых технологий, наставник в патриотических движениях.</p>
                        </div>
                    </a>

                    <template #footer >
                        <UButton color="primary" variant="solid" >
                            готово
                        </UButton>
                    </template>
                </UCard>
            </UContainer>

    </main>
</template>

<script setup>
const items = [
  [{
    label: 'Profile',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/739984?v=4'
    }
  }]
]
</script>

<style lang="scss" scoped>

</style>