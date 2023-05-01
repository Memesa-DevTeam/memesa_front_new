<template>
    <MomentsAutoList source="subscription" :show-private="false"></MomentsAutoList>
</template>
<script setup>
import { Empty } from 'ant-design-vue';
import MomentsAutoList from '../../components/Moments/MomentsAutoList.vue';
</script>