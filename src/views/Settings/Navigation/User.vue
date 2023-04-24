<template>
    <div id="pc-hidden">
        <PageHeader title="用户" sub-title="用户选项和设置" @back="$router.push('/settings')" style="padding-left: 10px;"/>
        <ListSelection>
            <template #image>
                <img src="../../../assets/icon/profile.svg"  style="margin-right: 15px;">
            </template>
            <template #content>
                用户名，简介与头像
            </template>
        </ListSelection>
        <ListSelection>
            <template #image>
                <img src="../../../assets/icon/password.svg"  style="margin-right: 15px;">
            </template>
            <template #content>
                密码与安全
            </template>
        </ListSelection>
        <ListSelection>
            <template #image>
                <img src="../../../assets/icon/security.svg"  style="margin-right: 15px;">
            </template>
            <template #content>
                登录管理
            </template>
        </ListSelection>
        <ListSelection>
            <template #image>
                <img src="../../../assets/icon/agreement.svg"  style="margin-right: 15px;">
            </template>
            <template #content>
                用户协议
            </template>
        </ListSelection>
    </div>
</template>
<script setup>
import ListSelection from '../../../components/ListSelection.vue';
import { PageHeader } from 'ant-design-vue';
</script>