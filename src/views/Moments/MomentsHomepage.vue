<template>
    <h1 class="page-title">动态</h1>
    <Tabs centered class="tab-section">
        <TabPane key="1" tab="社区">
            <Community/>
        </TabPane>
        <TabPane key="2" tab="关注">
            <Subscribe/>
        </TabPane>
        <TabPane key="3" tab="我的">
            <MyMoments/>
        </TabPane>
    </Tabs>
</template>
<script setup>
import { Menu, MenuItem, TabPane, Tabs } from 'ant-design-vue';
import Community from './Community.vue';
import Subscribe from './Subscribe.vue';
import MyMoments from './MyMoments.vue';
</script>