<template>
    <div class="moments-auto-box">
        <div v-for="i in momentsList" :key="momentsList">
            <MomentElementBox :img-list="[i.img1, i.img2, i.img3, i.img4]" :target-user-id="targetId" :moment-uuid="i.uuid" :is-public="i.public" :release-date="i.date">
                <template #content>
                    {{ i.content }}
                </template>
            </MomentElementBox>
        </div>
    </div>
</template>
<script setup>
import { defineProps, ref } from 'vue';
import MomentElementBox from './MomentElementBox.vue';
import moments from '../../js/moments'

const momentsList = ref([])
const targetId = ref(props.source)
const props = defineProps({
    "source": String,
    "showPrivate": Boolean
})

async function getMoments(){
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

getMoments()
</script>