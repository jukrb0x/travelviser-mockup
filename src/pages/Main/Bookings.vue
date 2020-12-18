<template>
  <q-page padding>
    <!-- content -->
    <div class="note">
      <div class="title text-h4">My Bookings</div>

      <div class="description">
        Bookings are only available for selected trips.<br />Bookings for trips
        on Fri, Sat & Sun must be made by Wed.
      </div>
    </div>
    <q-separator />
    <div class="no">
      <q-avatar color="white" text-color="grey" size="150px">
        <q-icon name="commute" size="150px"></q-icon>
      </q-avatar>
      <span class="text-h6" style="color:grey">No Bookings found.</span>
    </div>

    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="primary" />
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  name: "bookings",
  data() {
    return {
      date: "2020/12/18"
    };
  },
  methods: {
    getDate() {
      return new Date().toLocaleString();
    }
  }
};
</script>
<style lang="scss" scoped>
.note {
  margin-top: 20px;
  padding: 5px;
  .description {
    color: $grey-7;
    margin-top: 5px;
    margin-bottom: 10px;
  }
}
.no {
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
</style>
