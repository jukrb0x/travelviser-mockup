<template>
  <q-page padding>
    <!-- content -->
    <div class="info">
      <q-avatar color="white" text-color="primary" size="150px">
        <q-icon name="account_circle" size="150px"></q-icon>
      </q-avatar>
      <span class="name text-h6">James Bond</span>
      <q-chip
        outline
        dense
        color="primary"
        text-color="white"
        icon="perm_identity"
        class="stuId text-subtitle2"
        >SWE1909000</q-chip
      >

      <span class="email text-subtitle1">james.bond@007.com</span>
    </div>
    <div class="list">
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section>Update username</q-item-section>
          <q-item-section avatar>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Update email</q-item-section>
          <q-item-section avatar>
            <q-icon color="primary" name="mail" />
          </q-item-section>
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section>Update password</q-item-section>
          <q-item-section avatar>
            <q-icon color="primary" name="lock" />
          </q-item-section>
        </q-item>
      </q-list>
    </div>
    <div class="opt">
      <q-btn color="red" @click="confirm = true" class="sign-out"
        >Sign Out</q-btn
      >
      <!-- pop-up -->
      <q-dialog v-model="confirm">
        <q-card>
          <q-card-section class="row items-center">
            <q-avatar icon="exit_to_app" color="red" text-color="white" />
            <span class="q-ml-sm">Are you sure to sign out?</span>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Cancel" color="primary" v-close-popup />
            <router-link to="/"
              ><q-btn flat label="Sign Out" color="red" v-close-popup
            /></router-link>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      confirm: false
    };
  }
};
</script>
<style lang="scss" scoped>
.info {
  margin-top: 20px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
.list {
  margin-top: 10px;
}
.opt {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  .sign-out {
    width: 150px;
  }
}
</style>
