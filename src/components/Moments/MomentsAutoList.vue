<template>
    <div class="moments-auto-box">
        <div v-if="momentsList.length < 1">
            <Empty style="margin-top: 20px;">
                <template #description>
                    TA目前还没有发送过动态哦
                </template>
            </Empty>
        </div>
        <div v-for="i in momentsList" :key="momentsList">
            <MomentElementBox :img-list="[i.img1, i.img2, i.img3, i.img4]" :target-user-id="targetId" :moment-uuid="i.uid" :is-public="i.public" :release-date="i.date">
                <template #content>
                    {{ i.content }}
                </template>
            </MomentElementBox>
        </div>
        <Button type="primary">加载更多</Button>
    </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
import { Empty, Button } from 'ant-design-vue';
import MomentElementBox from './MomentElementBox.vue';
import moments from '../../js/moments'
import subscribe from '../../js/subscriptions'

const momentsList = ref([])
const subscribeStartId = ref(0)
const targetId = ref(props.source)
const props = defineProps({
    "source": String,
    "showPrivate": Boolean
})

async function getMoments(){
    if (props.source == "subscription"){
        console.log("Getting subscription moments...")
        // get the subscribe list firsy
        let subscribeList = await subscribe.getUserFollowingList(localStorage.getItem("MEMESA_ID"))
        let subIDList = []
        for (let i = 0; i < subscribeList.length; i++){
            subIDList.push(subscribeList[i].targetUserId)
        }
        console.log("Target List to upload: ", subIDList)
        let result = await moments.getUserSubscriptionMoments(subIDList, subscribeStartId.value, 15)
        if (!result.status){
            console.log("Error")
            return
        }
        // reapply the start id
        subscribeStartId.value = result.endNum
        for (let i = 0; i < result.data.resultList.length; i++){
            momentsList.value.push(result.data.resultList[i])
        }
    }
    else {
        console.log("Triggered...")
        let result = await moments.getUserMoments(props.source)
        console.log(result.data.data.Data[0].img1)
        if (!result.status){
            console.log("Moments gathered error")
            return
        }
        for (let i = 0; i < result.data.data.Data.length; i++){
            momentsList.value.push(result.data.data.Data[i])
        }
        console.log(momentsList.value)
    }
}

getMoments()
</script>