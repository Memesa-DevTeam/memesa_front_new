<template>
    <h1 class="page-title">我</h1>
    <UserInfoCard :userID="inputUserId"></UserInfoCard>
    <Tabs centered>
        <TabPane key="1" tab="首页">
            
        </TabPane>
        <TabPane key="2" tab="视频">
            
        </TabPane>
        <TabPane key="3" tab="动态">
            
        </TabPane>
        <TabPane key="4" tab="素材">
            
        </TabPane>
    </Tabs>
</template>
<script setup>
import UserInfoCard from '../../components/UserInfoCard.vue';
import { Tabs, TabPane } from 'ant-design-vue';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const inputUserId = ref(route.params.id)

</script>