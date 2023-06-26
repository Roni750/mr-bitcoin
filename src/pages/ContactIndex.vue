<template>
    <div class="contact-index">
        <UserMsg />
        <div class="index-interface flex row gap-3">
            <ContactFilter @filter="onSetFilterBy" />
            <RouterLink to="/contact/edit"><button class="btn-primary">Add</button></RouterLink>
        </div>
        <ContactList @remove="removeContact" v-if="contacts" :contacts="filteredContacts" />
    </div>
</template>

<script>
import {showSuccessMsg, showErrorMsg} from '../services/eventBus.service'
import ContactList from '@/cmps/ContactList.vue'
import ContactFilter from '@/cmps/ContactFilter.vue'
import UserMsg from '@/cmps/UserMsg.vue'

export default {
    data() {
        return {
            filterBy: {
                txt: '',
            },
        }
    },
    async created() {
        this.$store.dispatch({ type: 'loadContacts' })
    },
    methods: {
        async removeContact(contactId) {
            try {
                this.$store.dispatch({ type: 'removeContact', contactId })
                showSuccessMsg('Contact removed')
            } catch (err) {
                showErrorMsg('Cannot remove contact')
            }
        },
        onSetFilterBy(filterBy) {
            this.filterBy = filterBy
        }
    },
    computed: {
        filteredContacts() {
            const regex = new RegExp(this.filterBy.txt, 'i')
            return this.contacts.filter(contact => regex.test(contact.name))
        },
        contacts() { return this.$store.getters.contacts }
    },
    components: {
        ContactList,
        ContactFilter,
        UserMsg,
    }
}
</script>

<style lang="scss">
.index-interface {
    justify-content: center;
    align-items: center;
    margin-block-end: 2em;

    .btn-primary {
        color: whitesmoke;
    }
}

.contact-index {
    margin: 0;
}
</style>