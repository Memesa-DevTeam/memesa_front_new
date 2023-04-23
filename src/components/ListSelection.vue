<template>
    <div class="list-main-box" @click="itemOnClick()">
        <slot name="image">

        </slot>
        <slot name="content">

        </slot>
    </div>
</template>
<script setup>
import { defineEmits } from 'vue';

const emit = defineEmits(['onclick'])

function itemOnClick(){
    console.log("Emitted")
    emit('onclick')
}
</script>