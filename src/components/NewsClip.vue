<template>
    <div @click="redirect" class="row news-wrap-content mt-cus-17">
        <div class="col-lg-8" style="padding: 15px;">
            <div style="display: flex; justify-content: space-between;">
                <div style="width: 90%;" class="news-heading"> {{title}}</div>
                <div style="white-space: nowrap; text-align: right !important" class="news-sub-heading"> {{getTime}} </div>
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
        time: String,
        link: String
    },
    computed: {
        getTime() {
            return this.formatDate(this.time)
        }
    },
    methods: {
        formatDate(date_variable) {
            let now = new Date();
            let current_date_data = new Date(date_variable);
            const oneDay = 60 * 60 * 24 * 1000;

            var differenceDates = Math.abs(now - current_date_data);
            var compareDatesBoolean = (now - current_date_data) < oneDay;

            var convertDate = null;
            var seconds = "";
            var minutes = "";
            var hours = "";
            var days = "";

            convertDate = differenceDates / 1000; //
            seconds = Math.trunc(convertDate)%60;
            convertDate = convertDate/60;
            minutes = Math.trunc(convertDate)%60;
            convertDate = convertDate/60;
            hours = Math.trunc(convertDate)%24;
            convertDate = convertDate/24;
            days = parseInt(convertDate);
            if (days < 1) {
                return hours+" h"
            } else {
                return days+((days == 1)?" day":" days");
            }
        },
        redirect() {
            window.location = 'this.link';

        }
    }
}
</script>