<template>
  <button class="fl-button">hello</button>
</template>

<script>
export default {
  name: "FlButton",
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fl-button {
  border: none;
  font-size: 16px;
  font-weight: normal;
  line-height: 1.4;
  border-radius: 4px;
  padding: 10px 15px;
  -webkit-font-smoothing: subpixel-antialiased;
  transition: border 0.25s linear, color 0.25s linear,
    background-color 0.25s linear;
}

.fl-button:hover, .fl-button:focus {
  outline: none;
  color: white;
}

.fl-button:active, .fl-button.active {
  outline: none;
  box-shadow: none;
}

.fl-button:focus:active {
  outline: none;
}
</style>