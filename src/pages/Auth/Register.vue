<!-- Mockup for login page -->
<template>
  <q-page class="Register" padding>
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
      <h4>Register</h4>
      <!-- FIXME: data binding -->
      <div class="input-section">
        <q-input
          color=""
          v-model="text"
          label="Email"
          type="email"
          hint="Please using the email provided by your institution"
        >
          <template v-slot:prepend>
            <q-icon name="email" />
          </template>
        </q-input>

        <q-input color="" v-model="text" label="Name">
          <template v-slot:prepend>
            <q-icon name="account_box" />
          </template>
        </q-input>

        <q-input color="" v-model="text" label="Student ID">
          <template v-slot:prepend>
            <q-icon name="fingerprint" />
          </template>
        </q-input>

        <q-input
          color=""
          v-model="text"
          label="Password"
          type="password"
          :type="isPwd ? 'password' : 'text'"
        >
          <template v-slot:prepend>
            <q-icon name="lock" />
          </template>
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <!-- login button -->
        <q-btn
          class="register"
          @click="confirm = true"
          rounded
          color="primary"
          label="Register"
        />

        <!-- <q-btn class="forget" flat color="primary">Forget your password?</q-btn> -->

        <span class="register-now"
          >Already registered?
          <router-link to="/Login" class="text-primary"
            >Login now</router-link
          ></span
        >
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
            <router-link to="/Verify">
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
      isPwd: true
      // TODO: data binding
    };
  },
  computed: {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.Register {
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
