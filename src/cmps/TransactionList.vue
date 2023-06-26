<template>
    <div class="last-transactions">

        <li v-if="homepage" class="clean-list transactions-list">
            <span>Transferred to</span>
            <span>Contact ID</span>
            <span>Amount</span>
            <span>Gas fee</span>
        </li>
        <li v-else class="clean-list transactions-list">
            <span>Transferred from</span>
            <span>At</span>
            <span>Amount</span>
            <span>Gas fee</span>
        </li>
        <li class="clean-list transactions-list" v-for="transaction in splicedTransactions" :key="transaction.at">
            <TransactionPreview :transaction="transaction" :homepage=this.homepage />
        </li>
    </div>
</template>

<script>
import TransactionPreview from './TransactionPreview.vue';

export default {
    components: {
        TransactionPreview
    },
    props: {
        transactions: { type: Array, required: true },
        homepage: { type: Boolean, required: false }
    },
    computed: {
        splicedTransactions() {
            if(!this.transactions) return
            return this.transactions.splice(0, 3)
        }
    }
}
</script>

<style lang="scss">
.last-transactions {
    cursor: default;

    .transactions-list {
        padding: .5em;
        padding-inline: 2em;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 1em;

        .shorten {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            width: 70px;
        }

        &:first-child {
            padding-block: 1em;
            border-radius: 15px 15px 0 0;
        }

        &:nth-child(even) {
            background: rgb(15, 15, 15);
        }

        &:nth-child(odd) {
            background: rgb(6, 6, 6);
            // background: red;
        }

        &:last-child {
            border-radius: 0 0 15px 15px;

        }
    }
}
</style>
