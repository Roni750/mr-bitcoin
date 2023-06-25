<template>
    <footer class="full flex space-between">
        <Logo />
        <div class="network-links">
            <ul class="clean-list flex row gap-1">
                <li><font-awesome-icon icon="fa-brands fa-instagram-square" /></li>
                <li><font-awesome-icon icon="fa-brands fa-github" /></li>
                <li><font-awesome-icon icon="fa-brands fa-linkedin" /></li>
            </ul>
        </div>
    </footer>
</template>

<script>
import Logo from './Logo.vue';

export default {
    components: { Logo }
}
</script>

<style lang="scss">
@import '../assets/styles/setup/functions';

footer {
    height: rem(55px);
    display: flex;
    align-items: center;
    color: whitesmoke;
    position: relative;
    margin-inline: 1em;

    &::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 2px;
        background: rgb(255, 255, 255);
        background: -moz-radial-gradient(circle, rgba(255, 255, 255, 0.2) 28%, rgba(7, 7, 7, 1) 100%);
        background: -webkit-radial-gradient(circle, rgba(255, 255, 255, 0.2) 28%, rgba(7, 7, 7, 1) 100%);
        background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 28%, rgba(7, 7, 7, 1) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#ffffff", endColorstr="#070707", GradientType=1);
        top: 0px;
    }
}
</style>