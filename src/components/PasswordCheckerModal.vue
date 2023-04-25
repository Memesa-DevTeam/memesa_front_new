<template>
    <Modal title="验证密码" v-bind:visible="show" v-on:update:visible="show" @cancel="show = !show">
        <div class="column-display">
            <div style="margin-top: 5px; margin-bottom: 5px;">
                为了保证您的账号安全性，我们需要先验证您的密码
            </div>
            <InputPassword placeholder="密码" v-model="inputPassword"></InputPassword>
            <div class="row-display">
                <Button type="link">忘记密码</Button>
            </div>
        </div>
        <template #footer>
            <Button type="primary" @click="checkUserPassword()">验证</Button>
        </template>
    </Modal>
</template>
<script setup>
import { Modal, InputPassword, Button, message } from 'ant-design-vue';
import { defineProps, ref, defineEmits } from 'vue';
import user from '../js/user';

const props = defineProps({
    "show": Boolean
})
const emit = defineEmits(['onSuccess', 'onFailed'])
const inputPassword = ref("")

async function checkUserPassword(){
    let result = user.checkUserPassword(inputPassword.value)
    if (!result){
        message.error("密码错误，请重新输入")
        emit('onFailed')
        return
    }
    message.success("验证成功！")
    emit('onSuccess')
    props.show = false
    return
}
</script>