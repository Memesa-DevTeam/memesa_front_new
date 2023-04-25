<template>
    <div class="column-display">
        <PageHeader title="登录管理" @back="$router.push('/settings/user')" style="padding-left: 10px;" id="pc-hidden"/>
        <h2 id="mobile-hidden">登录管理</h2>
        管理在此设备上的登录
        <Divider/>
        <h2>退出登录</h2>
        退出在此设备上的登录，这不会删除你的账号数据
        <div class="row-display">
            <Button type="primary" @click="showLogoutPasswordChecker = !showLogoutPasswordChecker">退出登录</Button>
        </div>
        <PasswordCheckerModal :show="showLogoutPasswordChecker" @onSuccess="logoutUser()"/>
        <Divider/>
        <h2>注销账号</h2>
        <div class="row-display">
            退出登录，并且永久删除账号的数据。<b>此操作是不可逆的</b>
        </div>
        <Alert type="warning" message="此操作会删除您的全部账号数据且不能撤销，请谨慎操作。" show-icon style="margin-top: 5px; margin-bottom: 5px;"/>
        <div class="row-display" style="margin-top: 5px; margin-bottom: 5px;">
            <Button type="primary" danger @click="showDeleteAccountPasswordChecker = !showDeleteAccountPasswordChecker">注销账号</Button>
        </div>
        <PasswordCheckerModal :show="showDeleteAccountPasswordChecker" @onSuccess="deleteUser()"/>
    </div>
</template>
<script setup>
import { PageHeader, Divider, Button, Alert, message, Modal } from 'ant-design-vue';
import PasswordCheckerModal from '../../../components/PasswordCheckerModal.vue';
import { ref } from 'vue';
import user from '../../../js/user';
import router from '../../../router/index'

// hello matthew is cool 😎

const showDeleteAccountPasswordChecker = ref(false)
const showLogoutPasswordChecker = ref(false)

async function logoutUser(){
    let status = await user.logout()
    message.success("登出成功")
    router.push("/visitorProtocol/login")
}

async function deleteUser(){
    Modal.confirm({
        title: "您确定要继续吗？",
        content: "删除并注销账号是不可撤销的操作。注销成功后您的所有账号数据将会删除，您确定要继续吗？",
        onOk() {
            user.deleteUser().catch(result => {
                if (!result){
                    message.warning("账号注销失败")
                }
                else {
                    message.success("账号注销成功")
                    router.push("/visitorProtocol/login")
                }
            })
        },
        onCancel() {
            return
        }
    })
}
</script>