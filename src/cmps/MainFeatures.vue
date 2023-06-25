<template>
    <section class="main-features-container">
        <div class="main-features-header flex row space-around">
            <div class="main-features-title">
                <h2 class="fs-75">Main</h2>
                <h2 class="fs-75">features</h2>
            </div>
            <span>Our platform offers a range of advanced trading tools and features, including limit orders. stop-loss
                orders,
                and margin trading. With our platform, users can take full control of their crypto investments and stay
                ahead of
                market trends with ease.</span>
        </div>
        <section class="main-features flex column">
            <div class="feature-card">
                <div class="title">
                    <h2>No transaction fees</h2>
                </div>
                <span>You can make a transaction, buy & sell, trade, and exchange a cryptocurrency with no fees</span>
            </div>
            <div class="feature-card">
                <div class="title">
                    <h2>Data secure</h2>
                </div>
                <span>Data protection with automated backup, recovery, and replication in the AQU Cloud</span>
            </div>
            <div class="feature-card">
                <div class="title">
                    <h2>Support banking cards</h2>
                </div>
                <span>We have a new feature to support all crypto transactions with credit and debit card</span>
            </div>
        </section>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.main-features-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.main-features-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: sans-serif;
    grid-row: 1;
    grid-column: 1 / -1;
    margin-block-end: 2em;

    .main-features-title {
        display: flex;
        flex-direction: column;
        width: 350px;
        flex-wrap: nowrap;

        h2:first-of-type {
            align-self: flex-start;
        }

        h2:nth-of-type(2) {
            align-self: flex-end;
        }
    }

    h2 {
        line-height: 1;
    }

    span {
        align-self: center;
    }
}

.main-features {
    border-block-end: 1px solid rgba(255, 255, 255, 0.2);
    grid-row: 2;
    grid-column: 1 / -1;

    .title {
        display: flex;
        align-items: center;
    }
}

.main-features>* {
    padding-block: 2em;
    border-block-start: 1px solid rgba(255, 255, 255, 0.2);
}

.feature-card {
    display: grid;
    grid-template-columns: 1fr 1fr;
}</style>