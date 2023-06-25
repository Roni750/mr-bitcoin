<script>

import AppHeader from '@/cmps/AppHeader.vue'
import AppFooter from '@/cmps/AppFooter.vue'

export default {
    components: {
        AppHeader,
        AppFooter,
    }
}
</script>

<template>
    <AppHeader />
    <main class="main-layout">
        <RouterView />
    </main>
    <AppFooter />
</template>

<style scoped>
nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}
</style>
