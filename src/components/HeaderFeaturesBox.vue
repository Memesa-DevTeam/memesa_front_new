<template>
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
        <RouterLink to="">
            <Tooltip>
                <template #title>
                    用户中心
                </template>
                <Avatar :size="40"></Avatar>
            </Tooltip>
        </RouterLink>   
        
    </div>
</template>
<script setup>
import { Avatar, Tooltip } from 'ant-design-vue';
</script>