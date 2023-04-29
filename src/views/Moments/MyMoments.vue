<template>
    <div class="row-display">
        <Button type="primary">上传新动态</Button>
    </div>
    <MomentsAutoList :source="localUserId" :show-private="true"/>
</template>
<script setup>
import { Button } from 'ant-design-vue';
import { computed } from 'vue';
import MomentsAutoList from '../../components/Moments/MomentsAutoList.vue';

const localUserId = computed(()=>{
    localStorage.getItem("MEMESA_ID")
})
</script>