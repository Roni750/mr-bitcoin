<template>
    <div class="hero-section flex">
        <div class="left-hero-section flex">
            <div class="text-wrapper">
                <h1 class="fs-50">A New Era of Cryptocurrency Exchange</h1>
                <span>Easily buy and sell cryptocurrency with our user-friendly app.
                    Our platform reaches people all over the world, hereby we are trusted as the best platform for crypto
                    trading.</span>
            </div>
            <RouterLink to="/stats/marketpricehistory" class="btn-get-started">Learn more ►</RouterLink>
            <h3>Current <span>1 USD</span> rate to <span>BTC:</span> <span>{{ info.exchangeRate }}</span></h3>
            <div v-if="info.user" class="user-balance">
                <h4>Your current balance: {{ this.info.user.balance }} BTC</h4>
                <h4>Current BTC balance in USD: ${{ addCommas(currBalanceInDollars) }}</h4>
            </div>
        </div>
        <img src="../assets/images/hero.png" />
    </div>
</template>

<script>
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'

export default {
    data() {
        return {
            info: {
                exchangeRate: null,
                user: null
            }
        }
    },

    async created() {
        try {
            this.info.exchangeRate = await bitcoinService.getRate()
            this.info.user = await userService.getLoggedinUser()
        } catch (err) {
            throw err
        }
    },
    methods: {
        addCommas(value) {
            return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    },
    computed: {
        currBalanceInDollars() {
            const ratio = (1 / this.info.exchangeRate)
            const res = (this.info.user.balance * ratio).toFixed(2)
            return res
        }
    }
}
</script>

<style lang="scss"></style>