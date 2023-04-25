<template>
    <div class="column-display">
        <PageHeader title="账号密码" @back="$router.push('/settings/user')" style="padding-left: 10px;" id="pc-hidden"/>
        <h2 id="mobile-hidden">账号密码</h2>
        修改与找回密码
        <Divider/>
        <h2>修改密码</h2>
        修改您现在的密码。若发生账号被盗，请及时修改您的密码。
        <div class="row-display">
            <Button type="primary">修改密码</Button>
        </div>
        <Divider/>
        <h2>找回密码</h2>
        若您忘记了您当前的密码，可以点击下方按钮进行找回程序。
        <div class="row-display">
            <Button type="primary" disabled>找回密码</Button>
        </div>
        <Divider/>
        <h2>修改绑定邮箱</h2>
        绑定的邮箱是我们首选的找回密码的方式，若您需要更换邮箱可以点击下方按钮切换。
        <div class="row-display">
            <Button type="primary" disabled>重新绑定邮箱</Button>
        </div>
    </div>
</template>
<script setup>
import { PageHeader, Divider, Button } from 'ant-design-vue';
</script>