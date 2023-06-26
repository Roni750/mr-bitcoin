<template>
    <div class="barchart-wrapper">
        <h1>Average block changes size over the last 6 months:</h1>
        <BarChart :func="getAvgBlockSize" />
    </div>
</template>

<script>
import BarChart from '../../cmps/BarChart.vue'
import { bitcoinService } from '../../services/bitcoin.service'
export default {
    methods: {
        getAvgBlockSize() {
            return bitcoinService.getAvgBlockSize()
        },
    },
    components: {
        BarChart
    }
}
</script>

<style lang="scss"></style>
