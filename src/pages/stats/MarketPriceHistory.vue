<template>
    <div class="barchart-wrapper">
        <h1>Market price history since 1/23/23:</h1>
        <BarChart :func="getMarketPriceHistory" />
    </div>
</template>

<script>
import BarChart from '../../../cmps/BarChart.vue'

import { bitcoinService } from '../../../services.bitcoin.service'

export default {
    methods: {
        getMarketPriceHistory() {
            return bitcoinService.getMarketPriceHistory()
        },
    },
    components: {
        BarChart
    }
}
</script>

<style lang="scss"></style>