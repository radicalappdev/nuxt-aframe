<template>
  <a-entity :position="item.position">
    <!-- <a-cylinder
      material="color: #3C3743; emissive: #3C3743; emissiveIntensity: 0.8; "
      segments-radial="12"
      theta-start="-90"
      theta-length="180"
      position="0 2 0"
      rotation="-90 0 0"
      height="0.2"
    ></a-cylinder>-->

    <!-- <a-box
      material="color: #3C3743; emissive: #3C3743; emissiveIntensity: 0.8; "
      height="4"
      width="2"
      depth="0.2"
      position="0 0 0"
    ></a-box>

    <a-box
      material="color: #3C3743; emissive: #3C3743; emissiveIntensity: 0.8; "
      height="0.4"
      width="2.4"
      depth="0.6"
      position="0 0 0"
    ></a-box>-->

    <a-entity
      obj-model="obj: #gravestone1"
      material="color: #3C3743; emissive: #3C3743; emissiveIntensity: 0.8; "
      position="0 0.9 0"
      rotation="0 0 0"
      scale="0.016 0.018 0.01"
    ></a-entity>

    <a-entity :text="titleDisplay" scale="4 4 4" position="0 2 0.1"></a-entity>
    <a-entity :text="dateDisplay" scale="3 3 3" position="0 1.7 0.1"></a-entity>
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