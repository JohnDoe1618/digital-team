<template>
    <div class="section">
        <img src="../assets/images/2.jpg" alt="">

        <div class="main-container">



        </div>

    </div>
</template>

<script setup>

</script>
<style scoped>
.section {
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

.main-container {
    width: 100%;
    height: 100%;
    background-color: rgb(0, 255, 34);
}
</style>