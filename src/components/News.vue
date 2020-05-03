<template>
    <div>
       <div>
           <div style="display: flex; margin-top: 60px;">
               <div class="news-heading news-title ">NEWS:</div>
            <b-tabs content-class="mt-3">
                
                <b-tab id="tab-1" title="General" active>
                    <div class="row news-wrap-content mt-cus-17">
                        <div class="col-lg-8" style="padding: 15px;">
                            <div style="display: flex; justify-content: space-between;">
                                <div class="news-heading"> The Wall Street Journal</div>
                                <div class="news-sub-heading"> 3h </div>
                            </div>
                            <p class="news-sub-heading mt-cus-17"> Musk’s SpaceX, Bezos’ Blue Origin land contract
                                to build NASA’s astronaut moon lander</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="image-wrap" src="https://image.cnbcfm.com/api/v1/image/105060153-GettyImages-930533880.jpg?v=1551890483&w=1910"/>
                        </div>
                    </div>
                    <div class="row news-wrap-content mt-cus-17">
                        <div class="col-lg-8" style="padding: 15px;">
                            <div style="display: flex; justify-content: space-between;">
                                <div class="news-heading"> The Wall Street Journal</div>
                                <div class="news-sub-heading"> 3h </div>
                            </div>
                            <p class="news-sub-heading mt-cus-17"> Musk’s SpaceX, Bezos’ Blue Origin land contract
                                to build NASA’s astronaut moon lander</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="image-wrap" src="https://image.cnbcfm.com/api/v1/image/105060153-GettyImages-930533880.jpg?v=1551890483&w=1910"/>
                        </div>
                    </div>
                    <div class="row news-wrap-content mt-cus-17">
                        <div class="col-lg-8" style="padding: 15px;">
                            <div style="display: flex; justify-content: space-between;">
                                <div class="news-heading"> The Wall Street Journal</div>
                                <div class="news-sub-heading"> 3h </div>
                            </div>
                            <p class="news-sub-heading mt-cus-17"> Musk’s SpaceX, Bezos’ Blue Origin land contract
                                to build NASA’s astronaut moon lander</p>
                        </div>
                        <div class="col-lg-4">
                            <img class="image-wrap" src="https://image.cnbcfm.com/api/v1/image/105060153-GettyImages-930533880.jpg?v=1551890483&w=1910"/>
                        </div>
                    </div>
                </b-tab>
                <b-tab class="tab-text" title="Positive"><p>I'm the second tab</p></b-tab>
                <b-tab class="tab-text" title="Negative"><p>I'm a disabled tab!</p></b-tab>
            </b-tabs>
            </div>
       </div>
    </div>
</template>

<script>
export default {
name: 'News', 
}
</script>

<style>
.news-wrap-content {
    box-shadow: -2.5px -2.5px 2.5px 0 rgba(68, 63, 153, 0.07);
    background-color: #1e2029;
    padding: 15px;
    margin-left: -109px;
}

.tab-under-a {
    border-bottom: #ffffff;
}

.news-heading {
    font-family: MarkPro;
    font-size: 22.5px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;
}

.news-sub-heading {
    font-family: MarkPro;
    font-size: 22.5px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.27;
    letter-spacing: normal;
    text-align: left;
    color: #ffffff;

}

.image-wrap {
    width: 265px;
    height: 147.5px;
    object-fit: contain;
}

.nav-tabs {
    margin-top: 48px;
    margin-left: 60px;
    border-bottom: 0px !important;
}

.nav-tabs .nav-link {
    border-bottom: 0px !important;
    color: #ffffff;
    font-size: 31px;
    font-family: MarkPro;
    opacity: 0.2;
}

.nav-tabs .nav-link.active {
    color: #ffffff;
    background-color: transparent;
    border: 0px;
    font-family: MarkPro;
    font-size: 31px;
    font-weight: 500;
    opacity: 1;
}
.news-title {
    margin-top: 70px;
}
.mt-cus-17 {
    margin-top: 17px;
}
#tab-1 .ul .li {
    border-bottom: 2px solid red !important;
}
</style>