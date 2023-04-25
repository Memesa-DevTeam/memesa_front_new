<template>
    <div id="pc-hidden">
        <PageHeader title="用户" sub-title="用户选项和设置" @back="$router.push('/settings')" style="padding-left: 10px;"/>
        <RouterLink class="normal-link" to="/settings/general/language">
            <ListSelection>
                <template #image>
                    <img src="../../../assets/icon/language.svg"  style="margin-right: 15px;">
                </template>
                <template #content>
                    语言与地区
                </template>
            </ListSelection>
        </RouterLink>
    </div>
</template>
<script setup>
import ListSelection from '../../../components/ListSelection.vue';
import { PageHeader } from 'ant-design-vue';
</script>