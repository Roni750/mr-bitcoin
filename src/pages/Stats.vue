<template>
    <div class="stats-container flex align-center">
        <nav class="buttons">
            <RouterLink class="nav-btn-unactive" to="/stats/marketpricehistory">Price history</RouterLink>
            <RouterLink class="nav-btn-unactive" to="/stats/avgblocksize">Avg block size
            </RouterLink>
        </nav>
        <RouterView />
    </div>
</template>
  
<script>
import BarChart from '../cmps/BarChart.vue'
import { bitcoinService } from '../services/bitcoin.service'
export default {
    data() {
        return {
            isMarketPriceActive: true,
            isAvgBlockSizeActive: false
        }
    },
    methods: {
        getMarketPriceHistory() {
            return bitcoinService.getMarketPriceHistory()
        },
        getAvgBlockSize() {
            return bitcoinService.getAvgBlockSize()
        },
    },
}
</script>
  
<style lang="scss">
@import '../assets/styles/setup/variables';

.stats-container {
    background: rgba($color: #313131, $alpha: .2);
    padding-block: 2em;
    border: 1px solid rgba($color: #fff, $alpha: 0.2);
    min-width: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 15px;

    .buttons {
        background: rgba($color: #000000, $alpha: 0.9);
        padding: .1em;
        border-radius: 15px;
        display: flex;
        flex-direction: row;
        justify-self: end;
        gap: .5em;
        margin-block-end: 2em;
    }

    nav a.router-link-exact-active {
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

    .btn-primary {
        align-self: start;
    }

    .barchart-wrapper {
        width: 50%;
        background: black;
        padding: 1em;
        border-radius: 15px;
    }
}
</style>
  