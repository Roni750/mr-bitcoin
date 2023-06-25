<template>
    <div class="stats-container flex align-center">
        <div class="buttons">
            <button class="btn-primary" :class="{ active: isMarketPriceActive, unactive: !isMarketPriceActive }"
                @click="toggleMarketPrice">Price history</button>
            <button class="btn-primary" :class="{ active: isAvgBlockSizeActive, unactive: !isAvgBlockSizeActive }"
                @click="toggleAvgBlockSize">Avg block size</button>
        </div>
        <div v-if="isMarketPriceActive" class="barchart-wrapper">
            <h1>Market price history since 1/23/23:</h1>
            <BarChart :func="getMarketPriceHistory" />
        </div>
        <div v-if="isAvgBlockSizeActive" class="barchart-wrapper">
            <h1>Average block size changes since 1/23/23:</h1>
            <BarChart :func="getAvgBlockSize" />
        </div>
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
        toggleMarketPrice() {
            this.isMarketPriceActive = true
            this.isAvgBlockSizeActive = false
        },
        toggleAvgBlockSize() {
            this.isMarketPriceActive = false
            this.isAvgBlockSizeActive = true
        }
    },
    components: {
        BarChart
    }
}
</script>
  
<style lang="scss">
.stats-container {
    background: rgba($color: #313131, $alpha: .2);
    padding: 2em;
    border: 1px solid rgba($color: #fff, $alpha: 0.2);
    // width: 100%;
    min-width: fit-content;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    border-radius: 15px;

    .buttons {
        background: rgba($color: #000000, $alpha: 0.9);
        padding: .2em;
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        justify-self: end;
        // align-self: self-start;
        gap: .5em;
        margin-block-end: 2em;
    }

    .btn-primary {
        align-self: start;
    }

    .unactive {
        // background: rgba($color: #fff, $alpha: 0.1);
        background: inherit;
        color: gray;
    }

    .barchart-wrapper {
        width: 50%;
        background: black;
        padding: 1em;
        border-radius: 15px;
    }

    .active {
        // background-color: blue;
        /* Add your desired active state styling here */
        color: white;
        /* Add your desired active state styling here */
    }
}
</style>
  