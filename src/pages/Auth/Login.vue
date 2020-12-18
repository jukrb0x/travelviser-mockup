<!-- Mockup for login page -->
<template>
  <q-page class="Login" padding>
    <!-- back button -->
    <div class="header">
      <router-link to="/Auth">
        <q-btn
          class="back"
          style="color:#737373"
          :ripple="false"
          icon="keyboard_backspace"
          flat
        ></q-btn
      ></router-link>
    </div>
    <!-- main content -->
    <div class="main">
      <!-- <img
            src="~assets/xmum-logo.png"
            width="90%"
            class="uni-logo"
            alt=""
          />
          <img
            src="~assets/university-gate.svg"
            class="uni-gate"
            alt=""
            width="25%"
          /> -->
      <h4>Login</h4>

      <div class="input-section">
        <q-input color="" v-model="text" label="Email" type="email">
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>
        <q-input color="" v-model="text" label="Password" type="password">
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
        </q-input>

        <!-- login button -->
        <q-btn
          class="login"
          @click="confirm = true"
          rounded
          color="primary"
          label="Login"
        />

        <q-btn class="forget" flat color="primary">Forget your password?</q-btn>

        <span class="register-now"
          >Don't have an account?
          <router-link to="/Register" class="text-primary"
            >Register now</router-link
          ></span
        >
      </div>
      <!-- sign in pop-up -->
      <q-dialog v-model="confirm" persistent>
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
            <q-btn flat label="Deny" color="red" v-close-popup />
            <router-link to="/Home">
              <q-btn flat label="Login" color="primary" v-close-popup />
            </router-link>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
    <!-- bottom buttons -->
    <!-- <div class="footer">
          <div class="bottom">
            <q-btn flat color="primary" icon="description" />
            <q-btn flat color="primary" icon="help_outline" />
          </div>
        </div> -->
  </q-page>
</template>
<script>
export default {
  name: "Login",
  props: {},
  data() {
    return {
      confirm: false
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.Login {
  .header {
    position: sticky;
    // margin-top: 50px;
    height: 40px;
    // position: fixed;
    top: 50px;
  }
  .main {
    display: flex;
    flex-direction: column;
    padding: 100px 20px 0 20px;

    .uni-logo {
      align-self: center;
      margin-bottom: 35px;
    }
    .uni-gate {
      align-self: center;
      margin-bottom: 15px;
    }

    .input-section {
      margin-top: 35px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .login {
        align-self: center;
        margin-top: 20px;
        // width: min-content;
        width: 200px;
      }

      .forget {
        margin-top: 10px;
      }
      .register-now {
        align-self: center;
        color: #737373;
      }
    }
  }
  .footer {
    width: 100%;
    position: absolute;
    bottom: 20px;

    .bottom {
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
    }
  }
}
</style>
