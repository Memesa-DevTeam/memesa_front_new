<template>
    <div class="title-box">
        <RouterLink to="/" id="mobile-hidden">
            <img src="@/assets/icon/logo.svg">
        </RouterLink>
        <SearchBox/>
        <HeaderFeaturesBox/>
    </div>
</template>
<script setup>
import { InputSearch } from 'ant-design-vue';
import SearchBox from './SearchBox.vue';
import HeaderFeaturesBox from './HeaderFeaturesBox.vue';
</script>