<template>
    <div>
        <v-card>
            <v-tabs fixed-tabs v-model="tab" class="tabs">
                <v-tabs-slider class="slider" color="blue"></v-tabs-slider>
                <v-tab>GENERAL</v-tab>
                <v-tab>POSITIVE</v-tab>
                <v-tab>NEGATIVE</v-tab>
            </v-tabs>
        </v-card>
        <div>Hello</div>
    </div>
</template>

<script>
export default {
name: 'News', 
}
</script>