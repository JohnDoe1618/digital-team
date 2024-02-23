<template>
    <div class="section">
        <img src="../assets/images/3.jpg" alt="">
    </div>
</template>

<script setup>

</script>
<style scoped>
.section {
    position: relative;
    width: 100vw;
    height: 100vh;
}

img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 0;
    transform: rotate(180deg);
}
</style>