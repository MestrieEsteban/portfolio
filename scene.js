import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.js';

const canvas = document.querySelector('#world');
const stage = document.querySelector('#threeStage');

if (canvas && stage) {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(35, 1, 0.1, 100);
  camera.position.set(5.1, 3.6, 7.2);
  camera.lookAt(0, 0, 0);

  const renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
    powerPreference: 'high-performance'
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.8));
  renderer.outputColorSpace = THREE.SRGBColorSpace;

  const ink = new THREE.Color('#191917');
  const paper = new THREE.Color('#f2efe7');
  const paper2 = new THREE.Color('#ded8cd');
  const accent = new THREE.Color('#ff5b36');
  const blue = new THREE.Color('#3455ff');
  const green = new THREE.Color('#3c6f57');

  scene.add(new THREE.HemisphereLight(0xfff9ee, 0x777066, 2.6));
  const key = new THREE.DirectionalLight(0xffffff, 3.2);
  key.position.set(5, 8, 4);
  scene.add(key);

  const root = new THREE.Group();
  root.rotation.x = -0.04;
  root.rotation.y = -0.18;
  scene.add(root);

  // A drafting-table grid: intentionally physical rather than sci-fi.
  const grid = new THREE.GridHelper(10, 20, 0x8d887f, 0xc4beb3);
  grid.position.y = -1.45;
  grid.material.transparent = true;
  grid.material.opacity = 0.42;
  root.add(grid);

  const lineMaterial = new THREE.LineBasicMaterial({color: ink});
  const softLineMaterial = new THREE.LineBasicMaterial({color: 0x8e897f, transparent: true, opacity: 0.6});

  function edgeBox(width, height, depth, material = lineMaterial) {
    const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(width, height, depth));
    return new THREE.LineSegments(geometry, material);
  }

  // 01 — HOME: a small wireframe house, nodding to Owlnest.
  const house = new THREE.Group();
  house.position.set(-0.85, -0.28, -0.55);
  house.rotation.y = 0.18;

  const houseBody = edgeBox(2.6, 1.7, 2.05);
  house.add(houseBody);

  const roofPoints = [
    new THREE.Vector3(-1.3, 0.85, -1.025), new THREE.Vector3(0, 1.72, -1.025),
    new THREE.Vector3(0, 1.72, -1.025), new THREE.Vector3(1.3, 0.85, -1.025),
    new THREE.Vector3(-1.3, 0.85, 1.025), new THREE.Vector3(0, 1.72, 1.025),
    new THREE.Vector3(0, 1.72, 1.025), new THREE.Vector3(1.3, 0.85, 1.025),
    new THREE.Vector3(0, 1.72, -1.025), new THREE.Vector3(0, 1.72, 1.025)
  ];
  const roofGeometry = new THREE.BufferGeometry().setFromPoints(roofPoints);
  house.add(new THREE.LineSegments(roofGeometry, lineMaterial));

  const roomFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(2.4, 1.85),
    new THREE.MeshBasicMaterial({color: paper, transparent: true, opacity: 0.62, side: THREE.DoubleSide})
  );
  roomFloor.rotation.x = -Math.PI / 2;
  roomFloor.position.y = -0.84;
  house.add(roomFloor);

  const warmLamp = new THREE.Mesh(
    new THREE.SphereGeometry(0.12, 20, 20),
    new THREE.MeshStandardMaterial({color: accent, emissive: accent, emissiveIntensity: 0.28, roughness: 0.65})
  );
  warmLamp.position.set(0.62, 0.15, 0.35);
  house.add(warmLamp);

  const door = edgeBox(0.55, 1.05, 0.03, softLineMaterial);
  door.position.set(-0.55, -0.32, 1.04);
  house.add(door);
  root.add(house);

  // 02 — MUSIC: a tactile little vinyl record and tonearm.
  const recordGroup = new THREE.Group();
  recordGroup.position.set(1.62, -0.55, 0.62);
  recordGroup.rotation.set(-0.78, 0.18, -0.12);

  const record = new THREE.Mesh(
    new THREE.CylinderGeometry(0.74, 0.74, 0.075, 72),
    new THREE.MeshStandardMaterial({color: 0x1d1d1b, roughness: 0.34, metalness: 0.08})
  );
  record.rotation.x = Math.PI / 2;
  recordGroup.add(record);

  const label = new THREE.Mesh(
    new THREE.CylinderGeometry(0.19, 0.19, 0.08, 40),
    new THREE.MeshStandardMaterial({color: accent, roughness: 0.8})
  );
  label.rotation.x = Math.PI / 2;
  label.position.z = 0.012;
  recordGroup.add(label);

  const hole = new THREE.Mesh(
    new THREE.CylinderGeometry(0.025, 0.025, 0.095, 20),
    new THREE.MeshBasicMaterial({color: paper})
  );
  hole.rotation.x = Math.PI / 2;
  hole.position.z = 0.02;
  recordGroup.add(hole);

  const arm = new THREE.Mesh(
    new THREE.BoxGeometry(0.055, 0.055, 0.92),
    new THREE.MeshStandardMaterial({color: 0xbcb6aa, metalness: 0.35, roughness: 0.45})
  );
  arm.position.set(0.62, 0.13, 0.18);
  arm.rotation.y = -0.52;
  recordGroup.add(arm);
  root.add(recordGroup);

  // 03 — CODE: a pair of old-school interface panels.
  const codeGroup = new THREE.Group();
  codeGroup.position.set(1.45, 0.92, -1.02);
  codeGroup.rotation.set(-0.06, -0.38, 0.04);

  function makePanel(width, height, color, lineColor) {
    const group = new THREE.Group();
    const face = new THREE.Mesh(
      new THREE.PlaneGeometry(width, height),
      new THREE.MeshBasicMaterial({color, transparent: true, opacity: 0.78, side: THREE.DoubleSide})
    );
    group.add(face);
    const outline = new THREE.LineSegments(
      new THREE.EdgesGeometry(new THREE.PlaneGeometry(width, height)),
      new THREE.LineBasicMaterial({color: ink})
    );
    outline.position.z = 0.006;
    group.add(outline);

    const widths = [0.64, 0.42, 0.77, 0.53];
    widths.forEach((ratio, index) => {
      const bar = new THREE.Mesh(
        new THREE.BoxGeometry(width * ratio, 0.035, 0.012),
        new THREE.MeshBasicMaterial({color: lineColor})
      );
      bar.position.set(-width * (1 - ratio) * 0.38, height * 0.24 - index * 0.16, 0.014);
      group.add(bar);
    });
    return group;
  }

  const panelA = makePanel(1.42, 1.05, paper, blue);
  codeGroup.add(panelA);
  const panelB = makePanel(1.08, 0.78, paper2, green);
  panelB.position.set(0.6, -0.62, -0.3);
  panelB.rotation.y = -0.16;
  codeGroup.add(panelB);
  root.add(codeGroup);

  // Loose objects make the scene feel like a workbench, not a logo animation.
  const loose = new THREE.Group();
  const pebbleMaterial = new THREE.MeshStandardMaterial({color: 0x767168, roughness: 0.85});
  const accentMaterial = new THREE.MeshStandardMaterial({color: accent, roughness: 0.75});
  const blueMaterial = new THREE.MeshStandardMaterial({color: blue, roughness: 0.7});

  const pebbleA = new THREE.Mesh(new THREE.IcosahedronGeometry(0.2, 0), pebbleMaterial);
  pebbleA.position.set(-2.1, 0.75, 1.15);
  loose.add(pebbleA);
  const pebbleB = new THREE.Mesh(new THREE.IcosahedronGeometry(0.13, 0), accentMaterial);
  pebbleB.position.set(2.1, 1.48, 0.15);
  loose.add(pebbleB);
  const cube = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.26, 0.26), blueMaterial);
  cube.position.set(0.25, 1.9, 0.25);
  cube.rotation.set(0.4, 0.7, 0.2);
  loose.add(cube);
  root.add(loose);

  const pointer = {x: 0, y: 0};
  const target = {x: 0, y: -0.18};
  let spinKick = 0;
  let lastTime = performance.now();

  function onPointerMove(event) {
    const bounds = stage.getBoundingClientRect();
    pointer.x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    pointer.y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;
    target.y = -0.18 + pointer.x * 0.22;
    target.x = -pointer.y * 0.09;
    if (reduceMotion) render();
  }

  function onPointerLeave() {
    target.x = 0;
    target.y = -0.18;
  }

  function onClick() {
    if (!reduceMotion) spinKick += 0.28;
  }

  stage.addEventListener('pointermove', onPointerMove, {passive:true});
  stage.addEventListener('pointerleave', onPointerLeave);
  stage.addEventListener('click', onClick);

  function resize() {
    const rect = stage.getBoundingClientRect();
    const width = Math.max(1, rect.width);
    const height = Math.max(1, rect.height);
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    render();
  }

  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(stage);

  function render() {
    renderer.render(scene, camera);
  }

  function animate(now) {
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;

    root.rotation.x += (target.x - root.rotation.x) * 0.045;
    root.rotation.y += (target.y - root.rotation.y) * 0.045;
    root.rotation.y += spinKick * dt;
    spinKick *= 0.955;

    record.rotation.z -= dt * 0.38;
    pebbleA.rotation.x += dt * 0.25;
    pebbleA.rotation.y += dt * 0.18;
    pebbleB.rotation.x -= dt * 0.22;
    cube.rotation.x += dt * 0.18;
    cube.rotation.y += dt * 0.23;

    const breathe = Math.sin(now * 0.0013) * 0.035;
    codeGroup.position.y = 0.92 + breathe;
    warmLamp.scale.setScalar(1 + Math.sin(now * 0.0021) * 0.08);

    render();
    requestAnimationFrame(animate);
  }

  resize();
  if (reduceMotion) {
    render();
  } else {
    requestAnimationFrame(animate);
  }
}