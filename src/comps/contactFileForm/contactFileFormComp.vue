<template>
    <div class="modal">
        <contactInputForm></contactInputForm>
        <div class="modal-body">
            <h2 class="modal-title">Загрузить файл</h2>
            <p class="modal-description">Прикрепите файл ниже</p>
            <label class="upload-area">
                <span class="upload-area-icon">
                    <svg class="icon-file-new" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="340.531" height="419.116" viewBox="0 0 340.531 419.116">
                        <g id="files-new" clip-path="url(#clip-files-new)">
                            <path id="Union_2" data-name="Union 2"
                                d="M-2904.708-8.885A39.292,39.292,0,0,1-2944-48.177V-388.708A39.292,39.292,0,0,1-2904.708-428h209.558a13.1,13.1,0,0,1,9.3,3.8l78.584,78.584a13.1,13.1,0,0,1,3.8,9.3V-48.177a39.292,39.292,0,0,1-39.292,39.292Zm-13.1-379.823V-48.177a13.1,13.1,0,0,0,13.1,13.1h261.947a13.1,13.1,0,0,0,13.1-13.1V-323.221h-52.39a26.2,26.2,0,0,1-26.194-26.195v-52.39h-196.46A13.1,13.1,0,0,0-2917.805-388.708Zm146.5,241.621a14.269,14.269,0,0,1-7.883-12.758v-19.113h-68.841c-7.869,0-7.87-47.619,0-47.619h68.842v-18.8a14.271,14.271,0,0,1,7.882-12.758,14.239,14.239,0,0,1,14.925,1.354l57.019,42.764c.242.185.328.485.555.671a13.9,13.9,0,0,1,2.751,3.292,14.57,14.57,0,0,1,.984,1.454,14.114,14.114,0,0,1,1.411,5.987,14.006,14.006,0,0,1-1.411,5.973,14.653,14.653,0,0,1-.984,1.468,13.9,13.9,0,0,1-2.751,3.293c-.228.2-.313.485-.555.671l-57.019,42.764a14.26,14.26,0,0,1-8.558,2.847A14.326,14.326,0,0,1-2771.3-147.087Z"
                                transform="translate(2944 428)" fill="var(--c-action-primary)" />
                        </g>
                    </svg>
                </span>
                <span class="upload-area-title">Перетащите файл(ы) сюда что бы загрузить.</span>
                <span class="upload-area-description">
                    Или, Вы можете выбрать файл(ы) <br /><strong>нажав здесь</strong>
                </span>
            </label>
            <div class="modal-footer">
                <v-btn variant="tonal">Отмена</v-btn >
                <v-btn variant="tonal">Отправить</v-btn >
            </div>
        </div>
    </div>
</template>

<script setup>
import contactInputForm from '../contactInputForm/contactInputFormComp.vue';
</script>
<style scoped>
*,
*:after,
*:before {
    box-sizing: border-box;
}

:root {
    --c-action-primary: #5c5c5c;
    --c-action-primary-accent: #e9e5ff;
    --c-action-secondary: #e5e5e5;
    --c-text-primary: #ffffff;
    --c-text-secondary: #6a6b76;
    --c-background-primary: #d0d1de;
}


input,
button,
select,
textarea {
    font: inherit;
}

.modal {
    position: relative;
    width: 60%;
    color: white;
    padding: 50px 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: 15px;
    background-color: rgba(5, 5, 5, 0.7);

}
.modal-body {
    padding: 1rem 1.5rem;
    margin-right: auto;
    margin-left: 30px;
}

.icon-file-new {
    fill: white;
}

.modal-title {
    font-weight: 700;
}

.modal-description {
    color: var(--c-text-secondary);
}

.upload-area {
    margin-top: 1.25rem;
    border: none;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23ccc' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    background-color: transparent;
    padding: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover,
    &:focus {
        background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='gray' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    }
}

.upload-area-icon {
    display: block;
    width: 2.25rem;
    height: 2.25rem;

    svg {
        max-height: 100%;
        max-width: 100%;
    }
}

.upload-area-title {
    margin-top: 1rem;
    display: block;
    font-weight: 700;
    color: white;
    width: 100%;
}

.upload-area-description {
    display: block;
    color: var(--c-text-secondary);

    color: rgba(255, 255, 255, 0.4);
    font-style: italic;

    strong {
        font-style: normal;
        color: white;
        font-weight: 700;
    }
}

.modal-footer {
    position: absolute;
    margin-top: 20px;
    padding: 1rem 1.5rem 1.5rem;
    display: flex;
    justify-content: flex-end;
    [class*="btn-"] {
        margin-left: .75rem;
    }
    margin-right: auto;
    right: 0;
}

.btn-secondary {
    color: white;
}

.btn-secondary,
.btn-primary {
    padding: .5rem 1rem;
    font-weight: 500;
    border: 2px solid var(--c-action-secondary);
    border-radius: .25rem;
    background-color: transparent;
}

.btn-primary {
    color: #FFF;
    background-color: var(--c-action-primary);
    border-color: var(--c-action-primary);
}</style>