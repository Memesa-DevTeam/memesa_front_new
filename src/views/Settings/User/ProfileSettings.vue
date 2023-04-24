<template>
    <div class="column-display">
        <PageHeader title="用户名，简介与头像" @back="$router.push('/settings/user')" style="padding-left: 10px;" id="pc-hidden"/>
        <h2 id="mobile-hidden">用户名，简介与头像</h2>
        您可以在这里修改您的基本个人资料
        <Divider/>

        <h2>个性卡片信息</h2>
        更改个性卡片上向他人展示的内容。您可以修改您的昵称和个人简介。<br>
        <div class="static-box">
            <div class="column-display">
                <b>当前用户名：</b>
                <b>当前简介：</b>
            </div>
        </div>
        <div class="row-display">
            <Button type="primary" @click="showBasicInfoModal = !showBasicInfoModal">修改信息</Button>
        </div>
        <Modal :visible="showBasicInfoModal" title="修改个人信息">
            <div class="column-display">
                <Alert type="info" message="若不需要修改某个信息留空即可" closable show-icon/>
                <div style="margin-top: 5px;margin-bottom: 5px;">
                    修改您的昵称或简介
                </div>
                <Input placeholder="用户名"/>
                <InputPassword placeholder="密码"/>
            </div>
            <template #footer>
                <Button type="primary">上传</Button>
                <Button @click="showBasicInfoModal = !showBasicInfoModal">取消</Button>
            </template>
        </Modal>
        <Divider/>

        <h2>头像设置</h2>
        <div>修改和上传你的头像</div>
        <div class="column-display" style="justify-content: center; align-items: center;">
            <Avatar :size="108" style="margin: 5px" :src="currentAvatarAddr">当前头像</Avatar>
            <div id="mobile-hidden">您可以直接右键头像以下载</div>
            <div id="pc-hidden">您可以直接长按头像以下载</div>
            <div class="row-display">
                <Button>上传新的头像</Button>
            </div>
        </div>
    </div>
</template>
<script setup>
import { PageHeader, Divider, Input, InputPassword, Textarea, Button, Avatar, Modal, Alert } from 'ant-design-vue';
import { computed, ref } from 'vue';

const currentAvatarAddr = computed(()=>{
    return localStorage.getItem("MEMESA_AVATAR")
})

const showBasicInfoModal = ref(false)
const showAvatarUploadModal = ref(false)
</script>