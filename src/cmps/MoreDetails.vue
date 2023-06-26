<template>
    <div class="info-cards">
        <div class="info-card info-card1">
            <h3>
                <font-awesome-icon icon="fa-solid fa-globe" />
                Unlock the secure world
            </h3>
            <span>Experience boundless freedom across 120 different coins</span>
        </div>
        <div class="info-card info-card2">
            <h3>
                <font-awesome-icon icon="fa-solid fa-shield-halved" />
                Unparalleled security
            </h3>
            <span>Achieve total security with our comprehensive trading solutions.</span>
        </div>
        <div class="info-card info-card3">
            <h3>
                <font-awesome-icon icon="fa-solid fa-comments" />
                24/7 Support
            </h3>
            <span>Your trusted companion for uninterrupted wallet privacy.</span>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../assets/styles/setup/variables';
@import '../assets/styles/setup/functions';

.info-cards {
    margin: 0 auto;
    display: flex;
    gap: 2em;
    flex-direction: column;
    width: 100%;
    justify-content: space-evenly;
    align-items: center;

    @media (min-width: $mobile-breakpoint) {
        flex-direction: row;

        .info-card {
            width: rem(300px);
            font-size: 16px;
        }
    }

    @media (min-width: $extra-wide-breakpoint) {
        flex-direction: row;
    }

    .info-card {
        cursor: pointer;
        display: flex;
        flex-direction: column;
        justify-content: center;
        position: relative;
        background: rgb(7, 7, 7);
        background: -moz-linear-gradient(0deg, rgba(7, 7, 7, 1) 0%, rgba(18, 18, 18, 1) 100%);
        background: -webkit-linear-gradient(0deg, rgba(7, 7, 7, 1) 0%, rgba(18, 18, 18, 1) 100%);
        background: linear-gradient(0deg, rgba(7, 7, 7, 1) 0%, rgba(18, 18, 18, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#070707", endColorstr="#121212", GradientType=1);
        width: rem(300px);
        font-size: rem(16px);
        // width: 250px;
        // font-size: rem(14px);
        height: 150px;
        padding-inline: 2em;

        @media (min-width: $narrow-breakpoint) {
            width: rem(220px);
            font-size: 12px;
            height: 140px;
        }

        @media (min-width: $normal-breakpoint) {
            width: rem(260px);
            font-size: 14px;
        }

        @media (min-width: $extra-wide-breakpoint) {
            width: rem(300px);
            font-size: 16px;
        }

        &::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: rgba(255, 255, 255, 0.1);
        }

        &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 2px;
            background-color: var(--clr1);
            opacity: 0.1;
            transition: width .4s, opacity .2s, box-shadow .4s;
        }

        &:hover::before {
            width: 30%;
            opacity: 1;
        }

        span {
            color: #767676;
        }
    }
}
</style>