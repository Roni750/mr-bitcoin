<template>
    <header class="app-header full">
        <div class="square"></div>
        <div class="square"></div>
        <Logo />
        <div className="main-layout">
            <nav class="navbar flex gap-1">
                <span class="nav-txt" data-value="Home" @mouseover="handleMouseOver">
                    <RouterLink to="/">Home</RouterLink>
                </span>
                <span class="nav-txt" data-value="About" @mouseover="handleMouseOver">
                    <RouterLink to="/about">About</RouterLink>
                </span>
                <span class="nav-txt" data-value="Stats" @mouseover="handleMouseOver">
                    <RouterLink to="/stats">Stats</RouterLink>
                </span>
                <span class="nav-txt" data-value="Contacts" @mouseover="handleMouseOver">
                    <RouterLink to="/contact">Contacts</RouterLink>
                </span>
            </nav>
        </div>
    </header>
</template>

<script>
import Logo from '../cmps/Logo.vue'

export default {
    methods: {
        handleMouseOver(event) {
            console.log("event.target.value", event.target.value)
            const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            let iteration = 0
            let interval = null
            clearInterval(interval)
        }
    },

    mounted() {
        const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

        let interval = null

        const elements = document.querySelectorAll(".nav-txt")

        elements.forEach(element => {
            element.onmouseover = event => {
                let iteration = 0

                clearInterval(interval)
                console.log("event.target", event.target)
                interval = setInterval(() => {
                    event.target.innerText = event.target.innerText
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return event.target.dataset.value[index]
                            }

                            return letters[Math.floor(Math.random() * 26)]
                        })
                        .join("")

                    if (iteration >= event.target.dataset.value.length) {
                        // console.log("event.target.dataset", event.target.dataset.value.length)
                        clearInterval(interval)
                    }

                    iteration += 1 / 3
                }, 30)
            }
        })
    },
    components: {
        Logo
    }
}

</script>

<style lang="scss"></style>