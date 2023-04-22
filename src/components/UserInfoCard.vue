<template>
    <div class="user-info-card">
        <div class="user-info-left-content">
            <Avatar :size="70" style="margin-right: 10px;" :src="avatarAddr"></Avatar>
            <div class="user-info-content">
                <h1 style="margin-bottom: 0px;">
                    {{username}}
                </h1>
                <div id="mobile-hidden">
                    {{description}}
                </div>
                <div>
                    <b>ID: </b> {{ userID }}
                </div>
                <div class="user-info-brief-data">
                    <Button type="text">关注数</Button>
                    <Button type="text">粉丝数</Button>
                    <Button type="text">稿件数</Button>
                </div>
                <Button type="primary" v-if="localID != userID && !isFollowing" @click="handleSubscription()" id="pc-hidden">关注</Button>
                <Button v-if="localID != userID && isFollowing" @click="handleSubscription()" id="pc-hidden">已关注</Button>
            </div>
        </div>
        <Button type="primary" v-if="localID != userID && !isFollowing" @click="handleSubscription()" id="mobile-hidden">关注</Button>
        <Button v-if="localID != userID && isFollowing" @click="handleSubscription()" id="mobile-hidden">已关注</Button>
    </div>
    <div class="user-info-description-box" id="pc-hidden">
        <div class="user-info-description-box-title">
            <div><b>简介</b></div>
            <Button type="text" @click="triggerDescriptionBox">
                <div v-if="!showDescriptionBox">
                    展开
                </div>
                <div v-else>
                    折叠
                </div>
            </Button>
        </div>
        <div v-if="showDescriptionBox">
            {{description}}
        </div>
    </div>
</template>
<script setup>
import { Avatar, Button } from 'ant-design-vue';
import { computed, defineEmits, defineProps, ref } from 'vue';
import user from '../js/user'

const props = defineProps(['userID'])
const localID = ref(localStorage.getItem("MEMESA_ID"))
const isFollowing = ref(false)
const showDescriptionBox = ref(false)

const username = ref("Unknown")
const description = ref("这个人很懒，什么也没写")
const avatarAddr = computed(()=>{
    return localStorage.getItem("MEMESA_AVATAR")
})

function handleSubscription(){
    isFollowing.value = !isFollowing.value
}

function triggerDescriptionBox(){
    showDescriptionBox.value = !showDescriptionBox.value
}

async function getUserInfo(){
    let result = await user.getUserBasicInfo(localID.value)
    if (result == null){
        return
    }
    username.value = result.username
    description.value = result.description
}

getUserInfo()
</script>