<template>
    <h1 class="page-title">我</h1>
    <LoginWarning v-if="!isLoggedIn"></LoginWarning>
    <UserInfoCard :userID="inputUserId" v-if="isLoggedIn"></UserInfoCard>
    <Tabs centered v-if="isLoggedIn">
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
import LoginWarning from '../../components/Login/LoginWarning.vue';
import { Tabs, TabPane } from 'ant-design-vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()
const inputUserId = ref(route.params.id)
const isLoggedIn = computed(()=>{
    if (localStorage.getItem("MEMESA_TOKEN") == null || localStorage.getItem("MEMESA_TOKEN") == undefined){
        return false
    }
    else{
        return true
    }
})

</script>