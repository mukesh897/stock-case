<template>
  <div>
    <v-dialog v-model="loginModal" :width="loginModalWidth" :height="loginModalHeight"
      @keydown.esc="loginModal = false">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="login-card">
                <v-text-field class="email-field" background-color="#1e2029" color="#ffffff" id="email" label="Email" name="login" type="text" outlined dark />
                <v-text-field class="password-field" background-color="#1e2029" color="#ffffff" id="password" label="Password" name="password" type="password" outlined dark />
                <v-col align="center">
                  <v-btn class="login-button" min-height="50px" height="7.2%">Login</v-btn>
                  <v-divider></v-divider>
                  <v-btn>Continue with google</v-btn>
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
import { Vue, Component } from "vue-property-decorator";

@Component
class loginModal extends Vue {

  modalName = "loginModal";
  name = "";
  loginModalWidth = "";
  loginModalHeight = "";

  get loginModal() {
    let value = this.$store.getters.getModalShowState(this.modalName);
    return value.show;
  }

  set loginModal(value) {
    if (!value) {
      this.$store.dispatch("hideModal", this.modalName);
    }
  }

  get loginModalData() {
    let value = this.$store.getters.getModalShowState(this.modalName);
    return value.data;
  }
    
  mounted() {
    let width = window.innerWidth;
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

<style scoped>
  .login-card.v-card {
    background-color: #252834;
    padding: 10% 2.5% !important;
  }

  .login-button {
    color: #514abf;
  }

  @media only screen and (max-width: 768px) {
  }


</style>
