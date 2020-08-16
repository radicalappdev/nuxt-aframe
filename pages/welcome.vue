<template>
  <div>
    <div style="height: 5rem;">
      <a
        id="myEnterVRButton"
        class="float-right bg-gray-100 text-purple font-semibold rounded px-4 py-2 m-4"
        href="#"
      >Enter VR</a>
    </div>
    <a-scene
      style="height: calc( 100vh - 5rem); "
      embedded
      vr-mode-ui="enterVRButton: #myEnterVRButton;"
    >
      <a-assets>
        <a-asset-item id="welcome" src="/1Story_Mat.gltf"></a-asset-item>
        <a-asset-item id="houseobj" src="/2Story_Mat.obj"></a-asset-item>
        <a-asset-item id="housemat" src="/2Story_Mat.mtl"></a-asset-item>
      </a-assets>

      <!-- <a-entity
        gltf-model="#welcome"
        position="3 0.5 -12"
        rotation="0 30 0"
        material="color: #f222ff; emissive: #f222ff; emissiveIntensity: 0.8; "
      ></a-entity>-->

      <a-entity
        text="value: Welcome to nowhere; align: center;"
        scale="10 10 10"
        position="0 5 -10"
      ></a-entity>

      <a-entity
        text="value: Don't let reality hit you on the way out; align: center;"
        scale="5 5 5"
        position="0 4 -10"
      ></a-entity>

      <!-- <a-entity
        obj-model="obj: #houseobj"
        material="color: #ff2975; emissive: #ff2975; emissiveIntensity: 0.8; "
        position="0 0.5 -10"
        rotation="0 30 0"
      ></a-entity>
      <a-entity obj-model="obj: #houseobj; mtl: #housemat" position="0 0.5 -10" rotation="0 30 0"></a-entity>-->

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