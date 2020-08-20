<template>
  <a-entity :position="item.position">
    <a-entity
      obj-model="obj: #gravestone1"
      material="color: #3C3743; emissive: #3C3743; emissiveIntensity: 0.8; "
      position="0 0.9 0"
      rotation="0 0 0"
      scale="0.016 0.018 0.014"
    ></a-entity>

    <a-entity :text="titleDisplay" scale="4 4 4" position="0 2.6 0.2"></a-entity>
    <a-entity :text="dateDisplay" scale="3 3 3" position="0 2.2 0.2"></a-entity>
  </a-entity>
</template>

<script>
export default {
  props: {
    item: Object,
  },

  computed: {
    titleDisplay() {
      const pre = "value: ";
      const title = this.item.title;
      const post = "; align: center;";
      const result = [pre, title, post].join("");
      return result;
    },

    dateDisplay() {
      const pre = "value: ";
      const title = this.item.date;
      const post = "; align: center;";
      const result = [pre, title, post].join("");
      return result;
    },
  },
};
</script>