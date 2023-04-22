<template>
    <div class="main-box">
        <div class="login-main-box">
            <div class="login-left-box" id="mobile-hidden">

            </div>
            <div class="login-right-box">
                <RouterView>
                    
                </RouterView>
            </div>
        </div>
    </div>
</template>
<script setup>
import LoginComponent from '../../components/Login/LoginComponent.vue';
</script>