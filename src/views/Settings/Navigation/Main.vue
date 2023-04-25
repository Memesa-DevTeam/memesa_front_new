<template>
    <div id="pc-hidden">
        <PageHeader title="设置" @back="$router.push('/profile/' + userId)" style="padding-left: 10px;"/>
        <RouterLink to="/settings/user" class="normal-link">
            <ListSelection>
                <template #image>
                    <img src="../../../assets/icon/profile.svg"  style="margin-right: 15px;">
                </template>
                <template #content>
                    用户
                </template>
            </ListSelection>
        </RouterLink>
        <RouterLink class="normal-link" to="/settings/general">
            <ListSelection>
                <template #image>
                    <img src="../../../assets/icon/settings.svg"  style="margin-right: 15px;">
                </template>
                <template #content>
                    通用
                </template>
            </ListSelection>
        </RouterLink>
    </div>
</template>
<script setup>
import ListSelection from '../../../components/ListSelection.vue';
import { PageHeader } from 'ant-design-vue';
import { computed } from 'vue';
const userId = computed(()=>{
    return localStorage.getItem("MEMESA_ID")
})
</script>