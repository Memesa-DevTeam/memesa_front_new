<template>
    <div class="search-box">
        <div class="search-input-area">
            <Input placeholder="搜索手书，音乐，或者是主题" style="width: 600px; margin-right: 5px; background-color: rgba(255, 255, 255, 0.85);" v-model:value="inputSearchValue"/>
            <Button ghost>
                <img src="@/assets/icon/search.svg">
            </Button>
        </div>
        <div class="search-suggestion-box" v-if="inputSearchValue">
            This is the search suggestion box
        </div>
    </div>
</template>
<script setup>
import { Input, Button } from 'ant-design-vue';
import { ref } from 'vue';

const inputSearchValue = ref("")
</script>