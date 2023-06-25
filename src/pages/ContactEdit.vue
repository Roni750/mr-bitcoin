<template>
    <form @submit.prevent="save" v-if="contact" class="contact-edit flex column gap-1">
        <div class="form-wrapper flex column">
            <input v-model="contact.name" placeholder="Full name" type="text">
            <input v-model.email="contact.email" placeholder="Email address" type="email">
            <input v-model.phone="contact.phone" placeholder="Phone number" type="text">
            <button>Save</button>
        </div>
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
    justify-content: center;
    align-items: start;
    background: rgba(61, 61, 61, 0.3);
    border: 1px solid rgba(129, 129, 129, 0.3);
    border-radius: 10px;
    height: 200px;
    width: 400px;
    margin-inline: 0 auto;

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
    }
}
</style>