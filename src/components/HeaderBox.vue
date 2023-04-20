<template>
    <div class="title-box">
        <img src="@/assets/icon/logo.svg">
        <SearchBox/>
        <HeaderFeaturesBox/>
    </div>
</template>
<script setup>
import { InputSearch } from 'ant-design-vue';
import SearchBox from './SearchBox.vue';
import HeaderFeaturesBox from './HeaderFeaturesBox.vue';
</script>