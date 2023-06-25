<template>
    <div class="membership-header flex row space-around">
        <div class="membership-title">
            <h2 class="fs-75">Join our</h2>
            <h2 class="fs-75">membership</h2>
        </div>
        <span>Select the memebership rate that suits you best and take advantage of our unbeatable deals</span>
    </div>

    <!-- <div class="membership-title flex row space-around">
        <div>
            <h2 class="fs-75">Join our <br />membership</h2>
        </div>
        <span>Select the memebership rate that suits you best and take advantage of our unbeatable deals</span>
    </div> -->
    <section class="membership-cards flex column">
        <div class="membership-card">
            <h2>Basic</h2>
            <ul>
                <li>Group consulting</li>
                <li>Updated news</li>
                <li>4 kinds of crypto portfolios</li>
            </ul>
            <div class="price-wrapper">
                <h2>$180/ year</h2>
                <button class="btn-primary">Get now</button>
            </div>
        </div>
        <div class="membership-card">
            <h2>Premium</h2>
            <ul>
                <li>Group consulting</li>
                <li>Updated news</li>
                <li>5 kinds of crypto portfolios</li>
            </ul>
            <div class="price-wrapper">
                <h2>$220/ year</h2>
                <button class="btn-primary">Get now</button>
            </div>
        </div>
        <div class="membership-card">
            <h2>Unlimited</h2>
            <ul>
                <li>Personal mentor</li>
                <li>Updated news</li>
                <li>All trade features unlocked</li>
            </ul>
            <div class="price-wrapper">
                <h2>$240/ year</h2>
                <button class="btn-primary">Get now</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/styles/setup/variables';

.membership-header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    font-family: sans-serif;
    grid-row: 1;
    grid-column: 1 / -1;

    .membership-title {
        display: flex;
        flex-direction: column;
        width: 450px;
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


// .membership-title {
//     font-family: sans-serif;

//     h2 {
//         line-height: 1;
//     }

//     span {
//         align-self: end;
//         width: 40%;
//     }
// }

.membership-card {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-block: 2em;
    padding-inline: 2em;

    ul {
        padding: 0;
    }

    .btn-primary {
        align-self: center;
    }

    h2 {
        align-self: center;
    }

    .price-wrapper {
        position: relative;
        display: flex;

        h2 {
            align-self: center;
        }

        .btn-primary {
            display: flex;
            align-items: center;
            position: absolute;
            right: 0;
            background-color: inherit;
            border: 1px solid rgba(255, 255, 255, 0.6);
            color: whitesmoke;
            padding-inline: 1em;
        }
    }

    &:first-of-type {
        background-color: #1d1f20;

        .btn-primary {
            border: 1px solid rgba(255, 255, 255, 0.6);
            color: whitesmoke;
        }
    }

    &:last-of-type {
        &>* {
            font-weight: 600;

            li {
                font-weight: 600;
            }
        }

        .btn-primary {
            border: 1px solid rgba($color: #000000, $alpha: .6);
            color: black;
        }

        background-color: $clr3;
        color: black;
    }
}
</style>