<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit flex column gap-1">
        <div class="form-wrapper flex column">
            <input v-model="contact.name" placeholder="Full name" type="text">
            <input v-model.email="contact.email" placeholder="Email address" type="email">
            <input v-model.phone="contact.phone" placeholder="Phone number" type="text">
            <button class="btn-primary">Save</button>
        </div>
        <div class="box"></div>
    </form>
</template>

<script>
import { contactService } from '@/services/contact.service.js'

export default {
    data() {
        return {
            contact: null,
        }
    },
    methods: {
        async save() {
            console.log("this.contact", this.contact)
            await contactService.save(this.contact)
            this.$router.push('/contact')
        }
    },
    async created() {
        const contactId = this.$route.params.id
        if (contactId) {
            this.contact = await contactService.get(contactId)
        } else {
            this.contact = contactService.getEmptyContact()
        }
    }
}
</script>

<style lang="scss">
.contact-edit {
    margin: 0 auto;
    justify-content: center;
    align-items: start;
    background: rgba(61, 61, 61, 0.3);
    border: 1px solid rgba(129, 129, 129, 0.3);
    border-radius: 10px;
    height: 200px;
    width: 400px;
    margin-inline: 0 auto;
    position: relative;

    .box {
    position: relative;
    height: 40px;
    width: 40px;
    right: -30px;

    &::after {
        position: absolute;
        content: "";
        left: 0;
        right: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        transform: scale(0.9) translateZ(0);
        filter: blur(15px);
        background: linear-gradient(to left, #ff5770, #e4428d, #c42da8, #9e16c3, #6501de, #9e16c3, #c42da8, #e4428d, #ff5770);
        background-size: 200% 200%;
        animation: animateGlow 1.25s linear infinite;
    }
}


    @keyframes animateGlow {
        0% {
            background-position: 0% 50%;
        }

        100% {
            background-position: 200% 50%;
        }
    }

    img {
        width: 100px;
        position: absolute;
        right: 0;
    }


    .form-wrapper {
        margin-inline-start: 2em;
    }

    input {
        all: unset;
        border: 1px solid #000;
        border-radius: 10px;
        width: 50%;
        padding: .5em;
        // cursor: text;
        color: whitesmoke;
        width: fit-content;
    }

    button {
        width: fit-content;
    }
}
</style>