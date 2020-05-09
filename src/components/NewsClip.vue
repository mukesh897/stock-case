<template>
    <div class="row news-wrap-content mt-cus-17">
        <div class="col-lg-8" style="padding: 15px;">
            <div style="display: flex; justify-content: space-between;">
                <div class="news-heading"> {{title}}</div>
                <div class="news-sub-heading"> 3h </div>
            </div>
            <p class="news-sub-heading mt-cus-17"> {{description}}</p>
        </div>
        <div class="col-lg-4">
            <img class="image-wrap" :src="url"/>
        </div>
    </div>   
</template> 

<script>
export default {
    name: 'NewsClip',
    props: {
        title: String,
        description: String,
        url: String,
        time: String
    }
}
</script>