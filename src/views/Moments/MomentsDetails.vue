<template>
    <PageHeader title="动态详情" @back="$router.go(-1)"></PageHeader>
    <div class="moments-auto-box">
        <MomentElementBox 
        :hide-show-details="true"
        :img-list="[momentsData.img1, momentsData.img2, momentsData.img3, momentsData.img4]"
        :moment-uuid="momentsData.uuid"
        :release-date="momentsData.date"
        :target-user-id="momentsData.userid"
        style="background-color: #f7f7f7f5;"
        >
            <template #content>
                {{ momentsData.content }}
            </template>
        </MomentElementBox>
        <h2 style="margin-top: 7px;">评论</h2>
        <CommentInputBox></CommentInputBox>
    </div>
    
</template>
<script setup>
import { PageHeader, message } from 'ant-design-vue';
import { useRoute } from 'vue-router';
import { ref } from 'vue';
import MomentElementBox from '../../components/Moments/MomentElementBox.vue';
import moments from '../../js/moments';
import CommentInputBox from '../../components/Comments/CommentInputBox.vue';

const route = useRoute()
const targetUUID = ref(route.params.uuid)
const momentsData = ref({})

async function getMomentsData(){
    let result = await moments.getSingleMoment(targetUUID.value)
    console.log(targetUUID.value)
    if (result == null){
        message.error("获取动态数据时出现了一些错误……")
        return
    }
    momentsData.value = result
    return
}

getMomentsData()
</script>