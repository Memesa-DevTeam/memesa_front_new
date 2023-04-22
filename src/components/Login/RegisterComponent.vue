<template>
    <div class="login-template-content">
        <h1>注册Memesa账号</h1>
        <div class="login-description">
            欢迎来到Memesa！一个自由的手书分享网站！注册一个账号来开启你的手书之旅吧！
        </div>
        <Input placeholder="用户名" class="input" v-model:value="username"/>
        <Input placeholder="邮箱" class="input" v-model:value="email"/>
        <InputPassword placeholder="密码" class="input" v-model:value="password"/>
        <Checkbox v-model:checked="agreementChecked">我已阅读并同意《用户服务条款与协议》</Checkbox>
        <div class="login-button-panel">
            <Button class="login-button" type="primary" @click="registerHandler()">注册</Button>
            <RouterLink to="/visitorProtocol/login">
                <Button class="login-button">登录</Button>
            </RouterLink>
        </div>
    </div>
</template>
<script setup>
import { Input, InputPassword, Checkbox, Button, message } from 'ant-design-vue';
import { ref } from 'vue';
import user from '../../js/user';
import router from '../../router/index'

const username = ref("")
const email = ref("")
const password = ref("")
const agreementChecked = ref(false)

async function registerHandler(){
    if (!agreementChecked.value){
        message.info("您需要先同意《用户协议与条款》")
        return
    }
    let result = await user.register(username.value, password.value, email.value)
    if (!result){
        message.error("注册失败")
        return
    }
    // continue login
    let info = user.login(username.value, password.value, 1)
    if (info == null || info == undefined){
        message.warning("自动登录失败，请手动登录")
        router.push("/visitorProtocol/login")
        return
    }
    message.success("注册成功，已为您自动登录")
    router.push("/profile/"+localStorage.getItem("MEMESA_ID"))
    return
}
</script>