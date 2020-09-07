<template>
  <div>
    <div style="height: 5rem;" class="bg-black flex flex-row">
      <div class="text-purple text-2xl flex-1 m-4">Welcome</div>
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
      physics
    >
      <a-assets></a-assets>

      <a-box color="#EF2D5E" position="0 3 -5" rotation="0 30 0" dynamic-body></a-box>

      <a-box
        color="#3C3743"
        position="0 -1 -5"
        height="20"
        width="20"
        depth="0.2"
        rotation="-90 0 0"
        static-body
      ></a-box>

      <a-camera>
        <a-cursor></a-cursor>
      </a-camera>
    </a-scene>
  </div>
</template>

