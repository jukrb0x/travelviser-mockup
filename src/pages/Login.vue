<!-- Mockup for login page -->
<template>
  <q-layout>
    <q-page-container class="bg">
      <q-page class="Login">
        <img src="~assets/xmum-logo.png"
             width="90%"
             class="uni-logo"
             alt="">
        <img src="~assets/university-gate.svg"
             class="uni-gate"
             alt=""
             width="25%" />
        <div class="input-section">
          <q-input color=""
                   v-model="text"
                   label="Campus ID">
            <template v-slot:prepend>
              <q-icon name="account_box" />
            </template>
          </q-input>
          <q-input color=""
                   v-model="text"
                   label="Password">
            <template v-slot:prepend>
              <q-icon name="lock" />
            </template>
          </q-input>

          <!-- login button -->
          <q-btn class="login"
                 @click="confirm = true"
                 outline
                 rounded
                 color="primary"
                 label="Sign in" />
        </div>
        <!-- sign in pop-up -->
        <q-dialog v-model="confirm"
                  persistent>
          <q-card>

            <q-card-section>
              <div class="text-h6">
                Alert
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              By signing in, you are agree to our privac policy & disclaimer.
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat
                     label="Deny"
                     color="red"
                     v-close-popup />
              <q-btn flat
                     label="Login"
                     color="primary"
                     v-close-popup />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script>
  export default {
    name: "Login",
    props: {},
    data() {
      return {
        confirm: false
      }
    },
    computed: {},
    methods: {}
  };
</script>
<style lang="scss" scoped>
.bg{
  background: #fafafa;
}
.Login {
  display: flex;
  flex-direction: column;
  padding: 150px 20px 0 20px;

  .uni-logo{
    align-self: center;
    margin-bottom: 50px;
  }
  .uni-gate {
    align-self: center;
  }

  .input-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .login {
      align-self: center;
      margin-top: 20px;
      // width: min-content;
      width: 100px;
    }
  }
}
</style>
