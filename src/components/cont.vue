<template>
  <div>
    <div>
      <slot name="header"></slot>
    </div>
    <div>
      <slot name="body"></slot>
    </div>
    <div>
      <slot name="footer" :txt="text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: "Cont",
  data() {
    return {
      text: "这是底部",
    };
  },
};
</script>