<template>
  <div>
    <v-dialog v-model="loginModal" :width="loginModalWidth" :height="loginModalHeight"
      @keydown.esc="loginModal = false">
      <div class="modal-bg">
        <div class="close-btn">
          <i class="icon-close icon-close__style" @click="loginModal = false"></i>
        </div>
        <div class="mt-cus-15 center-text">
          <p class="success-title pat-5">ALERT SET SUCCESSFULLY</p>
          <p class="success-subtitle pat-5">Your alert for <span class="success-subtitle__bold">ETH/USDC</span> for the
            duration of <span class="success-subtitle success-subtitle__bold">28 Days</span> has
            been set successfully. You will be notified on reaching
            the Trigger point of <span class="success-subtitle__bold">4,756 USDC/ETH.</span>
          </p>
        </div>
        <div class="center-text">
          <button class="button button__message">DONE</button>
        </div>
      </div>
    </v-dialog>
  </div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
class loginModal extends Vue {

  modalName = "loginModal";
  name = "";
  loginModalWidth = "";
  loginModalHeight = "";

  get loginModal() {
    var value = this.$store.getters.getModalShowState(this.modalName);
    return value.show;
  }

  set loginModal(value) {
    if (!value) {
      this.$store.dispatch("hideModal", this.modalName);
    }
  }

  get loginModalData() {
    var value = this.$store.getters.getModalShowState(this.modalName);
    return value.data;
  }
    
  mounted() {
    var width = window.innerWidth;
    if(width > 678) {
      this.loginModalWidth = "80%";
      this.loginModalHeight = "60.9%";
    } else if(width < 678){
      this.loginModalWidth = "75.2%";
      this.loginModalHeight = "87.7%";
    }
  }
}

export default loginModal;
</script>

<style>
  .icon-close__style {
    margin-left: auto;
    color: #777;
  }
  
  .modal-bg {
    background-color: #ffffff;
    padding: 15px;
    position: fixed;
    padding-bottom: 40px;
  }

  .mt-cus-15 {
    margin-top: 15px;
  }

  .center-text {
    text-align: center;
  }

  .pat-5 {
    margin-top: 5% !important;
  }

  .success-title {
    font-family: RubikMedium;
    width: 75%;
    margin: auto;
    font-size: 15px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 2px;
    color: #777777;
  }

  .success-subtitle {
    width: 75%;
    margin: auto;  
    font-family: Rubik;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.43;
    letter-spacing: 0.4px;
    text-align: center;
    color: #9d9fa2;
  }

  .success-subtitle__bold {
    font-style: RubikBold;  
    font-weight: 500;
  }

  .button {
    border-radius: 2px;
    background-color: #335fff;
    width: 30%;
    margin-top: 6.5%;
    padding: 14px 0px;
  }

  .button__message {
    font-family: Rubik;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 1.2px;
    text-align: center;
    color: #ffffff;
  }

  @media only screen and (max-width: 768px) {
  }


</style>
