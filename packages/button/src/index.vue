<template>
  <button
    :class="[
      'fl-button',
      {
        'is-round': round,
        'is-disabled': disabled,
      },
      type ? `fl-button--${type}` : '',
    ]"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "FlButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    round: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      validator: function (value) {
        return (
          [
            "primary",
            "warning",
            "danger",
            "success",
            "inverse",
            "info",
          ].indexOf(value) !== -1
        );
      },
    },
  },

  emits: ["click"],
  
  setup(props, context) {
    const handleClick = (event) => {
      context.emit("click", event);
    };

    return {
      handleClick,
    };
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fl-button {
  border: none;
  outline: none;
  color: white;
  cursor: pointer;
  font-size: 15px;
  line-height: 1.4;
  border-radius: 4px;
  padding: 10px 19px;
  background-color: #bdc3c7;
  transition: border 0.25s linear, background-color 0.25s linear;

  &:hover {
    border-color: #cacfd2;
    background-color: #cacfd2;
  }

  &:active {
    background: #a1a6a9;
    border-color: #a1a6a9;
  }

  &--primary {
    background-color: #1abc9c;

    &:hover {
      border-color: #48c9b0;
      background-color: #48c9b0;
    }

    &:active {
      border-color: #16a085;
      background-color: #16a085;
    }
  }

  &--warning {
    background-color: #f1c40f;

    &:hover {
      border-color: #f4d313;
      background-color: #f4d313;
    }

    &:active {
      border-color: #cda70d;
      background-color: #cda70d;
    }
  }

  &--danger {
    background-color: #e74c3c;

    &:hover {
      border-color: #ec7063;
      background-color: #ec7063;
    }

    &:active {
      border-color: #c44133;
      background-color: #c44133;
    }
  }

  &--success {
    background-color: #2ecc71;

    &:hover {
      border-color: #58d68d;
      background-color: #58d68d;
    }

    &:active {
      border-color: #27ad60;
      background-color: #27ad60;
    }
  }

  &--inverse {
    background-color: #34495e;

    &:hover {
      border-color: #415b76;
      background-color: #415b76;
    }

    &:active {
      border-color: #2c3e50;
      background-color: #2c3e50;
    }
  }

  &--info {
    background-color: #3498db;

    &:hover {
      border-color: #5dade2;
      background-color: #5dade2;
    }

    &:active {
      border-color: #2c81ba;
      background-color: #2c81ba;
    }
  }
}

.is-disabled {
  opacity: 0.7;
  cursor: not-allowed;
  border-color: #bdc3c7;
  background-color: #bdc3c7;
  color: rgba(255, 255, 255, 0.75);

  &:hover {
    border-color: #bdc3c7;
    background-color: #bdc3c7;
  }

  &:active {
    border-color: #bdc3c7;
    background-color: #bdc3c7;
  }
}

.is-round {
  border-radius: 20px;
}
</style>