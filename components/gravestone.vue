<template>
  <a-entity :position="item.position">
    <a-entity
      obj-model="obj: #gravestone1"
      material="color: #3C3743; emissive: #3C3743; emissiveIntensity: 0.8; "
      position="0 0.9 0"
      rotation="0 0 0"
      scale="0.016 0.018 0.014"
    ></a-entity>

    <a-entity :text="titleDisplay" position="0 2.6 0.2"></a-entity>
    <a-entity :text="dateDisplay" position="0 2.2 0.2"></a-entity>
    <a-entity :text="detailDisplay" position="0 1.9 0.2"></a-entity>
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
      const post =
        "; align: center; color: #B6B4B8; font: https://cdn.aframe.io/fonts/Exo2Bold.fnt; width: 4;";
      const result = [pre, title, post].join("");
      return result;
    },

    dateDisplay() {
      const pre = "value: ";
      const title = this.item.date;
      const post = "; align: center; color: #B6B4B8; width: 3;";
      const result = [pre, title, post].join("");
      return result;
    },

    detailDisplay() {
      const pre = "value: ";
      const title = this.item.details;
      const post = "; align: left; color: #B6B4B8; baseline: top; width: 2;";
      const result = [pre, title, post].join("");
      return result;
    },
  },
};
</script>