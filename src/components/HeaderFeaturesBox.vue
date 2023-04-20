<template>
    <div class="title-features-box">
        <Tooltip>
            <template #title>
                动态
            </template>
            <img src="@/assets/icon/moment.svg" class="title-features-item">
        </Tooltip>
        <Tooltip>
            <template #title>
                历史记录
            </template>
            <img src="@/assets/icon/history.svg" :width="25" class="title-features-item">
        </Tooltip>
        <Tooltip>
            <template #title>
                稿件管理
            </template>
            <img src="@/assets/icon/uploadVideo.svg" :width="30" class="title-features-item">
        </Tooltip>
        <Avatar :size="40"></Avatar>
    </div>
</template>
<script setup>
import { Avatar, Tooltip } from 'ant-design-vue';
</script>