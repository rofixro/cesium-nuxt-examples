<template>
  <div class="home">
    <fl-button>默认按钮</fl-button>
    <fl-button type="primary" round>圆角按钮</fl-button>
    <fl-button type="primary">主要按钮</fl-button>
    <fl-button type="warning">警告按钮</fl-button>
    <fl-button type="danger">危险按钮</fl-button>
    <fl-button type="success">成功按钮</fl-button>
    <fl-button type="inverse">逆向按钮</fl-button>
    <fl-button type="info">信息按钮</fl-button>
    <fl-button disabled>禁用按钮</fl-button>
    <br>
    <fl-input placeholder="Inactive" />
    <fl-input placeholder="Error" status="error" />
    <fl-input placeholder="Success" status="success" />
    <fl-input placeholder="Disabled" disabled />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    aaa() {
      console.log(1);
    },
  },
};
</script>

<style lang="scss" scoped>
.fl-button {
  margin-right: 10px;
}
</style>