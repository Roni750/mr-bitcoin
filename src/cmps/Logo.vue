<template>
    <div class="logo flex align-center">
        <RouterLink to="/home" class="flex row gap-1 align-center">
            <div class="img">
                <img src="../../public/logo.png" />
            </div>
            <span>mr:bitcoin</span>
        </RouterLink>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '../assets/styles/setup/_typography';

.logo {
    font-family: 'Orbit';
}

img {
    height: 30px;
}
</style>