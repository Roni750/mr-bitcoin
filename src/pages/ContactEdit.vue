<template>
    <form @submit.prevent="save" v-if="contact" class="contact-details m-0 flex column gap-1">
        <div class="form-wrapper flex column gap-1">
            <input v-model="contact.name" class="contact-input" placeholder="Full name" type="text">
            <input v-model.email="contact.email" class="contact-input" placeholder="Email address" type="email">
            <input v-model.phone="contact.phone" class="contact-input" placeholder="Phone number" type="text">
            <button class="btn-primary">Save</button>
        </div>
    </form>
</template>
<!-- <template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit flex column gap-1">
        <div class="form-wrapper flex column">
            <input v-model="contact.name" placeholder="Full name" type="text">
            <input v-model.email="contact.email" placeholder="Email address" type="email">
            <input v-model.phone="contact.phone" placeholder="Phone number" type="text">
            <button class="btn-primary">Save</button>
        </div>
        <div class="box"></div>
    </form>
</template> -->

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
        color: whitesmoke;
        width: fit-content;
    }

    button {
        width: fit-content;
    }
}
</style>