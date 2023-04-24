<template>
    <PageHeader title="账号密码" @back="$router.push('/settings/user')" style="padding-left: 10px;" id="pc-hidden"/>
    <h2 id="mobile-hidden">账号密码</h2>
    修改与找回密码
    <Divider/>
</template>
<script setup>
import { PageHeader, Divider } from 'ant-design-vue';
</script>