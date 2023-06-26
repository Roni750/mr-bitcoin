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

.close-btn {
    position: absolute;
    right: rem(10px);
    top: rem(10px);
    border-radius: 3px;
}

.cards {
    row-gap: 1em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(rem(320px), 1fr));
    grid-auto-flow: dense;
    column-gap: 1.5em;
    justify-items: center;

    &:hover {
        .card {
            .card-border {
                opacity: 1;
            }
        }
    }
}

.card {
    height: rem(200px);
    width: rem(320px);
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 10px;
    cursor: pointer;
    position: relative;

    .card-content {
        border-radius: inherit;
        margin: 1px;
        height: calc(100% - 2px);
        width: calc(100% - 2px);
        z-index: 3;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 1em;
        color: whitesmoke;
        border: 1px solid rgba($color: white, $alpha: 0.3);

        .actions {
            display: flex;
            gap: 1em;
            align-self: end;
            z-index: 200;
        }
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
        z-index: 2;
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