<template>
    <div class="settings-main-box">
        <h1 class="page-title" id="mobile-hidden">设置</h1>
        <div class="settings-main-subbox">
            <Menu mode="inline" style="width: 15%;" class="settings-pc-menu" id="mobile-hidden">
                <SubMenu key="user">
                    <template #icon>
                        <img src="../../assets/icon/userIcon.svg" :width="'35px'">
                    </template>
                    <template #title>
                        用户
                    </template>
                    <RouterLink to="/settings/user/profile" class="normal-link">
                        <MenuItem key="user/basicInfo">
                            <template #icon>
                                <img src="../../assets/icon/profile.svg" :width="'35px'">
                            </template>
                            用户名，简介与头像
                        </MenuItem>
                    </RouterLink>
                    <RouterLink to="/settings/user/password" class="normal-link">
                        <MenuItem key="user/password">
                            <template #icon>
                                <img src="../../assets/icon/password.svg" :width="'35px'">
                            </template>
                            密码与安全
                        </MenuItem>
                    </RouterLink>
                    <RouterLink to="/settings/security" class="normal-link">
                        <MenuItem key="user/logout">
                            <template #icon>
                                <img src="../../assets/icon/security.svg" :width="'35px'">
                            </template>
                            登录管理
                        </MenuItem>
                    </RouterLink>
                    <RouterLink to="/settings/user/agreement" class="normal-link">
                        <MenuItem key="user/agreement">
                            <template #icon>
                                <img src="../../assets/icon/agreement.svg" :width="'35px'">
                            </template>
                            用户服务协议与条款
                        </MenuItem>
                    </RouterLink>
                </SubMenu>
                <SubMenu key="general">
                    <template #icon>
                        <img src="../../assets/icon/settings.svg" :width="'35px'">
                    </template>
                    <template #title>
                        通用
                    </template>
                    <MenuItem key="general/language">
                        语言与地区
                        <template #icon>
                            <img src="../../assets/icon/language.svg" :width="'35px'">
                        </template>
                    </MenuItem>
                </SubMenu>
            </Menu>
            <div class="settings-content">
                <div class="settings-content-view">
                    <RouterView></RouterView>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { Menu, SubMenu, MenuItem, MenuItemGroup, Button } from 'ant-design-vue';
</script>