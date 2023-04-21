<template>
    <div class="title-features-main-box">
        <div class="title-features-box">
            <Tooltip id="mobile-hidden">
                <template #title>
                    动态
                </template>
                <RouterLink to="" id="mobile-hidden">
                    <img src="@/assets/icon/moment.svg" class="title-features-item">
                </RouterLink>
            </Tooltip>
            <Tooltip id="mobile-hidden">
                <template #title>
                    历史记录
                </template>
                <RouterLink to="" id="mobile-hidden">
                    <img src="@/assets/icon/history.svg" :width="25" class="title-features-item">
                </RouterLink>
            </Tooltip>
            <Tooltip id="mobile-hidden">
                <template #title>
                    稿件管理
                </template>
                <RouterLink to="" id="mobile-hidden">
                    <img src="@/assets/icon/uploadVideo.svg" :width="30" class="title-features-item">
                </RouterLink>
            </Tooltip>
            <Tooltip id="pc-hidden">
                <template #title>
                    更多
                </template>
                <div id="pc-hidden">
                    <img src="@/assets/icon/more.svg" :width="30" class="title-features-item" @click="triggerOverlay()">
                </div>
            </Tooltip>
            <RouterLink to="/profile">
                <Tooltip>
                    <template #title>
                        用户中心
                    </template>
                    <Avatar :size="40"></Avatar>
                </Tooltip>
            </RouterLink>   
        </div>
        <div class="overlay-function-box" v-if="displayOverlayBox">
            <Tooltip id="pc-hidden">
                <template #title>
                    动态
                </template>
                <RouterLink to="" id="pc-hidden">
                    <img src="@/assets/icon/momentsFilled.svg" :width="25" class="title-features-item">
                </RouterLink>
            </Tooltip>
            <Tooltip id="pc-hidden">
                <template #title>
                    历史记录
                </template>
                <RouterLink to="" id="pc-hidden">
                    <img src="@/assets/icon/historyFilled.svg" :width="25" class="title-features-item">
                </RouterLink>
            </Tooltip>
            <Tooltip id="pc-hidden">
                <template #title>
                    稿件管理
                </template>
                <RouterLink to="" id="pc-hidden">
                    <img src="@/assets/icon/uploadFilled.svg" :width="20" class="title-features-item">
                </RouterLink>
            </Tooltip>
        </div>
    </div>
</template>
<script setup>
import { Avatar, Tooltip, Button } from 'ant-design-vue';
import { ref } from 'vue';

const displayOverlayBox = ref(false)

function triggerOverlay(){
    console.log("Overlay function triggered")
    displayOverlayBox.value = !displayOverlayBox.value
}
</script>