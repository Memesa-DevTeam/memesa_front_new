<template>
    <div class="moment-item-box">
        <div class="header">
            <Avatar :size="48" style="margin-right: 15px;" :src="targetUserAvatar">头像</Avatar>
            <div class="column-display">
                <div style="font-size: large; font-weight: bolder;">
                    <RouterLink class="normal-link" :to="'/profile/'+props.targetUserId">
                        {{targetUserName}}
                    </RouterLink>
                </div>
                <div style="margin-top: 5px;">发布于 {{ props.releaseDate }}</div>
            </div>
        </div>
        <slot name="content">

        </slot>
        <div class="row-display" style="margin: 10px">
            <ImagePreviewGroup>
                <div v-for="i in imgList" :key="i">
                    <Image :src="i" :width="125" v-if="i != '0'"></Image>
                </div>
            </ImagePreviewGroup>
        </div>
        <div class="row-display">
            <Button type="text" v-if="!props.hideShowDetails">
                <RouterLink class="normal-link" :to="'/moments/details/'+props.momentUuid">
                    查看动态详情
                </RouterLink>
            </Button>
            <Button type="text" @click="triggerLike()">
                <img src="@/assets/icon/like.svg" v-if="isLiked == false" :height="20">
                <img src="@/assets/icon/liked.svg" v-if="isLiked == true" :height="20">
            </Button>
            <Button type="text">
                <img src="@/assets/icon/comments.svg" :height="20">
            </Button>
            <Button danger v-if="localID == props.targetUserID">删除</Button>
        </div>
    </div>
</template>
<script setup>
import { Avatar, ImagePreviewGroup, Image, Button } from 'ant-design-vue';
import { defineProps, computed, ref } from 'vue';
import user from '../../js/user';
import avatar from '../../js/avatar';

const props = defineProps({
    "imgList": Array,
    "targetUserId": String,
    "momentUuid": String,
    "isPublic": Number,
    "releaseDate": String,
    "hideShowDetails": Boolean
})
const localID = computed(()=>{
    return localStorage.getItem("MEMESA_ID")
})
const isLiked = ref(false)
const targetUserName = ref("")
const targetUserAvatar = ref("")

function triggerLike(){
    isLiked.value = !isLiked.value
}

async function getUserInfo(){
    if (props.targetUserId == null || props.targetUserId == undefined){
        // wait a little bit and get the numbers again
        setTimeout(() => {
            getUserInfo()
        }, 500);
        return
    }
    if (localID.value == props.targetUserId){
        // Directly get info from the local
        console.log("Get user info from localStorage")
        targetUserName.value = localStorage.getItem("MEMESA_USERNAME")
        targetUserAvatar.value = localStorage.getItem("MEMESA_AVATAR")
        return
    }
    else {
        console.log("Get user info from database")
        let userInfo = await user.getUserBasicInfo(props.targetUserId)
        targetUserName.value = userInfo.username
        let avatarResult = await avatar.getAnyAvatarAddress(props.targetUserId)
        if (!avatarResult.status){
            return
        }
        targetUserAvatar.value = avatarResult.address
        return
    }
}

getUserInfo()
</script>