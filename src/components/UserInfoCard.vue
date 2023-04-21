<template>
    <div class="user-info-card">
        <div class="user-info-left-content">
            <Avatar :size="70" style="margin-right: 10px;"></Avatar>
            <div class="user-info-content">
                <h1 style="margin-bottom: 0px;">
                    Username
                </h1>
                <div id="mobile-hidden">
                    Username, description, and other information will automatically gathered by the system.
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
            Username, description, and other information will automatically gathered by the system.
        </div>
    </div>
</template>
<script setup>
import { Avatar, Button } from 'ant-design-vue';
import { defineEmits, defineProps, ref } from 'vue';

const props = defineProps(['userID'])
const localID = ref(localStorage.getItem("MEMESA_ID"))
const isFollowing = ref(false)
const showDescriptionBox = ref(false)

function handleSubscription(){
    isFollowing.value = !isFollowing.value
}

function triggerDescriptionBox(){
    showDescriptionBox.value = !showDescriptionBox.value
}
</script>