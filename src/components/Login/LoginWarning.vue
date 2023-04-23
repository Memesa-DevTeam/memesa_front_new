<template>
    <div class="login-warning-main">
        <img src="@/assets/icon/user.svg" :width="64">
        <h2>您需要先登录</h2>
        <div style="text-align: center;">
            在您未登录之前，许多功能将不可用。请登录Memesa账号来访问全部的服务
        </div>
        <div class="login-warning-buttons">
            <RouterLink to="/visitorProtocol/login">
                <Button type="primary" class="login-warning-button">登录</Button>
            </RouterLink>
            或
            <RouterLink to="/visitorProtocol/register">
                <Button>注册</Button>
            </RouterLink>
        </div>
    </div>
</template>
<script setup>
import { Button } from 'ant-design-vue';
</script>