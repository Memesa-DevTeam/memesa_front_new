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
                <div class="row-display"><b>当前用户名：</b>{{ username }}</div>
                <div class="row-display"><b>当前简介：</b>{{ description }}</div>
            </div>
        </div>
        <div class="row-display">
            <Button type="primary" @click="showBasicInfoModal = !showBasicInfoModal">修改信息</Button>
        </div>
        <Modal :visible="showBasicInfoModal" title="修改个人信息" @cancel="showBasicInfoModal = !showBasicInfoModal">
            <div class="column-display">
                <Alert type="info" message="若不需要修改某个信息留空即可" closable show-icon/>
                <div style="margin-top: 5px;margin-bottom: 5px;">
                    修改您的昵称或简介
                </div>
                <Input placeholder="用户名" v-model:value="inputUsername"/>
                <Textarea placeholder="简介" v-model:value="inputDescription"></Textarea>
            </div>
            <template #footer>
                <Button type="primary" @click="modifyUserBasicInfo()">上传</Button>
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
                <Button @click="showAvatarUploadModal = !showAvatarUploadModal">上传新的头像</Button>
            </div>
        </div>
        <Modal :visible="showAvatarUploadModal" title="上传新的头像" @cancel="showAvatarUploadModal = !showAvatarUploadModal">
            <div class="column-display">
                <div>点击下方的按钮选择头像文件</div>
                <input type="file" accept="image/*" @change="beforeAvatarUpload($event)">
                <Upload v-model:file-list="fileList" list-type="picture"></Upload>
            </div>
            <template #footer>
                <Button type="primary" @click="uploadAvatar()" :loading="avatarUploading">上传</Button>
                <Button @click="showAvatarUploadModal = !showAvatarUploadModal">取消</Button>
            </template>
        </Modal>
    </div>
</template>
<script setup>
import { PageHeader, Divider, Input, InputPassword, Textarea, Button, Avatar, Modal, Alert, message, Upload } from 'ant-design-vue';
import { computed, ref } from 'vue';
import user from '../../../js/user';
import avatar from '../../../js/avatar';

const currentAvatarAddr = computed(()=>{
    return localStorage.getItem("MEMESA_AVATAR")
})

const showBasicInfoModal = ref(false)
const showAvatarUploadModal = ref(false)
const username = ref("")
const description = ref("")
const inputUsername = ref("")
const inputDescription = ref("")
const avatarUploading = ref(false)
const fileList = ref([])

async function getUserInfo(){
    let result = await user.getUserBasicInfo(localStorage.getItem("MEMESA_ID"))
    if (result == null){
        message.warning("网络开小差啦QAQ")
        return
    }
    console.log(result)
    // apply user info to the variables
    username.value = result.username
    description.value = result.description
    return
}

async function modifyUserBasicInfo(){
    if (inputDescription.value == ""){
        inputDescription.value = description.value
    }
    if (inputUsername.value == ""){
        inputUsername.value = username.value
    }
    let result = await user.modifyBasicUserInformation(inputUsername.value, inputDescription.value)
    if (!result){
        message.error("修改失败")
        return
    }
    message.success("修改成功")
    inputUsername.value = ""
    inputDescription.value = ""
    getUserInfo()
    showBasicInfoModal.value = false
    return
}

async function beforeAvatarUpload(e){
    if (fileList.value.length > 0){
        message.info("最多选择一张照片哦")
        return
    }
    fileList.value.push(e.target.files[0])
}

async function uploadAvatar(){
    avatarUploading.value = true
    if (fileList.value.length < 1){
        message.info("必须选择一个头像才能上传哦")
        avatarUploading.value = false
        return
    }
    let result = await avatar.uploadAvatar(fileList.value[0])
    if (!result){
        message.error("上传失败")
        avatarUploading.value = false
        return
    }
    // get user avatar
    let avatarResult = await avatar.getUserAvatarAddress(true)
    message.success("上传成功")
    avatarUploading.value = false
    showAvatarUploadModal.value = false
}

getUserInfo()
</script>