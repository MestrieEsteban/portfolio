const canvas = document.querySelector('#world');
const stage = document.querySelector('#threeStage');

if (canvas && stage) {
  stage.style.position = 'relative';
  stage.style.minHeight = '560px';
  stage.style.overflow = 'hidden';

  Object.assign(canvas.style, {
    position: 'absolute',
    inset: '0',
    width: '100%',
    height: '100%',
    display: 'block',
    zIndex: '1'
  });

  [...stage.children].forEach((node) => {
    if (node !== canvas) {
      node.style.zIndex = '3';
      if (getComputedStyle(node).position === 'static') node.style.position = 'relative';
    }
  });

  const status = stage.querySelector('.stage-status');

  const fail = (error) => {
    console.error('Three.js scene failed:', error);
    stage.dataset.webgl = 'error';
    if (status) {
      status.innerHTML = '<i style="background:#c94b35"></i> fallback';
    }

    const fallback = document.createElement('div');
    fallback.setAttribute('aria-hidden', 'true');
    Object.assign(fallback.style, {
      position: 'absolute', inset: '0', zIndex: '1', pointerEvents: 'none',
      background: 'linear-gradient(145deg,#e6e0d5,#f5f2eb)'
    });
    fallback.innerHTML = `
      <svg viewBox="0 0 800 620" width="100%" height="100%" preserveAspectRatio="xMidYMid slice">
        <g fill="none" stroke="#1b1a18" stroke-width="4" opacity=".9">
          <path d="M115 390L305 280L470 360L278 474Z"/>
          <path d="M115 390V250L280 154L470 235V360"/>
          <path d="M115 250L278 342L470 235"/>
          <path d="M278 342V474"/>
        </g>
        <circle cx="585" cy="390" r="94" fill="#1b1a18"/>
        <circle cx="585" cy="390" r="27" fill="#f05d3e"/>
        <rect x="490" y="115" width="210" height="145" rx="8" fill="#f8f5ef" stroke="#1b1a18" stroke-width="4"/>
        <path d="M520 155H655M520 185H610M520 215H670" stroke="#3455ff" stroke-width="8"/>
        <circle cx="220" cy="210" r="13" fill="#f05d3e"/>
      </svg>`;
    stage.prepend(fallback);
  };

  (async () => {
    try {
      if (!window.WebGLRenderingContext) throw new Error('WebGL unavailable');

      const THREE = await import('https://cdn.jsdelivr.net/npm/three@0.180.0/build/three.module.min.js');
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
      camera.position.set(6.2, 4.4, 8.4);
      camera.lookAt(0, 0.15, 0);

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, 0);
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;

      scene.add(new THREE.HemisphereLight(0xfffbf3, 0x5f5a52, 3.4));
      const sun = new THREE.DirectionalLight(0xffffff, 4.2);
      sun.position.set(5, 7, 6);
      scene.add(sun);

      const root = new THREE.Group();
      root.rotation.set(-0.08, -0.22, 0);
      scene.add(root);

      const ink = 0x1d1c19;
      const paper = 0xede8dd;
      const accent = 0xf05d3e;
      const blue = 0x3455ff;
      const green = 0x3f745c;

      const base = new THREE.Mesh(
        new THREE.BoxGeometry(7.4, 0.12, 5.2),
        new THREE.MeshStandardMaterial({ color: 0xd9d2c6, roughness: 0.95 })
      );
      base.position.y = -1.38;
      root.add(base);

      const grid = new THREE.GridHelper(7.2, 14, 0x5d5952, 0xa9a298);
      grid.position.y = -1.305;
      grid.material.transparent = true;
      grid.material.opacity = 0.34;
      root.add(grid);

      const lineMaterial = new THREE.LineBasicMaterial({ color: ink });
      const softLineMaterial = new THREE.LineBasicMaterial({ color: 0x777168, transparent: true, opacity: 0.72 });

      const edgeBox = (w, h, d, material = lineMaterial) => {
        const edges = new THREE.EdgesGeometry(new THREE.BoxGeometry(w, h, d));
        return new THREE.LineSegments(edges, material);
      };

      // HOUSE / Owlnest
      const house = new THREE.Group();
      house.position.set(-1.05, -0.25, -0.45);
      house.rotation.y = 0.18;

      const shell = new THREE.Mesh(
        new THREE.BoxGeometry(2.7, 1.72, 2.12),
        new THREE.MeshStandardMaterial({ color: paper, transparent: true, opacity: 0.42, roughness: 1 })
      );
      house.add(shell);
      house.add(edgeBox(2.7, 1.72, 2.12));

      const roofPts = [
        [-1.35,.86,-1.06],[0,1.72,-1.06], [0,1.72,-1.06],[1.35,.86,-1.06],
        [-1.35,.86,1.06],[0,1.72,1.06], [0,1.72,1.06],[1.35,.86,1.06],
        [0,1.72,-1.06],[0,1.72,1.06]
      ].map((p) => new THREE.Vector3(...p));
      house.add(new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(roofPts), lineMaterial));

      const door = edgeBox(.58, 1.08, .035, softLineMaterial);
      door.position.set(-.62, -.28, 1.075);
      house.add(door);

      const lamp = new THREE.Mesh(
        new THREE.SphereGeometry(.13, 24, 24),
        new THREE.MeshStandardMaterial({ color: accent, emissive: accent, emissiveIntensity: 1.4, roughness: .5 })
      );
      lamp.position.set(.62, .12, .42);
      house.add(lamp);
      root.add(house);

      // VINYL / Groove Card
      const vinylGroup = new THREE.Group();
      vinylGroup.position.set(1.75, -.62, .75);
      vinylGroup.rotation.set(-.7, .18, -.15);

      const record = new THREE.Mesh(
        new THREE.CylinderGeometry(.82, .82, .085, 80),
        new THREE.MeshStandardMaterial({ color: ink, roughness: .28, metalness: .18 })
      );
      record.rotation.x = Math.PI / 2;
      vinylGroup.add(record);

      const recordLabel = new THREE.Mesh(
        new THREE.CylinderGeometry(.22, .22, .092, 42),
        new THREE.MeshStandardMaterial({ color: accent, roughness: .8 })
      );
      recordLabel.rotation.x = Math.PI / 2;
      recordLabel.position.z = .012;
      vinylGroup.add(recordLabel);

      const tonearm = new THREE.Mesh(
        new THREE.BoxGeometry(.06, .06, 1.02),
        new THREE.MeshStandardMaterial({ color: 0xc9c1b5, roughness: .35, metalness: .45 })
      );
      tonearm.position.set(.73, .14, .13);
      tonearm.rotation.y = -.55;
      vinylGroup.add(tonearm);
      root.add(vinylGroup);

      // CODE PANELS
      const codeGroup = new THREE.Group();
      codeGroup.position.set(1.35, 1.02, -1.18);
      codeGroup.rotation.set(-.05, -.34, .03);

      const makePanel = (w, h, faceColor, barColor) => {
        const group = new THREE.Group();
        const face = new THREE.Mesh(
          new THREE.PlaneGeometry(w, h),
          new THREE.MeshStandardMaterial({ color: faceColor, roughness: .95, side: THREE.DoubleSide })
        );
        group.add(face);
        const border = new THREE.LineSegments(
          new THREE.EdgesGeometry(new THREE.PlaneGeometry(w, h)),
          new THREE.LineBasicMaterial({ color: ink })
        );
        border.position.z = .006;
        group.add(border);

        [.72,.47,.82,.58].forEach((ratio, index) => {
          const bar = new THREE.Mesh(
            new THREE.BoxGeometry(w * ratio, .045, .018),
            new THREE.MeshBasicMaterial({ color: barColor })
          );
          bar.position.set(-w * (1-ratio) * .36, h * .27 - index * .17, .02);
          group.add(bar);
        });
        return group;
      };

      const panelA = makePanel(1.5, 1.08, 0xf4f0e7, blue);
      codeGroup.add(panelA);
      const panelB = makePanel(1.08, .76, 0xd9d3c8, green);
      panelB.position.set(.62, -.63, -.3);
      panelB.rotation.y = -.18;
      codeGroup.add(panelB);
      root.add(codeGroup);

      // small physical objects
      const orangePebble = new THREE.Mesh(
        new THREE.IcosahedronGeometry(.18, 0),
        new THREE.MeshStandardMaterial({ color: accent, roughness: .8 })
      );
      orangePebble.position.set(-2.15, .85, .95);
      root.add(orangePebble);

      const blueCube = new THREE.Mesh(
        new THREE.BoxGeometry(.3, .3, .3),
        new THREE.MeshStandardMaterial({ color: blue, roughness: .72 })
      );
      blueCube.position.set(.12, 1.95, .2);
      blueCube.rotation.set(.5,.7,.2);
      root.add(blueCube);

      const ring = new THREE.Mesh(
        new THREE.TorusGeometry(.34, .055, 18, 64),
        new THREE.MeshStandardMaterial({ color: green, roughness: .7 })
      );
      ring.position.set(-2.2, -.25, -1.25);
      ring.rotation.set(.9,.2,.5);
      root.add(ring);

      let targetX = -.08;
      let targetY = -.22;
      let kick = 0;
      let last = performance.now();

      const resize = () => {
        const rect = stage.getBoundingClientRect();
        const width = Math.max(320, rect.width);
        const height = Math.max(420, rect.height);
        renderer.setSize(width, height, false);
        canvas.style.width = '100%';
        canvas.style.height = '100%';
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      };

      const pointerMove = (event) => {
        const rect = stage.getBoundingClientRect();
        const px = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const py = ((event.clientY - rect.top) / rect.height) * 2 - 1;
        targetY = -.22 + px * .28;
        targetX = -.08 - py * .12;
        if (reduceMotion) renderer.render(scene, camera);
      };

      stage.addEventListener('pointermove', pointerMove, { passive: true });
      stage.addEventListener('pointerleave', () => { targetX = -.08; targetY = -.22; });
      stage.addEventListener('click', () => { if (!reduceMotion) kick += .34; });

      const observer = new ResizeObserver(resize);
      observer.observe(stage);
      window.addEventListener('resize', resize, { passive: true });

      stage.dataset.webgl = 'ready';
      if (status) status.innerHTML = '<i></i> live';
      resize();

      const animate = (now) => {
        const dt = Math.min((now - last) / 1000, .05);
        last = now;

        root.rotation.x += (targetX - root.rotation.x) * .055;
        root.rotation.y += (targetY - root.rotation.y) * .055;
        root.rotation.y += kick * dt;
        kick *= .95;

        record.rotation.z -= dt * .48;
        orangePebble.rotation.x += dt * .34;
        orangePebble.rotation.y += dt * .22;
        blueCube.rotation.x += dt * .22;
        blueCube.rotation.y += dt * .29;
        ring.rotation.z += dt * .17;
        codeGroup.position.y = 1.02 + Math.sin(now * .0014) * .045;
        lamp.scale.setScalar(1 + Math.sin(now * .0022) * .08);

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      };

      if (!reduceMotion) requestAnimationFrame(animate);
    } catch (error) {
      fail(error);
    }
  })();
}