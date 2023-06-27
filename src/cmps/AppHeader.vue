<template>
    <header class="app-header full">
        <div class="square"></div>
        <div class="square"></div>
        <Logo />
        <div className="main-layout">
            <nav class="navbar flex gap-1">
                <span class="nav-txt" data-value="Home">
                    <RouterLink to="/home">Home</RouterLink>
                </span>
                <span class="nav-txt" data-value="Stats">
                    <RouterLink to="/stats">Stats</RouterLink>
                </span>
                <span class="nav-txt" data-value="Contacts">
                    <RouterLink to="/contact">Contacts</RouterLink>
                </span>
            </nav>
        </div>
        <div v-if="this.user" class="user-header-section flex row justify-center align-center gap-half">
            <span class="nav-txt">
                Hello {{ this.user.username }}
            </span>
            <!-- <span class="nav-txt" data-value="Contacts">
                <RouterLink :to="`/user/${user._id}`">
                    <font-awesome-icon class="header-icon" icon="fa-solid fa-user" />
                </RouterLink>
            </span> -->
            <span class="nav-txt" data-value="Contacts">
                <RouterLink to="/" @click="onLogout">
                    <font-awesome-icon class="header-icon flex justify-center" icon="fa-solid fa-sign-out" />
                </RouterLink>
            </span>
        </div>
    </header>
</template>

<script>
import Logo from '../cmps/Logo.vue'
import { userService } from '../services/user.service.js';

export default {
    computed: {
        getUser() { return this.$store.getters.getUser }
    },
    data() {
        return {
            user: null
        }
    },
    async created() {
        this.user = userService.getLoggedinUser()
        // const user = userService.getLoggedinUser()
        // console.log("this.$store.getters", this.$store.getters)
        // this.user = await this.$store.getters.getUser(user)
        // console.log("this.user", this.user)
    },
    methods: {
        async onLogout() {
            await userService.logout()
        }
    },
    // methods: {
    //     handleMouseOver(event) {
    //         console.log("event.target.value", event.target.value)
    //         const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //         let iteration = 0
    //         let interval = null
    //         clearInterval(interval)
    //     }
    // },

    // mounted() {
    //     const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    //     let interval = null

    //     const elements = document.querySelectorAll(".nav-txt")

    //     elements.forEach(element => {
    //         element.onmouseover = event => {
    //             let iteration = 0

    //             clearInterval(interval)
    //             console.log("event.target", event.target)
    //             interval = setInterval(() => {
    //                 event.target.innerText = event.target.innerText
    //                     .split("")
    //                     .map((letter, index) => {
    //                         if (index < iteration) {
    //                             return event.target.dataset.value[index]
    //                         }

    //                         return letters[Math.floor(Math.random() * 26)]
    //                     })
    //                     .join("")

    //                 if (iteration >= event.target.dataset.value.length) {
    //                     // console.log("event.target.dataset", event.target.dataset.value.length)
    //                     clearInterval(interval)
    //                 }

    //                 iteration += 1 / 3
    //             }, 30)
    //         }
    //     })
    // },
    components: {
        Logo
    }
}

</script>

<style lang="scss">
@import '../assets/styles/setup/variables';
.header-icon {
    background: rgb(66, 66, 66);
    color: black;
    padding: .2em;
    border-radius: 5px;
}
</style>