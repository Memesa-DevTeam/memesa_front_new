<template>
    
    <slot name="content">

    </slot>
</template>
<script setup>
import { ref, defineEmits } from 'vue'

defineEmits(['onclick'])
</script>