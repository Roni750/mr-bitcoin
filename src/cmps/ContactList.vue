<template>
    <section class="contact-list">
        <TransitionGroup name="list" tag="ul" class="cards clean-list">
            <li v-for="contact in contacts" :key="contact._id" class="card">
                <div class="card-border"></div>
                <div class="card-content">
                    <ContactPreview :contact="contact" />
                    <button class="btn-primary close-btn" @click="onRemoveContact(contact._id)">x</button>
                    <section class="actions">
                        <RouterLink :to="`/contact/${contact._id}`">
                            <button class="btn-primary">Details</button>
                        </RouterLink>
                        <RouterLink :to="`/contact/edit/${contact._id}`">
                            <button class="btn-primary">Edit</button>
                        </RouterLink>
                    </section>
                </div>
            </li>
        </TransitionGroup>
    </section>
</template>

<script>
import ContactPreview from '@/cmps/ContactPreview.vue'
export default {
    props: {
        contacts: { type: Array, required: true },
    },
    methods: {
        onRemoveContact(contactId) {
            this.$emit('remove', contactId)
        }
    },
    components: {
        ContactPreview,
    },

    mounted() {
        document.querySelector(".cards").onmousemove = e => {
            for (const card of document.getElementsByClassName("card")) {
                const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;

                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        }
    }
}
</script>

<style lang="scss">
@import '../assets/styles/setup/functions';

:root {
    --card-color: rgba(23, 23, 23);
}

.actions {
    display: flex;
    gap: 1em;
}

.btn-primary {
    display: flex;
    align-content: center;
    all: unset;
    cursor: pointer;
    width: fit-content;
    background: #1D976C;
    transition: 0.5s;
    padding-inline: .5em;
    padding-block: .2em;
    border-radius: 10px;
    color: black;
}

.close-btn {
    position: absolute;
    right: rem(10px);
    top: rem(10px);
    border-radius: 3px;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    width: calc(100% - 20px);
    justify-content: space-between;
    row-gap: 1.5em;

    &:hover {
        .card {
            .card-border {
                opacity: 1;
            }
        }
    }
}

.card {
    height: 200px;
    width: 320px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    position: relative;

    .card-content {
        background-color: var(--card-color);
        border-radius: inherit;
        margin: 1px;
        height: calc(100% - 2px);
        width: calc(100% - 2px);
        z-index: 2;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 2em;
        color: whitesmoke;
    }

    .card-border {
        background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y),
                rgba(255, 255, 255, 0.3),
                transparent 40%);
        z-index: 1;
    }

    &::before {
        background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),
                rgba(255, 255, 255, 0.06),
                transparent 40%);
        z-index: 3;
    }
}

.card::before,
.card>.card-border {
    background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y),
            rgba(255, 255, 255, 0.06),
            transparent 40%);
    border-radius: inherit;
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    left: 0px;
    top: 0px;
    opacity: 0;
    transition: opacity 500ms;
}

.card:hover::before,
.card:hover>.card-border {
    opacity: 1;
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
    transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
    position: absolute;
}
</style>