<template>
    <div class="column-display">
        <PageHeader title="用户协议与条款" @back="$router.push('/settings/user')" style="padding-left: 10px;" id="pc-hidden"/>
        <h2 id="mobile-hidden">用户协议与条款</h2>
        查看我们最新的服务条款
        <Divider/>
    </div>
</template>
<script setup>
import { PageHeader, Divider } from 'ant-design-vue';
</script>