<template>
    <section class="contact-filter">
        <div class="input-container">
            <!-- <input @input="onSetFilterBy" class="search-box" placeholder="Filter by name" v-model="filterBy.txt" -->
            <input class="search-box" placeholder="Filter by name" v-model="filterBy.txt"
                type="text">
            <button class="search-button" @click="onSetFilterBy">Filter</button>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            filterBy: {
                txt: '',
            }
        }
    },
    methods: {
        onSetFilterBy() {
            this.$emit('filter', this.filterBy)
        }
    }
}
</script>

<style lang="scss">
@import '../assets/styles/setup/variables';

p {
    color: whitesmoke;
}

.contact-filter {
    width: 200px;
}

.input-container {
    background-color: #1b1b1b;
    position: relative;
    border-radius: 30px;
    padding: 3px 50px 3px 10px;
}

.search-box {
    background-color: transparent;
    outline: none;
    height: 35px;
    font-size: 15px;
    border: 0;
    color: rgb(184, 184, 184);
}

.search-button {
    position: absolute;
    right: 0;
    top: 0;
    background-color: $clr2;
    border-radius: 30px;
    border: 0;
    color: #FFF;
    width: 75px;
    height: 100%;
    outline: 0;
    transition: color .3s, background-color .3s;
    cursor: pointer;

    &:hover {
        background-color: $clr1;
        color: black;
    }
}
</style>