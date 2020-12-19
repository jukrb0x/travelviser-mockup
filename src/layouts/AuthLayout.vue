<template>
  <q-layout view="hHh Lpr fFf">
    <!-- <q-layout view="hHh Lpr fFf" container style="overflow-y:scroll;-webkit-overflow-scrolling:touch"> -->
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <!-- <q-header class="text-primary bg">
      <q-toolbar>
        <q-toolbar-title>
          <q-btn flat icon="menu" />
        </q-toolbar-title>
      </q-toolbar>
    </q-header> -->

    <!-- (Optional) The Footer -->

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { Platform } from "quasar";
export default {
  // name: 'LayoutName',

  data() {
    return {
      leftDrawer: true
    };
  }
};
</script>

<style lang="scss">
// get rid of link underline
a {
  text-decoration: none;
  // color: black;
}

.back {
  margin-top: 15px;
}

.router-link-active {
  text-decoration: none;
}
</style>
