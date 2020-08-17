<template>
  <div class="sandbox">
    <!-- <a-scene fog="type: linear; color: #9ba8b8; far: 30; near: 1"> -->
    <div style="height: 5rem;" class="bg-black flex flex-row">
      <div class="text-purple text-2xl flex-1 m-4">Grey Meditation</div>
      <a
        id="myEnterVRButton"
        class="float-right bg-pink text-white font-semibold rounded px-4 py-2 m-4"
        href="#"
      >Enter VR</a>
    </div>
    <a-scene
      style="height: calc( 100vh - 5rem); "
      embedded
      vr-mode-ui="enterVRButton: #myEnterVRButton;"
      fog="type: linear; color: #9ba8b8; far: 30; near: 1"
    >
      <a-assets>
        <audio id="grey" src="audio/Gray_noise.mp3"></audio>
        <!-- <audio id="ambient" src="../assets/Ambient001.mp3"></audio> -->
      </a-assets>

      <a-sound position="0 -1 -1" src="#grey" autoplay="true" loop="true" on="true"></a-sound>
      <!-- <a-icosahedron
        id="inner"
        color="#162229"
        position="0 0 0"
        radius="10"
        detail="2"
        wireframe="true"
        wireframeLinewidth="100"
        animation="property: rotation; to: 0 -360 0 ; loop: true; dur: 200000"
      ></a-icosahedron>-->

      <a-icosahedron
        color="#162229"
        position="0 0 0"
        radius="20"
        detail="3"
        animation="property: rotation; to: 0 0 -360 ; loop: true; dur: 300000"
        wireframe="true"
        wireframeLinewidth="100"
      ></a-icosahedron>

      <a-icosahedron
        color="#162229"
        position="0 0 0"
        radius="30"
        detail="4"
        animation="property: rotation; to: -360 0 0 ; loop: true; dur: 400000"
        wireframe="true"
        wireframeLinewidth="100"
      ></a-icosahedron>

      <a-box
        position="0 -5.5 0"
        rotation="0 0 0"
        width="120"
        height="0.5"
        depth="200"
        color="#162229"
      ></a-box>

      <a-sky color="#9ba8b8"></a-sky>
    </a-scene>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style>
</style>