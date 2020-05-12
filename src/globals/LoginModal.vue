<template>
  <div>
    <v-dialog v-model="loginModal" :width="loginModalWidth" :height="loginModalHeight"
      @keydown.esc="loginModal = false">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="login-card" color="#252834">
                <v-text-field
                  v-model="userEmail"
                  class="email-field"
                  background-color="#1e2029"
                  color="#ffffff"
                  label="Email"
                  type="text"
                  outlined dark />
                <v-text-field
                  v-model="userPassword"
                  class="password-field"
                  background-color="#1e2029"
                  color="#ffffff"
                  label="Password"
                  type="password"
                  outlined dark />
                <v-col align="center">
                  <v-btn
                    @click="userLogin"
                    class="login-button"
                    min-height="50px"
                    height="7.2%"
                    width="78%"
                    color="#514abf">Login</v-btn>
                  <v-divider></v-divider>
                  <v-btn
                    class="login-button"
                    min-height="50px"
                    height="7.2%"
                    width="78%"
                    color="#252834">Continue with Google</v-btn>
                </v-col>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-dialog>
  </div>
</template>

<script>
import { Vue, Component } from 'vue-property-decorator'

@Component
class loginModal extends Vue {

  modalName = 'loginModal'
  name = ''
  loginModalWidth = ''
  loginModalHeight = ''

  get loginModal() {
    let value = this.$store.getters.getModalShowState(this.modalName)
    return value.show
  }

  set loginModal(value) {
    if (!value) {
      this.$store.dispatch("hideModal", this.modalName)
    }
  }

  get loginModalData() {
    let value = this.$store.getters.getModalShowState(this.modalName)
    return value.data
  }
    
  mounted() {
    let width = window.innerWidth
    if(width > 678) {
      this.loginModalWidth = "80%"
      this.loginModalHeight = "60.9%"
    } else if(width < 678){
      this.loginModalWidth = "75.2%"
      this.loginModalHeight = "87.7%"
    }
  }

  data()  {
    return {
      userEmail: '',
      userPassword: '',
      modalName: 'loginModal',
      name: '',
      loginModalWidth: '',
      loginModalHeight: '',
    }
  }

  async userLogin() {
    await this.$store.dispatch('callUserLogin', {
      email: this.userEmail,
      password: this.userPassword
    })
  }
}

export default loginModal
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
