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
      environment
      style="height: calc( 100vh - 5rem); "
      embedded
      vr-mode-ui="enterVRButton: #myEnterVRButton;"
    >
      <a-entity
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: box; height: 0.6; width: 0.6; depth: 0.6"
        material="color: #ff4b5c"
      ></a-entity>
      <a-entity
        id="boxGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: box; height: 0.6; width: 0.6; depth: 0.6"
        material="color: #ff4b5c"
        size-change
        scale="0.5 0.5 0.5"
      ></a-entity>
      <a-entity
        id="torusGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: torus; radius: 0.4; radius-tubular: 0.06"
        material="color: #d2e603"
        size-change
        visible="false"
        scale="0.5 0.5 0.5"
      ></a-entity>
      <a-entity
        id="sphereGeometry"
        position="0 2.0 -1"
        rotation="45 45 0"
        geometry="primitive: sphere; radius: 0.6;"
        material="color: #fcdab7"
        size-change
        visible="false"
        scale="0.5 0.5 0.5"
      ></a-entity>
      <a-entity id="menu" menu position="0 1.5 -0.5" rotation="-45 0 0" event-manager>
        <a-entity slider position="0 0.10 0"></a-entity>
        <a-entity id="sphereButton" button="label: sphere" position="-0.15 0 0"></a-entity>
        <a-entity id="boxButton" button="label: box" position="0 0 0"></a-entity>
        <a-entity id="torusButton" button="label: torus" position="0.15 0 0"></a-entity>
        <a-entity
          id="darkModeButton"
          button="label: Dark Mode; width: 0.20; toggable: true"
          position="0 -0.10 0"
        ></a-entity>
      </a-entity>
      <a-entity hand-tracking-controls="hand: left"></a-entity>
      <a-entity hand-tracking-controls="hand: right"></a-entity>
    </a-scene>
  </div>
</template>

<script>
/* global AFRAME */
AFRAME.registerComponent("button", {
  schema: {
    label: { default: "label" },
    width: { default: 0.11 },
    toggable: { default: false },
  },
  init: function () {
    var el = this.el;
    var labelEl = (this.labelEl = document.createElement("a-entity"));

    this.color = "#3a50c5";
    el.setAttribute("geometry", {
      primitive: "box",
      width: this.data.width,
      height: 0.05,
      depth: 0.04,
    });

    el.setAttribute("material", { color: this.color });
    el.setAttribute("pressable", "");

    labelEl.setAttribute("position", "0 0 0.02");
    labelEl.setAttribute("text", {
      value: this.data.label,
      color: "white",
      align: "center",
    });

    labelEl.setAttribute("scale", "0.75 0.75 0.75");
    this.el.appendChild(labelEl);

    this.bindMethods();
    this.el.addEventListener("stateadded", this.stateChanged);
    this.el.addEventListener("stateremoved", this.stateChanged);
    this.el.addEventListener("pressedstarted", this.onPressedStarted);
    this.el.addEventListener("pressedended", this.onPressedEnded);
  },

  bindMethods: function () {
    this.stateChanged = this.stateChanged.bind(this);
    this.onPressedStarted = this.onPressedStarted.bind(this);
    this.onPressedEnded = this.onPressedEnded.bind(this);
  },

  update: function (oldData) {
    if (oldData.label !== this.data.label) {
      this.labelEl.setAttribute("text", "value", this.data.label);
    }
  },

  stateChanged: function () {
    var color = this.el.is("pressed") ? "green" : this.color;
    this.el.setAttribute("material", { color: color });
  },

  onPressedStarted: function () {
    var el = this.el;
    el.setAttribute("material", { color: "green" });
    el.emit("click");
    if (this.data.togabble) {
      if (el.is("pressed")) {
        el.removeState("pressed");
      } else {
        el.addState("pressed");
      }
    }
  },

  onPressedEnded: function () {
    if (this.el.is("pressed")) {
      return;
    }
    this.el.setAttribute("material", { color: this.color });
  },
});

/* global AFRAME */
AFRAME.registerComponent("color-change", {
  schema: {
    color: { default: "green" },
  },

  init: function () {
    this.bindMethods();
    this.el.addEventListener("pinchedstarted", this.onPinchedStarted);
    this.el.addEventListener("pinchedended", this.onPinchedEnded);
  },

  bindMethods: function () {
    this.onPinchedStarted = this.onPinchedStarted.bind(this);
    this.onPinchedEnded = this.onPinchedEnded.bind(this);
  },

  onPinchedStarted: function () {
    this.originalColor =
      this.originalColor || this.el.getAttribute("material").color;
    this.el.setAttribute("material", "color", this.data.color);
  },

  onPinchedEnded: function () {
    this.el.setAttribute("material", "color", this.originalColor);
  },
});

/* global AFRAME */
AFRAME.registerComponent("event-manager", {
  init: function () {
    this.bindMethods();

    this.boxGeometryEl = document.querySelector("#boxGeometry");
    this.sphereGeometryEl = document.querySelector("#sphereGeometry");
    this.torusGeometryEl = document.querySelector("#torusGeometry");

    this.boxButtonEl = document.querySelector("#boxButton");
    this.sphereButtonEl = document.querySelector("#sphereButton");
    this.torusButtonEl = document.querySelector("#torusButton");
    this.darkModeButtonEl = document.querySelector("#darkModeButton");

    this.buttonToGeometry = {
      boxButton: this.boxGeometryEl,
      sphereButton: this.sphereGeometryEl,
      torusButton: this.torusGeometryEl,
    };

    this.boxButtonEl.addEventListener("click", this.onClick);
    this.sphereButtonEl.addEventListener("click", this.onClick);
    this.torusButtonEl.addEventListener("click", this.onClick);
    this.darkModeButtonEl.addEventListener("click", this.onClick);
    this.boxButtonEl.addState("pressed");
  },

  bindMethods: function () {
    this.onClick = this.onClick.bind(this);
  },

  onClick: function (evt) {
    var targetEl = evt.target;
    if (
      targetEl === this.boxButtonEl ||
      targetEl === this.sphereButtonEl ||
      targetEl === this.torusButtonEl
    ) {
      this.boxButtonEl.removeState("pressed");
      this.sphereButtonEl.removeState("pressed");
      this.torusButtonEl.removeState("pressed");
      this.boxGeometryEl.object3D.visible = false;
      this.sphereGeometryEl.object3D.visible = false;
      this.torusGeometryEl.object3D.visible = false;
      this.buttonToGeometry[targetEl.id].object3D.visible = true;
    }

    if (targetEl === this.darkModeButtonEl) {
      if (this.el.sceneEl.is("starry")) {
        targetEl.setAttribute("button", "label", "Dark Mode");
        this.el.sceneEl.setAttribute("environment", { preset: "default" });
        this.el.sceneEl.removeState("starry");
      } else {
        targetEl.setAttribute("button", "label", "Light Mode");
        this.el.sceneEl.setAttribute("environment", { preset: "starry" });
        this.el.sceneEl.addState("starry");
      }
    } else {
      targetEl.addState("pressed");
    }
  },
});

/* global AFRAME */
AFRAME.registerComponent("menu", {
  init: function () {
    var el = this.el;
    var menuBackGroundEl = document.createElement("a-entity");
    menuBackGroundEl.setAttribute("geometry", {
      primitive: "box",
      width: 0.6,
      height: 0.4,
      depth: 0.01,
    });
    menuBackGroundEl.setAttribute("material", {
      color: "gray",
    });
    menuBackGroundEl.setAttribute("position", "0 0 -0.025");
    el.appendChild(menuBackGroundEl);
  },
});

/* global AFRAME, THREE */
AFRAME.registerComponent("pinchable", {
  schema: {
    pinchDistance: { default: 0.1 },
  },

  init: function () {
    var sceneEl = this.el.sceneEl;
    this.worldPosition = new THREE.Vector3();
    this.bindMethods();
    this.pinched = false;
    sceneEl.addEventListener("pinchstarted", this.onPinchStarted);
    sceneEl.addEventListener("pinchended", this.onPinchEnded);
    sceneEl.addEventListener("pinchmoved", this.onPinchMoved);
  },

  bindMethods: function () {
    this.onPinchStarted = this.onPinchStarted.bind(this);
    this.onPinchEnded = this.onPinchEnded.bind(this);
    this.onPinchMoved = this.onPinchMoved.bind(this);
  },

  onPinchStarted: function (evt) {
    var pinchDistance = this.calculatePinchDistance(evt.detail.position);
    if (pinchDistance < this.data.pinchDistance) {
      this.el.emit("pinchedstarted");
      this.pinched = true;
    }
  },

  calculatePinchDistance: function (pinchWorldPosition) {
    var el = this.el;
    var worldPosition = this.worldPosition;
    var pinchDistance;

    worldPosition.copy(el.object3D.position);
    el.object3D.parent.updateMatrixWorld();
    el.object3D.parent.localToWorld(worldPosition);

    pinchDistance = worldPosition.distanceTo(pinchWorldPosition);

    return pinchDistance;
  },

  onPinchEnded: function (evt) {
    if (this.pinched) {
      this.pinched = false;
      this.el.emit("pinchedended");
    }
  },

  onPinchMoved: function (evt) {
    var el = this.el;
    var pinchDistance = this.calculatePinchDistance(evt.detail.position);
    if (!this.pinched) {
      return;
    }
    if (pinchDistance < this.data.pinchDistance) {
      el.emit("pinchedmoved", evt.detail);
    } else {
      this.pinched = false;
      el.emit("pinchedended");
    }
  },
});

/* global AFRAME, THREE */
AFRAME.registerComponent("pressable", {
  schema: {
    pressDistance: { default: 0.06 },
  },

  init: function () {
    this.worldPosition = new THREE.Vector3();
    this.handEls = document.querySelectorAll("[hand-tracking-controls]");
    this.pressed = false;
  },

  tick: function () {
    var handEls = this.handEls;
    var handEl;
    var distance;
    for (var i = 0; i < handEls.length; i++) {
      handEl = handEls[i];
      distance = this.calculateFingerDistance(
        handEl.components["hand-tracking-controls"].indexTipPosition
      );
      if (distance < this.data.pressDistance) {
        if (!this.pressed) {
          this.el.emit("pressedstarted");
        }
        this.pressed = true;
        return;
      }
    }
    if (this.pressed) {
      this.el.emit("pressedended");
    }
    this.pressed = false;
  },

  calculateFingerDistance: function (fingerPosition) {
    var el = this.el;
    var worldPosition = this.worldPosition;

    worldPosition.copy(el.object3D.position);
    el.object3D.parent.updateMatrixWorld();
    el.object3D.parent.localToWorld(worldPosition);

    return worldPosition.distanceTo(fingerPosition);
  },
});

/* global AFRAME */
AFRAME.registerComponent("size-change", {
  init: function () {
    this.bindMethods();
    this.el.sceneEl.addEventListener("sliderchanged", this.onSliderChanged);
  },

  bindMethods: function () {
    this.onSliderChanged = this.onSliderChanged.bind(this);
  },

  onSliderChanged: function (evt) {
    var scale = evt.detail.value;
    this.el.object3D.scale.set(scale, scale, scale);
  },
});

/* global AFRAME, THREE */
AFRAME.registerComponent("slider", {
  schema: {
    width: { default: 0.5 },
  },

  init: function () {
    var trackEl = (this.trackEl = document.createElement("a-entity"));
    this.localPosition = new THREE.Vector3();
    this.onPinchedMoved = this.onPinchedMoved.bind(this);

    trackEl.setAttribute("geometry", {
      primitive: "box",
      height: 0.01,
      width: this.data.width,
      depth: 0.01,
    });

    trackEl.setAttribute("material", {
      color: "white",
    });

    this.el.appendChild(trackEl);

    var pickerEl = (this.pickerEl = document.createElement("a-entity"));

    pickerEl.setAttribute("geometry", {
      primitive: "cylinder",
      radius: 0.02,
      height: 0.05,
    });

    pickerEl.setAttribute("material", {
      color: "#3a50c5",
    });

    pickerEl.setAttribute("pinchable", {
      pinchDistance: 0.05,
    });

    pickerEl.setAttribute("rotation", {
      x: 90,
      y: 0,
      z: 0,
    });

    pickerEl.setAttribute("color-change", "");

    this.el.appendChild(pickerEl);

    pickerEl.addEventListener("pinchedmoved", this.onPinchedMoved);
  },

  onPinchedMoved: function (evt) {
    var el = this.el;
    var evtDetail = this.evtDetail;
    var halfWidth = this.data.width / 2;
    var localPosition = this.localPosition;
    localPosition.copy(evt.detail.position);
    el.object3D.updateMatrixWorld();
    el.object3D.worldToLocal(localPosition);
    if (localPosition.x < -halfWidth || localPosition.x > halfWidth) {
      return;
    }
    this.pickerEl.object3D.position.x = localPosition.x;
    evtDetail.value =
      (this.pickerEl.object3D.position.x + halfWidth) / this.data.width;
    this.el.emit("sliderchanged", evtDetail);
  },
});
</script>