<template>
  <a-entity
    obj-model="obj: #wall1"
    material="color: #54505A; emissive: #54505A; emissiveIntensity: 0.8; "
    :position="this.position"
    rotation="90 0 0"
    scale="1.5 0.8 1.5"
  ></a-entity>
</template>

<script>
export default {
  props: {
    position: String,
  },
};
</script>