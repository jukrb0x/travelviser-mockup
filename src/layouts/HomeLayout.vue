<template>
  <q-layout view="hHh LpR fFf" class="scrolling-trouble">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->

    <!-- (Optional) The Footer -->
    <q-footer>
      <q-tabs
        v-model="tab"
        indicator-color="transparent"
        active-color="primary"
        class="tab bg-white text-grey-5 shadow-2"
      >
        <q-route-tab
          to="/qrcode"
          exact
          name="qrcode"
          icon="qr_code"
          label="qrcode"
        />
        <q-route-tab to="/maps" exact name="maps" icon="map" label="maps" />
        <q-route-tab
          to="/bookings"
          exact
          name="bookings"
          icon="local_activity"
          label="bookings"
        />
        <q-route-tab
          to="/profile"
          exact
          name="profile"
          icon="perm_identity"
          label="profile"
        />
      </q-tabs>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <div class="head">
        <!-- This is where pages get injected -->
        <router-view />
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  // name: 'LayoutName',

  data() {
    return {
      tab: "qrcode"
    };
  }
};
</script>

<style lang="scss">
.tab {
  padding-bottom: 12px;
}
.scrolling-trouble {
  overflow-y: hidden !important;
  height: 1px;
}
.head {
  padding: 40px 10px 0 10px;
  overflow-y: hidden !important;
}
</style>
