<template>
    <div class="search-box">
        <div class="search-input-area">
            <Input placeholder="搜索手书，音乐，或者是主题" v-model:value="inputSearchValue"/>
            <Button ghost id="mobile-hidden">
                <img src="@/assets/icon/search.svg">
            </Button>
        </div>
        <div class="search-suggestion-box" v-if="inputSearchValue">
            {{ inputSearchValue }} 的搜索结果：<br>
            <Button id="pc-hidden">搜索</Button>
        </div>
    </div>
</template>
<script setup>
import { Input, Button } from 'ant-design-vue';
import { ref } from 'vue';

const inputSearchValue = ref("")
</script>