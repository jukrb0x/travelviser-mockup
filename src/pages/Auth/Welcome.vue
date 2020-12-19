<template>
  <q-page padding>
    <!-- content -->
    <div class="main">
      <img class="logo" src="~assets/travelviser-logo.png" width="80%" alt="" />
      <div class="caption">
        <span class="header text-h5">{{ slogan }}</span>
        <span class="text"
          >To use the app, please check whether<br />
          your institution is using Travelviser Passenger Services.</span
        >
      </div>
      <div class="button-group">
        <router-link to="/Register">
          <q-btn
            class="register"
            :size="btnSize"
            @click=""
            rounded
            color="primary"
            label="Register"
        /></router-link>

        <router-link to="/Login">
          <q-btn
            class="login"
            :size="btnSize"
            @click=""
            rounded
            outline
            color="primary"
            label="Login"
        /></router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
  data() {
    return {
      btnSize: "md",
      slogan: "Less Waiting, More Time."
    };
  }
};
</script>
<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 200px;

  .logo {
    margin-bottom: 100px;
  }

  .caption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    .header {
    }
    .text {
      width: 270px;
      text-align: center;
      color: $grey;
    }
  }

  .button-group {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    .register {
      width: 200px;
    }
    .login {
      margin-top: 15px;
      width: 200px;
    }
  }
}
</style>
