<template>
    <div class="comment-input-box">
        喜欢这个作品吗？说点什么吧！
        <div class="row-display">
            <InputGroup compact>
                <Input placeholder="在这里写下你想对作者说的话……" style="width: 95%;"></Input>
                <Button type="primary">发布</Button>
            </InputGroup>
        </div>
    </div>
    <div class="column-display">
        <Comment>
            <template #actions>
                <div class="row-display">
                    <Button type="text" @click="triggerLike()">
                        <img src="@/assets/icon/like.svg" :height="20">
                    </Button>
                    <Button type="text">
                        <img src="@/assets/icon/comments.svg" :height="20">
                    </Button>
                </div>
            </template>
            <template #avatar>
                <Avatar :size="45"></Avatar>
            </template>
            <template #author>
                你猜猜这是谁发的
            </template>
            <template #content>
                你猜猜我这里想说什么
            </template>
            <template #datetime>
                1919-08-10
            </template>
        </Comment>
    </div>
</template>
<script setup>
import { Button, Input, InputGroup, Comment, Avatar } from 'ant-design-vue';
</script>