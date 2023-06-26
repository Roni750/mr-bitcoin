<template>
    <div class="login-page flex contact-details justify-center">
        <form class="login-form flex column gap-1" @submit.prevent="onLogin">
            <label for="name">Welcome aboard Guest!</label>
            <input class="contact-input" v-model="username" placeholder="Enter username" type="text" id="name">

            <button class="btn-primary">Login</button>
        </form>
        <div class="glowish"></div>
    </div>
</template>

<script>

import { userService } from '../services/user.service.js'
export default {
    data() {
        return {
            username: ''
        }
    },
    methods: {
        async onLogin() {
            await userService.loginSignUp(this.username)
            this.$router.push('/home')
        }
    }
}
</script>

<style lang="scss">
.login-page {
    padding: 1em;
    cursor: default;

    button {
        cursor: pointer;
    }
}

// .login-page {
//     position: absolute;
//     z-index: 50;

//     .glowish {
//         position: absolute;
//         height: 40px;
//         width: 40px;
//         background: white;
//         top: 100px;
//         z-index: 1;
//     }
// }

// .box {
//     position: absolute;
//     height: 40px;
//     width: 40px;
//     top: -20px;
//     left: 170px;
//     background: white;
//     z-index: 0;

//     &::after {
//         position: absolute;
//         content: "";
//         top: 0;
//         right: 0;
//         z-index: -1;
//         height: 100%;
//         width: 100%;
//         transform: scale(0.9) translateZ(0);
//         filter: blur(15px);
//         background: linear-gradient(to left, #ff5770, #e4428d, #c42da8, #9e16c3, #6501de, #9e16c3, #c42da8, #e4428d, #ff5770);
//         background-size: 200% 200%;
//         animation: animateGlow 1.25s linear infinite;
//     }
// }
</style>