<template>
    <span v-if="homepage">{{ transaction.to }}</span>
    <span v-else>{{ transaction.from }}</span>
    <span v-if="homepage" :title="transaction.toId" class="shorten">{{ transaction.toId }}</span>
    <span v-else>{{ returnDate }}</span>
    <span>{{ transaction.amount }} ₿</span>
    <span>{{ transaction.fee }} ₿</span>
</template>

<script>
export default {
    props: {
        transaction: { type: Object, required: true },
        homepage: { type: Boolean, required: false }
    },
    computed: {
        returnDate() {
            const currDate = new Date(this.transaction.at);
            return currDate.toLocaleString();
        }
    }
}
</script>

<style lang="scss">
.transaction {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    .shorten {
        max-width: 20px;
    }

    span:nth-of-type(1) {
        grid-column: 1;
    }

    span:nth-of-type(2) {
        grid-column: 2;
    }

    span:nth-of-type(3) {
        grid-column: 3;
    }

    span:nth-of-type(4) {
        grid-column: 4;
    }
}
</style>
