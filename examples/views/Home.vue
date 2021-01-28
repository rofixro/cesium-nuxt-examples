<template>
  <div class="home">
    <fl-button>默认按钮</fl-button>
    <fl-button type="primary">主要按钮</fl-button>
    <fl-button type="warning">警告按钮</fl-button>
    <fl-button type="danger">危险按钮</fl-button>
    <fl-button type="success">成功按钮</fl-button>
    <fl-button type="inverse">逆向按钮</fl-button>
    <fl-button type="info">信息按钮</fl-button>
    <fl-button disabled>禁用按钮</fl-button>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss" scoped>
.fl-button {
  margin-right: 10px;
}
</style>