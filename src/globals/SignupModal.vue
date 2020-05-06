<template>
  <div>
    <v-dialog v-model="signUpModal" :width="signUpModalWidth" :height="signUpModalHeight"
              @keydown.esc="signUpModal = false">
      <v-content>
        <v-container class="fill-height" fluid>
          <v-row align="center" justify="center">
            <v-col cols="12" sm="8" md="4">
              <v-card class="elevation-12" color="#252834">
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-text-field id="firstName" label="First Name" name="firstName" type="text" outlined />
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field id="lastName" label="Last Name" name="lastName" type="text" outlined />
                  </v-flex>
                </v-layout>
                  <v-text-field id="email" label="Email" name="login" type="text" outlined />
                  <v-text-field id="password" label="Password" name="password" type="password" outlined />
                  <v-col>
                    <v-btn>Sign Up</v-btn>
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
    class signUpModal extends Vue {

        modalName = "signUpModal";
        name = "";
        signUpModalWidth = "";
        signUpModalHeight = "";

        get signUpModal() {
            let value = this.$store.getters.getModalShowState(this.modalName);
            return value.show;
        }

        set signUpModal(value) {
            if (!value) {
                this.$store.dispatch("hideModal", this.modalName);
            }
        }

        get signUpModalData() {
            let value = this.$store.getters.getModalShowState(this.modalName);
            return value.data;
        }

        mounted() {
            let width = window.innerWidth;
            if(width > 678) {
                this.signUpModalWidth = "100%";
                this.signUpModalHeight = "100%";
            } else if(width < 678){
                this.signUpModalWidth = "100%";
                this.signUpModalHeight = "100%";
            }
        }
    }

    export default signUpModal;
</script>


<style scoped>
  .v-text-field__slot {
    border-radius: 10.5px !important;
    border: solid 0.5px #707070 !important;
    background-color: #252834;
    width: 30%;
    min-height: 31px !important;
    float: right !important;
    margin-left: auto;
  }

  @media only screen and (max-width: 768px) and (max-height: 700px) {
  }


</style>
