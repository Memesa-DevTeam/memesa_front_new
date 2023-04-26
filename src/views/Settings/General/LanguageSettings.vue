<template>
<div class="column-display">
    <PageHeader title="语言与地区" @back="$router.push('/settings/general')" style="padding-left: 10px;" id="pc-hidden"/>
    <h2 id="mobile-hidden">语言与地区</h2>
    设置语言与地区偏好
    <Divider/>
    <h2>显示语言(Display Language)</h2>
    设置Memesa主要的显示语言。
    <div class="row-display" style="margin-top: 5px; margin-bottom: 5px;">
        <Select style="width: 200px;" v-model:value="selectedLanguageCode" @change="changeLanguage()">
            <SelectOption value="zh_cn">简体中文</SelectOption>
            <SelectOption value="zh_tw">繁體中文</SelectOption>
            <SelectOption value="en_us">English</SelectOption>
        </Select>
    </div>

</div>
</template>
<script setup>
import { PageHeader, Divider, Select, SelectOption, message } from 'ant-design-vue';
import { ref } from 'vue';

const selectedLanguageCode = ref("zh_cn")

function changeLanguage(){
    localStorage.setItem("MEMESA_LANGUAGE", selectedLanguageCode.value)
    if (selectedLanguageCode.value == "zh_cn"){
        message.info("语言设置将会在刷新页面后生效")
    }
    else if (selectedLanguageCode.value == "zh_tw"){
        message.info("語言設置將會在刷新頁面后生效")
    }
    else if (selectedLanguageCode.value == "en_us"){
        message.info("Language Preferences will take effect after refresh the page")
    }
}

function initializeSelection(){
    selectedLanguageCode.value = localStorage.getItem("MEMESA_LANGUAGE")
}

initializeSelection()
</script>