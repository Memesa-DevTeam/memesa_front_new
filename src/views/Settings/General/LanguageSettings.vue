<template>
<div class="column-display">
    <PageHeader title="语言与地区" @back="$router.push('/settings/general')" style="padding-left: 10px;" id="pc-hidden"/>
    <h2 id="mobile-hidden">语言与地区</h2>
    设置语言与地区偏好
    <Divider/>
    <h2>显示语言(Display Language)</h2>
    设置Memesa主要的显示语言。
    <div class="row-display" style="margin-top: 5px; margin-bottom: 5px;">
        <DropdownButton>
            选择语言
            <template #overlay>
                <Menu>
                    <MenuItem key="zh_cn">简体中文</MenuItem>
                    <MenuItem key="zh_tw">繁體中文</MenuItem>
                    <MenuItem key="en_us">English</MenuItem>
                </Menu>
            </template>
        </DropdownButton>
    </div>

</div>
</template>
<script setup>
import { PageHeader, Divider, Dropdown, DropdownButton, MenuItem, Menu } from 'ant-design-vue';
</script>