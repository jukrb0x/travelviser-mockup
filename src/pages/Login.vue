<!-- Mockup for login page -->
<template>
  <q-layout>
    <q-page-container class="bg">
      <q-page class="Login">
        <div class="main">
          <img
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
          />
          <div class="input-section">
            <q-input color="" v-model="text" label="Campus ID">
              <template v-slot:prepend>
                <q-icon name="account_box" />
              </template>
            </q-input>
            <q-input color="" v-model="text" label="Password">
              <template v-slot:prepend>
                <q-icon name="lock" />
              </template>
            </q-input>

            <!-- login button -->
            <q-btn
              class="login"
              @click="confirm = true"
              outline
              rounded
              color="primary"
              label="Sign in"
            />
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
                <router-link to="/">
                  <q-btn flat label="Login" color="primary" v-close-popup />
                </router-link>
              </q-card-actions>
            </q-card>
          </q-dialog>
        </div>
        <!-- bottom buttons -->
        <div class="footer">
          <div class="bottom">
            <q-btn flat color="primary" icon="description" />
            <q-btn flat color="primary" icon="help_outline" />
          </div>
        </div>
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
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
// get rid of link underline
a {
  text-decoration: none;
}

.router-link-active {
  text-decoration: none;
}

.bg {
  background: #fafafa;
}
.Login {
  .main {
    display: flex;
    flex-direction: column;
    padding: 150px 20px 0 20px;

    .uni-logo {
      align-self: center;
      margin-bottom: 35px;
    }
    .uni-gate {
      align-self: center;
      margin-bottom: 15px;
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
