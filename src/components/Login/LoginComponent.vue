<template>
    <div class="login-template-content">
        <h1>登录Memesa</h1>
        <div class="login-description">
            使用Memesa账号登录来解锁全部功能
        </div>
        <Input placeholder="用户名" class="input" v-model:value="username"/>
        <InputPassword placeholder="密码" class="input" v-model:value="password"/>
        <Checkbox v-model:checked="agreementChecked">我已阅读并同意《用户服务条款与协议》</Checkbox>
        <div class="login-button-panel">
            <Button type="primary" class="login-button" @click="loginHandler()">登录</Button>
            <RouterLink to="/visitorProtocol/register">
                <Button class="login-button">注册</Button>
            </RouterLink>
        </div>
    </div>
</template>
<script setup>
import { Input, InputPassword, Checkbox, Button, message } from 'ant-design-vue';
import { ref } from 'vue';
import user from '../../js/user'
import avatar from '../../js/avatar'
import router from '../../router/index'

const username = ref("")
const password = ref("")
const agreementChecked = ref(false)

// 屎山纪念碑
async function loginHandler(){
    if (!agreementChecked.value){
        message.info("请先查阅并同意《用户服务条款与协议》")
        return
    }
    let result = await user.login(username.value, password.value, 1)
    if (!result){
        message.error("登录失败：用户名或密码错误")
        return
    }
    // gather user avatar
    let avatarResult = await avatar.getUserAvatarAddress(true, localStorage.getItem("MEMESA_ID"))
    message.success("登录成功")
    router.push("/profile/"+localStorage.getItem("MEMESA_ID"))
}
</script>