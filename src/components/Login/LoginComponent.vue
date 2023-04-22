<template>
    <div class="login-template-content">
        <h1>登录Memesa</h1>
        <div class="login-description">
            使用Memesa账号登录来解锁全部功能
        </div>
        <Input placeholder="用户名" class="input"/>
        <InputPassword placeholder="密码" class="input"/>
        <Checkbox>我已阅读并同意《用户服务条款与协议》</Checkbox>
        <div class="login-button-panel">
            <Button type="primary" class="login-button">登录</Button>
            <Button class="login-button">注册</Button>
        </div>
    </div>
</template>
<script setup>
import { Input, InputPassword, Checkbox, Button } from 'ant-design-vue';
</script>