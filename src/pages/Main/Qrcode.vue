<template>
  <q-page padding>
    <!-- content -->
    <div class="head">
      <div class="caption">
        <span class="text-h4">Digital Pass</span>
        <span class="text-subtitle1 description"
          >Flash QR Code to the scanner</span
        >
      </div>

      <div class="icon">
        <img src="~assets/university-gate.svg" alt="" width="35%" />
      </div>
    </div>

    <div class="qrcode">
      <img width="110%" src="~assets/qrcode.png" alt="" />
    </div>
    <div class="info">
      <span class="name text-h6"
        >James Bond
        <q-chip
          outline
          dense
          color="primary"
          text-color="white"
          icon="perm_identity"
          class="stuId text-subtitle2"
          >SWE1909000</q-chip
        ></span
      >

      <span class="email text-subtitle1">james.bond@007.com</span>
    </div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style lang="scss" scoped>
.head {
  display: flex;
  justify-content: space-between;
  .caption {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .description {
      color: $grey-7;
    }
  }
  .icon {
    position: absolute;
    top: 40px;
    right: -95px;
  }
}
.qrcode {
  display: flex;
  justify-content: center;
  align-items: center;
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 5px;
}
</style>
