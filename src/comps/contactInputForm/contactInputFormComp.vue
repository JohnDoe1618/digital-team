<template>
    <div class="contact-input-form">
        <!-- Title window -->
        <div class="contact-input-title">
            <h1>Форма</h1>
        </div>
        <v-form class="contact-form">
            <!-- Name -->
            <v-text-field
            placeholder="Ваше имя"
            bg-color="none"
            :density="'compact'"
            variant="outlined"
            ></v-text-field>

            <!-- E-mail -->
            <v-text-field
            placeholder="Ваш E-mail"
            bg-color="none"
            :density="'compact'"
            variant="outlined"
            ></v-text-field>

            <!-- Message -->
            <v-textarea 
            placeholder="Напишите сообщение"
            variant="outlined"
            bg-color="none"
            ></v-textarea>

        </v-form>

        <!-- ??????????  -->
        <!-- Хуйня которая квадрат нижний черный -->
        <v-sheet v-if="false" class="developer-contact">

            <!-- Location -->
            <div class="developer-contact__item">
                <v-icon icon="mdi-map-marker"></v-icon>  <p class="item-text">City, State</p>
            </div>

            <!-- Telephone -->
            <div class="developer-contact__item">
                <v-icon icon="mdi-phone"></v-icon>  <p class="item-text">(212) 555-2368</p>
            </div>

            <!-- E-mail address -->
            <div class="developer-contact__item">
                <v-icon icon="mdi-email-outline"></v-icon>  <p class="item-text">hitmeup@gmail.com</p>
            </div>

            <v-divider class="my-3"></v-divider>
            <div class="developer-contact__icons">
                <v-icon icon="mdi-github" size="40"></v-icon>
                <v-icon icon="mdi-twitter" size="40"></v-icon>
                <v-icon icon="mdi-instagram" size="40"></v-icon>
            </div>

        </v-sheet>
    </div>
</template>

<script setup>

</script>

<style scoped>
.contact-input-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40%;
    color: white;
}

.contact-input-title {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    width: 100%;
    font-size: 14px;
    padding: 0px 10px;
}
.contact-form {
    position: relative;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 2rem 10px;
}
.contact-form__submit-btn {
    margin: 0 1rem 0 auto;
    border: 1px solid white;
    color: white; font-size: 0.75rem;
}
.contact-form__submit-btn:hover {
    cursor: pointer;
    background-color: white;
    color: black;
    transition: 0.2s ease-in-out;
}
.developer-contact { 
    width: 50%;
    padding: 20px 40px;
    background-color: rgba(17, 17, 17, 0.7);
    color: white;
}
.developer-contact__item {
    display: flex;
}
.developer-contact__item + .developer-contact__item {
    margin-top: .5rem;
}
.item-text {
    margin-left: 1rem;
}
.developer-contact__icons {
    display: flex;
    justify-content: space-evenly;
}
</style>