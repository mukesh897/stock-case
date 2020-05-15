<template>
  <div>
    <v-dialog
      v-model="signUpModal"
      :width="signUpModalWidth"
      :height="signUpModalHeight"
      @keydown.esc="signUpModal = false">
      <v-content>
        <v-container class="fill-height" style="background-color: #1e2029" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="signup-card" color="#252834">
                <v-layout row>
                  <v-flex xs6>
                    <v-text-field
                      v-model="firstName"
                      label="First Name"
                      type="text"
                      background-color="#1e2029"
                      color="#ffffff"
                      outlined dark />
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      v-model="lastName"
                      label="Last Name"
                      type="text"
                      background-color="#1e2029"
                      color="#ffffff"
                      outlined dark />
                  </v-flex>
                </v-layout>
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
                      @click="userSignUp"
                      class="login-button"
                      min-height="50px"
                      height="7.2%"
                      width="78%"
                      color="#514abf">Sign Up</v-btn>
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
  class signUpModal extends Vue {

    modalName = 'signUpModal'
    name = ''
    signUpModalWidth = ''
    signUpModalHeight = ''

    get signUpModal() {
      let value = this.$store.getters.getModalShowState(this.modalName)
      return value.show
    }

    set signUpModal(value) {
      if (!value) {
        this.$store.dispatch("hideModal", this.modalName)
      }
    }

    get signUpModalData() {
      let value = this.$store.getters.getModalShowState(this.modalName)
      return value.data
    }

    mounted() {
      let width = window.innerWidth
      if(width > 678) {
        this.signUpModalWidth = '100%'
        this.signUpModalHeight = '100%'
      } else if(width < 678){
        this.signUpModalWidth = '100%'
        this.signUpModalHeight = '100%'
      }
    }

    data() {
      return {
        firstName: '',
        lastName: '',
        userEmail: '',
        userPassword: ''
      }
    }

    async userSignUp() {
      await this.$store.dispatch('callUserSignUp', {
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.userEmail,
        password: this.userPassword
      })
      this.$store.dispatch("hideModal", this.modalName)
    }
  }
export default signUpModal;
</script>


<style scoped>
  .signup-card.v-card {
    padding: 10% 2.5% !important;
  }

  @media only screen and (max-width: 768px) and (max-height: 700px) {

  }
</style>
