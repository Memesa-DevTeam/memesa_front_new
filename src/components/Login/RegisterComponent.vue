<template>
    <div class="login-template-content">
        <h1>注册Memesa账号</h1>
        <div class="login-description">
            欢迎来到Memesa！一个自由的手书分享网站！注册一个账号来开启你的手书之旅吧！
        </div>
        <Input placeholder="用户名" class="input"/>
        <Input placeholder="邮箱" class="input"/>
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