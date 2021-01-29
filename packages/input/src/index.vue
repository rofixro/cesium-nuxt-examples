<template>
  <input
    :type="type"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="[
      'fl-input',
      { 'is-disabled': disabled },
      status ? `fl-input--${status}` : '',
    ]"
  />
</template>

<script>
export default {
  name: "FlInput",
  props: {
    type: {
      type: String,
      default: "text",
    },

    status: {
      type: String,
      validator: function (value) {
        return ["error", "success"].indexOf(value) !== -1;
      },
    },

    disabled: Boolean,
    placeholder: String,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fl-input {
  outline: none;
  font-size: 15px;
  color: #34495e;
  line-height: 1.4;
  padding: 8px 12px;
  border-radius: 6px;
  border: 2px solid #bdc3c7;
  transition: border 0.25s linear;

  &:focus {
    border-color: #1abc9c;
  }

  &::placeholder {
    color: #b2bcc5;
  }

  &--error {
    color: #e74c3c;
    border-color: #e74c3c;

    &:focus {
      border-color: #e74c3c;
    }

    &::placeholder {
      color: #e74c3c;
    }
  }

  &--success {
    color: #2ecc71;
    border-color: #2ecc71;

    &:focus {
      border-color: #2ecc71;
    }

    &::placeholder {
      color: #2ecc71;
    }
  }
}

.is-disabled {
  opacity: 0.7;
  color: #d5dbdb;
  cursor: not-allowed;
  border-color: #d5dbdb;
  background-color: #f4f6f6;

  &:focus {
    border-color: #d5dbdb;
  }

  &::placeholder {
    color: #d5dbdb;
  }
}
</style>