<template>
    <div>
    <div class="faq-title">
        Frequently Asked Questions
    </div>
    <div style="margin-top: 40px" >
        <div v-b-toggle.collapse-1 style="display: flex; justify-content: space-between;">
            <div class="faq-ques-title">What is stockcase?</div>
            <div><span style="color: #514abf; font-size: 32px;">+</span></div>
        </div>
        <b-collapse id="collapse-1" class="mt-2">
            <p class="faq-answer-title">Stockcase is a platform for creating, monitoring, and analyzing your stock portfolio and helping you become a more informed and confident investor.</p>
        </b-collapse>
        <div class="line"></div>
    </div>
    <div >
        <div v-b-toggle.collapse-2 style="display: flex; justify-content: space-between;">
            <div class="faq-ques-title">Why should I create a stockcase?</div>
            <div><span style="color: #514abf; font-size: 32px;">+</span></div>
        </div>
        <b-collapse id="collapse-2" class="mt-2">
            <p class="faq-answer-title">Creating pool of multiple stocks helps you diversify your risks and also understand how news events affects the price fluctuation of stocks </p>
        </b-collapse>
        <div class="line"></div>
    </div>    
    <div >
    <div v-b-toggle.collapse-3 style="display: flex; justify-content: space-between;">
        <div class="faq-ques-title">How is the news segregated to General, Positive and Negative?</div>
        <div><span style="color: #514abf; font-size: 32px;">+</span></div>
    </div>
    <b-collapse id="collapse-3" class="mt-2">
        <p class="faq-answer-title">We use a magic spell to segregate the news into General, Positive, and Negative.
We read the sentiment presented in the news article and segregate into the appropriate section so that it becomes really easy for you to get a context to what news you're reading</p>
    </b-collapse>
    <div class="line"></div>
    </div>
    <div>
        <div v-b-toggle.collapse-4 style="display: flex; justify-content: space-between;">
            <div class="faq-ques-title">Which Exchanges are available on stockcase?</div>
            <div><span style="color: #514abf; font-size: 32px;">+</span></div>
        </div>
        <b-collapse id="collapse-4" class="mt-2">
            <p class="faq-answer-title">On Stockcase, we have NASDAQ and NYSE from United States and NSE and BSE from India</p>
        </b-collapse>
        <div class="line"></div>
    </div>
    <div>
        <div v-b-toggle.collapse-5 style="display: flex; justify-content: space-between;">
            <div class="faq-ques-title">Can I buy the stockcase that I create?</div>
            <div><span style="color: #514abf; font-size: 32px;">+</span></div>
        </div>
        <b-collapse id="collapse-5" class="mt-2">
            <p class="faq-answer-title">Right now, we don't offer the service where you could Buy and Sell the portfolio of stocks that you create but in the future, we are working towards it.</p>
        </b-collapse>
        <div class="line"></div>
    </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                faqs: [
                    {ques: "What is stockcase?",ans: "become a more informed and confident investor."},
                    {ques: "Why should I create a stockcase?", ans: "Why should I create a stockcase?"},
                    {ques:"How is the news segregated to General, Positive and Negative?", ans: "We read the sentiment presented in the news article and segregate into the appropriate section so that it becomes really easy for you to get a context to what news you're reading, We use a magic spell to segregate the news into General, Positive, and Negative."},
                    {ques: "Which Exchanges are available on stockcase?", ans: "On Stockcase, we have NASDAQ and NYSE from United States and NSE and BSE from India"},
                    {ques:"Can I buy the stockcase that I create?", ans: "Right now, we don't offer the service where you could Buy and Sell the portfolio of stocks that you create but in the future, we are working towards it."}
                ]
            }
        }
    }
</script>

<style scoped>
    .line {
        margin-top: 20px;
        margin-bottom: 20px;
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