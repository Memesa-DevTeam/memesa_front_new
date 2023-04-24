<template>
    <ListSelection>
        <template #content>
            稿件管理
        </template>
    </ListSelection>
    <ListSelection>
        <template #content>
            答疑中心
        </template>
    </ListSelection>
    <ListSelection>
        <template #content>
            关于
        </template>
    </ListSelection>
    <RouterLink to="/settings" class="normal-link">
        <ListSelection>
        <template #content>
            设置
        </template>
    </ListSelection>
    </RouterLink>
    
    <ListSelection @onclick="logout()">
        <template #content>
            退出登录
        </template>
    </ListSelection>
</template>
<script setup>
import ListSelection from '../../components/ListSelection.vue';
import { ref } from 'vue';
import { List, ListItem, message } from 'ant-design-vue';
import user from '../../js/user';

const selections = ref([
    {
        name: "设置",
        icon: "",
    },
    {
        name: "答疑中心",
        icon: "",
    }
])

async function logout(){
    let result = await user.logout()
    message.success("登出成功")
    location.reload()
}
</script>