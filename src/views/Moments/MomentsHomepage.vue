<template>
    <h1 class="page-title">动态</h1>
    <Menu mode="horizontal">
        <MenuItem key="recommend">社区</MenuItem>
        <MenuItem key="subscribed">关注</MenuItem>
        <MenuItem key="me">我的</MenuItem>
    </Menu>
    <RouterView>
        
    </RouterView>
</template>
<script setup>
import { Menu, MenuItem } from 'ant-design-vue';
</script>