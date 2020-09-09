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
    >
      <a-assets></a-assets>

      <a-box
        color="#EF2D5E"
        position="0 1 -5"
        rotation="0 30 0"
        change-color-on-hover="color: blue"
      ></a-box>

      <a-camera>
        <a-cursor></a-cursor>
        <a-entity
          tracked-controls
          vive-controls
          oculus-touch-controls
          hand-controls
          laser-controls
          sphere-collider
          grab
          throw
        ></a-entity>
      </a-camera>

      <a-entity
        environment="
        ground: spikes;
        groundYScale: 25;
        groundTexture: none;
        grid: none;        
        groundColor: #0c0c0c; 
        groundColor2: #8c1eff;

        skyType: gradient;
        skyColor: #0f107f;
        horizonColor: #8c1eff
        "
      ></a-entity>
    </a-scene>
  </div>
</template>

<script>
AFRAME.registerComponent("change-color-on-hover", {
  schema: {
    color: { default: "red" },
  },

  init: function () {
    var data = this.data;
    var el = this.el; // <a-box>
    var defaultColor = el.getAttribute("material").color;

    el.addEventListener("mouseenter", function () {
      el.setAttribute("color", data.color);
    });

    el.addEventListener("mouseleave", function () {
      el.setAttribute("color", defaultColor);
    });
  },
});
</script>