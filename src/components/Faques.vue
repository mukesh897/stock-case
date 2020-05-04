<template>
    <div>
    <div class="faq-title">
        Frequently Asked Questions
    </div>
    <div style="margin-top: 40px">
    <div v-b-toggle.collapse-1 class="faq-ques-title">What is stockcase?</div>
    <b-collapse id="collapse-1" class="mt-2">
        <p class="faq-answer-title">A stockcase is a basket of exchange traded securities  in a specified weighting scheme
            to reflect a certain objective (ideas, themes, strategies). A stockcase has a minimum
            of 2 securities and a maximum of 50 securities.</p>
    </b-collapse>
    </div>
    <div class="line"></div>
    </div>
</template>

<style scoped>
    .line {
        margin-top: 20px;
        border: solid 1px #ffffff;
        opacity: 0.2;
    }
    .faq-title {
        font-family: MarkPro;
        font-size: 31px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.27;
        letter-spacing: normal;
        color: #ffffff;
    }
    .faq-ques-title {
        font-family: MarkPro;
        font-size: 25px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.28;
        letter-spacing: normal;
        color: #514abf;
    }
      .faq-answer-title {
        font-family: MarkPro;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.28;
        letter-spacing: normal;
        text-align: left;
        color: #ffffff;
    }
</style>