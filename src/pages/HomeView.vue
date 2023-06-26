<template>
    <main>
        <div class="home-view flex column gap-3">
            <Hero />
            <TransactionList v-if="info.user && info.user.transactions" :transactions="info.user.transactions" :homepage="true"/>
            <MoreDetails />
            <MainFeatures />
            <Membership />
        </div>
    </main>
</template>
  

<script>

import Hero from '../cmps/Hero.vue'
import MainFeatures from '../cmps/MainFeatures.vue'
import MoreDetails from '../cmps/MoreDetails.vue'
import Membership from '../cmps/Membership.vue'
import { bitcoinService } from '../services/bitcoin.service'
import { userService } from '../services/user.service'
import TransactionList from '../cmps/TransactionList.vue'

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
            console.log("this.info.user", this.info.user)
        } catch (err) {
            throw err
        }
    },

    components: {
        Hero,
        MoreDetails,
        MainFeatures,
        Membership,
        TransactionList
    }
}

</script>

<style lang="scss">
.home-view {
    color: whitesmoke;
}
</style>