<!-- Mockup for login page -->
<template>
  <q-page class="Verify" padding>
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
      <h4>Verify Email</h4>

      <div class="input-section">
        <span class="text-body1 cap"
          >Please check your email and key in the 6-digit verification code
          here.</span
        >
        <q-input color="" v-model="vcode" label="Verification Code" type="tel">
          <template v-slot:prepend>
            <q-icon name="vpn_key" />
          </template>
        </q-input>
        <!-- login button -->
        <q-btn
          class="register"
          @click="confirm = true"
          rounded
          color="primary"
          label="Confirm"
        />

        <!-- <q-btn class="forget" flat color="primary">Forget your password?</q-btn> -->

        <!--<span class="register-now"
          >Already registered?
          <router-link to="/Login" class="text-primary"
            >Login now</router-link
          ></span
        >-->
      </div>
      <!-- sign in pop-up -->
      <q-dialog v-model="confirm" persistent>
        <q-card>
          <q-card-section>
            <div class="text-h6">
              Reminder
            </div>
          </q-card-section>

          <q-card-section class="q-pt-none">
            Please register using the email address provided by your
            institution. A verification code for activation will be sent to that
            address.
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="red" v-close-popup />
            <router-link to="/Home">
              <q-btn flat label="Proceed" color="primary" v-close-popup />
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
      confirm: false,
      vcode: ""
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.Verify {
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

      .cap {
        margin-bottom: 10px;
      }

      .register {
        align-self: center;
        margin-top: 20px;
        // width: min-content;
        width: 200px;
      }

      .forget {
        margin-top: 10px;
      }
      .register-now {
        margin-top: 10px;
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
