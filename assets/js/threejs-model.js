// Three.js FBX Model Loader
// This script loads and displays the FBX 3D model with interactive controls

(function() {
  'use strict';

    // Check if Three.js is loaded
  if (typeof THREE === 'undefined') {
    console.error('Three.js library not loaded');
    const errorMsg = document.getElementById('error-message');
    const loadingInd = document.getElementById('loading-indicator');
    if (errorMsg) errorMsg.style.display = 'block';
    if (loadingInd) loadingInd.style.display = 'none';
    return;
  }

  // Initialize variables
  let scene, camera, renderer, controls, model;
  let isDragging = false;
  let previousMousePosition = { x: 0, y: 0 };
  let autoRotate = true;
  let rotationSpeed = 0.005;

  // Initialize Three.js scene
  function init() {
    const canvas = document.getElementById('threejs-canvas');
    if (!canvas) {
      console.error('Canvas element not found');
      return;
    }

    // Create scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf5f5f5);

    // Create camera
    const aspect = canvas.clientWidth / canvas.clientHeight;
    camera = new THREE.PerspectiveCamera(50, aspect, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Create renderer
    renderer = new THREE.WebGLRenderer({ 
      canvas: canvas,
      antialias: true,
      alpha: true
    });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    // Add lights - better lighting for residential building
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight1 = new THREE.DirectionalLight(0xffffff, 0.9);
    directionalLight1.position.set(10, 15, 10);
    directionalLight1.castShadow = true;
    scene.add(directionalLight1);

    const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight2.position.set(-10, 10, -10);
    scene.add(directionalLight2);

    // Add a subtle fill light from below
    const fillLight = new THREE.DirectionalLight(0xffffff, 0.3);
    fillLight.position.set(0, -5, 0);
    scene.add(fillLight);

    // Load FBX model
    loadFBXModel();

    // Add event listeners for interaction
    setupEventListeners();

    // Handle window resize
    window.addEventListener('resize', onWindowResize);

    // Start animation loop
    animate();
  }

  // Load 3D model - Try OBJ first (more web-friendly), then FBX as fallback
  function loadFBXModel() {
    console.log('Checking available loaders...');
    console.log('OBJLoader available:', typeof THREE.OBJLoader !== 'undefined');
    console.log('MTLLoader available:', typeof THREE.MTLLoader !== 'undefined');
    console.log('FBXLoader available:', typeof THREE.FBXLoader !== 'undefined');
    
    // Try OBJ loader first (better web support)
    if (typeof THREE.OBJLoader !== 'undefined' && typeof THREE.MTLLoader !== 'undefined') {
      console.log('Using OBJ loader');
      loadOBJModel();
      return;
    }
    
    // Fallback to FBX if OBJ loader not available
    if (typeof THREE.FBXLoader !== 'undefined') {
      console.log('Using FBX loader');
      loadFBXFile();
      return;
    }
    
    // If no loaders available, use fallback
    console.error('No 3D model loaders available. Using fallback model.');
    const loadingInd = document.getElementById('loading-indicator');
    if (loadingInd) loadingInd.style.display = 'none';
    createFallbackModel();
  }

  // Load OBJ model with MTL materials
  function loadOBJModel() {
    console.log('Attempting to load OBJ model...');
    
    const mtlLoader = new THREE.MTLLoader();
    // Set base path for textures referenced in MTL file
    mtlLoader.setPath('assets/img/');
    
    const objLoader = new THREE.OBJLoader();
    
    const mtlPath = 'Modern House_05_obj.mtl';
    const objPath = 'assets/img/Modern House_05_obj.obj';

    console.log('Loading MTL from:', mtlPath);
    
    // Load material first, then model
    mtlLoader.load(
      mtlPath,
      // onLoad callback
      (materials) => {
        console.log('MTL materials loaded successfully');
        materials.preload();
        objLoader.setMaterials(materials);
        
        console.log('Loading OBJ from:', objPath);
        
        // Load OBJ model
        objLoader.load(
          objPath,
          // onLoad callback
          (object) => {
            const loadingInd = document.getElementById('loading-indicator');
            if (loadingInd) loadingInd.style.display = 'none';

            // Add model to scene
            model = object;
            
            // Scale and position the model - center it properly
            const box = new THREE.Box3().setFromObject(model);
            const center = box.getCenter(new THREE.Vector3());
            const size = box.getSize(new THREE.Vector3());
            
            // Calculate scale to fit in view (make it larger for better view)
            const maxDim = Math.max(size.x, size.y, size.z);
            const scale = 6 / maxDim;
            model.scale.multiplyScalar(scale);
            
            // Center the model at origin (0, 0, 0)
            model.position.x = -center.x * scale;
            model.position.y = -center.y * scale;
            model.position.z = -center.z * scale;
            
            // Update camera to look at the centered model
            camera.position.set(0, size.y * scale * 0.3, size.z * scale * 1.5);
            camera.lookAt(0, 0, 0);

            // Enable shadows and improve materials
            model.traverse((child) => {
              if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
                
                // Improve material appearance
                if (child.material) {
                  if (Array.isArray(child.material)) {
                    child.material.forEach(mat => {
                      if (mat) mat.needsUpdate = true;
                    });
                  } else {
                    child.material.needsUpdate = true;
                  }
                }
              }
            });

            scene.add(model);
            console.log('OBJ model loaded successfully');
          },
          // onProgress callback
          (xhr) => {
            if (xhr.lengthComputable) {
              const percentComplete = (xhr.loaded / xhr.total) * 100;
              console.log('OBJ model loading: ' + Math.round(percentComplete) + '%');
            }
          },
          // onError callback
          (error) => {
            console.error('Error loading OBJ model:', error);
            console.error('Error details:', {
              message: error.message || 'Unknown error',
              target: error.target ? error.target.src : 'No target',
              type: error.type || 'No type'
            });
            // Try FBX as fallback
            loadFBXFile();
          }
        );
      },
      // onProgress callback for MTL
      (xhr) => {
        if (xhr.lengthComputable) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          console.log('MTL material loading: ' + Math.round(percentComplete) + '%');
        }
      },
      // onError callback for MTL
      (error) => {
        console.warn('Error loading MTL materials:', error);
        console.warn('Error details:', {
          message: error.message || 'Unknown error',
          target: error.target ? error.target.src : 'No target',
          type: error.type || 'No type'
        });
        // Load OBJ without materials
        loadOBJWithoutMaterials();
      }
    );
  }

  // Load OBJ without materials (fallback)
  function loadOBJWithoutMaterials() {
    console.log('Loading OBJ without materials...');
    const objLoader = new THREE.OBJLoader();
    const objPath = 'assets/img/Modern House_05_obj.obj';

    console.log('Loading OBJ from:', objPath);
    
    objLoader.load(
      objPath,
      (object) => {
        const loadingInd = document.getElementById('loading-indicator');
        if (loadingInd) loadingInd.style.display = 'none';

        model = object;
        
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 6 / maxDim;
        model.scale.multiplyScalar(scale);
        
        // Center the model at origin
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale;
        model.position.z = -center.z * scale;
        
        // Update camera
        camera.position.set(0, size.y * scale * 0.3, size.z * scale * 1.5);
        camera.lookAt(0, 0, 0);

        // Apply default material
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            if (!child.material || child.material.length === 0) {
              child.material = new THREE.MeshStandardMaterial({
                color: 0x8B7355,
                roughness: 0.7,
                metalness: 0.3
              });
            }
          }
        });

        scene.add(model);
        console.log('OBJ model loaded without materials');
      },
      undefined,
      (error) => {
        console.error('Error loading OBJ model:', error);
        loadFBXFile();
      }
    );
  }

  // Load FBX model (fallback)
  function loadFBXFile() {
    if (typeof THREE.FBXLoader === 'undefined') {
      console.error('FBXLoader not available. Using fallback model.');
      const loadingInd = document.getElementById('loading-indicator');
      if (loadingInd) loadingInd.style.display = 'none';
      createFallbackModel();
      return;
    }

    console.log('Attempting to load FBX model...');
    const loader = new THREE.FBXLoader();
    const modelPath = 'assets/img/Modern House_05_fbx.FBX';
    
    console.log('Loading FBX from:', modelPath);

    loader.load(
      modelPath,
      // onLoad callback
      (fbx) => {
        // Hide loading indicator
        const loadingInd = document.getElementById('loading-indicator');
        if (loadingInd) loadingInd.style.display = 'none';

        // Add model to scene
        model = fbx;
        
        // Scale and position the model - center it properly
        const box = new THREE.Box3().setFromObject(model);
        const center = box.getCenter(new THREE.Vector3());
        const size = box.getSize(new THREE.Vector3());
        
        // Calculate scale to fit in view
        const maxDim = Math.max(size.x, size.y, size.z);
        const scale = 6 / maxDim;
        model.scale.multiplyScalar(scale);
        
        // Center the model at origin (0, 0, 0)
        model.position.x = -center.x * scale;
        model.position.y = -center.y * scale;
        model.position.z = -center.z * scale;
        
        // Update camera to look at the centered model
        camera.position.set(0, size.y * scale * 0.3, size.z * scale * 1.5);
        camera.lookAt(0, 0, 0);

        // Enable shadows
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = true;
            child.receiveShadow = true;
            
            // Improve material appearance
            if (child.material) {
              if (Array.isArray(child.material)) {
                child.material.forEach(mat => {
                  if (mat) mat.needsUpdate = true;
                });
              } else {
                child.material.needsUpdate = true;
              }
            }
          }
        });

        scene.add(model);
        console.log('FBX model loaded successfully');
      },
      // onProgress callback
      (xhr) => {
        if (xhr.lengthComputable) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          console.log('Model loading: ' + Math.round(percentComplete) + '%');
        }
      },
      // onError callback
      (error) => {
        console.error('Error loading FBX model:', error);
        console.error('Error details:', {
          message: error.message || 'Unknown error',
          target: error.target ? error.target.src : 'No target',
          type: error.type || 'No type'
        });
        const loadingInd = document.getElementById('loading-indicator');
        const errorMsg = document.getElementById('error-message');
        if (loadingInd) loadingInd.style.display = 'none';
        if (errorMsg) {
          errorMsg.style.display = 'block';
          errorMsg.innerHTML = '<p>Gabim në ngarkimin e modelit. Po shfaqet pamje alternative.</p><p style="font-size: 0.8em; margin-top: 0.5rem;">Kontrolloni konsolën për detaje.</p>';
        }
        
        // Fallback: Show a simple placeholder
        createFallbackModel();
      }
    );
  }

  // Create a fallback model if FBX fails to load - simple residential building
  function createFallbackModel() {
    console.log('Creating fallback residential building model');
    
    // Create a simple house-like structure
    const group = new THREE.Group();
    
    // Main building body
    const bodyGeometry = new THREE.BoxGeometry(4, 3, 4);
    const bodyMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x8B7355,
      roughness: 0.7,
      metalness: 0.3
    });
    const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    body.position.y = 1.5;
    body.castShadow = true;
    group.add(body);
    
    // Roof
    const roofGeometry = new THREE.ConeGeometry(3.5, 1.5, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x654321,
      roughness: 0.8,
      metalness: 0.2
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 4.5;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    group.add(roof);
    
    // Windows
    const windowMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x87CEEB,
      emissive: 0x222222,
      roughness: 0.1,
      metalness: 0.9
    });
    
    const windowPositions = [
      { x: -2.1, y: 2, z: 0 },
      { x: 2.1, y: 2, z: 0 },
      { x: 0, y: 2, z: -2.1 },
      { x: 0, y: 2, z: 2.1 }
    ];
    
    windowPositions.forEach(pos => {
      const windowGeometry = new THREE.PlaneGeometry(0.8, 0.8);
      const window = new THREE.Mesh(windowGeometry, windowMaterial);
      window.position.set(pos.x, pos.y, pos.z);
      if (pos.x !== 0) window.rotation.y = Math.PI / 2;
      group.add(window);
    });
    
    // Door
    const doorGeometry = new THREE.PlaneGeometry(1, 2);
    const doorMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x4A4A4A,
      roughness: 0.6
    });
    const door = new THREE.Mesh(doorGeometry, doorMaterial);
    door.position.set(0, 1, 2.1);
    group.add(door);
    
    model = group;
    model.position.set(0, 0, 0); // Already centered
    model.castShadow = true;
    
    // Set camera position for fallback model
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);
    
    scene.add(model);
    console.log('Fallback residential building created');
  }

  // Setup event listeners for mouse/touch interaction
  function setupEventListeners() {
    const canvas = document.getElementById('threejs-canvas');

    // Mouse events
    canvas.addEventListener('mousedown', onMouseDown);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('mouseup', onMouseUp);
    canvas.addEventListener('wheel', onWheel);

    // Touch events for mobile
    canvas.addEventListener('touchstart', onTouchStart);
    canvas.addEventListener('touchmove', onTouchMove);
    canvas.addEventListener('touchend', onTouchEnd);
  }

  function onMouseDown(event) {
    isDragging = true;
    autoRotate = false;
    previousMousePosition = {
      x: event.clientX,
      y: event.clientY
    };
  }

  function onMouseMove(event) {
    if (!isDragging) return;

    const deltaX = event.clientX - previousMousePosition.x;
    // Only rotate on Y axis (horizontal rotation) - no tilting
    // deltaY is ignored to prevent X-axis rotation

    if (model) {
      model.rotation.y += deltaX * 0.01;
      // Lock X and Z rotation to keep building upright
      model.rotation.x = 0;
      model.rotation.z = 0;
    } else {
      // Rotate camera around the model (orbit)
      const angle = deltaX * 0.01;
      const radius = Math.sqrt(
        camera.position.x * camera.position.x + 
        camera.position.z * camera.position.z
      );
      const currentAngle = Math.atan2(camera.position.z, camera.position.x);
      camera.position.x = radius * Math.cos(currentAngle + angle);
      camera.position.z = radius * Math.sin(currentAngle + angle);
      camera.lookAt(0, 0, 0);
    }

    previousMousePosition = {
      x: event.clientX,
      y: event.clientY
    };
  }

  function onMouseUp() {
    isDragging = false;
    // Resume auto-rotation after a delay
    setTimeout(() => {
      if (!isDragging) {
        autoRotate = true;
      }
    }, 2000);
  }

  function onWheel(event) {
    event.preventDefault();
    const delta = event.deltaY * 0.01;
    
    // Zoom in/out by moving camera closer/farther from origin (model center)
    // Calculate current distance from origin
    const direction = new THREE.Vector3();
    camera.getWorldDirection(direction);
    const currentDistance = Math.sqrt(
      camera.position.x * camera.position.x + 
      camera.position.y * camera.position.y + 
      camera.position.z * camera.position.z
    );
    
    // Calculate new distance (zoom in/out)
    const newDistance = Math.max(3, Math.min(15, currentDistance + delta));
    
    // Normalize current position and scale to new distance
    const normalizedPos = new THREE.Vector3(
      camera.position.x / currentDistance,
      camera.position.y / currentDistance,
      camera.position.z / currentDistance
    );
    
    camera.position.set(
      normalizedPos.x * newDistance,
      normalizedPos.y * newDistance,
      normalizedPos.z * newDistance
    );
    
    // Always look at the model center
    camera.lookAt(0, 0, 0);
  }

  // Touch event handlers
  let touchStartDistance = 0;

  function onTouchStart(event) {
    if (event.touches.length === 1) {
      isDragging = true;
      autoRotate = false;
      previousMousePosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    } else if (event.touches.length === 2) {
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      touchStartDistance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
    }
  }

  function onTouchMove(event) {
    event.preventDefault();
    
    if (event.touches.length === 1 && isDragging) {
      const deltaX = event.touches[0].clientX - previousMousePosition.x;
      // Only rotate on Y axis - no tilting

      if (model) {
        model.rotation.y += deltaX * 0.01;
        // Lock X and Z rotation
        model.rotation.x = 0;
        model.rotation.z = 0;
      } else {
        // Rotate camera around model
        const angle = deltaX * 0.01;
        const radius = Math.sqrt(
          camera.position.x * camera.position.x + 
          camera.position.z * camera.position.z
        );
        const currentAngle = Math.atan2(camera.position.z, camera.position.x);
        camera.position.x = radius * Math.cos(currentAngle + angle);
        camera.position.z = radius * Math.sin(currentAngle + angle);
        camera.lookAt(0, 0, 0);
      }

      previousMousePosition = {
        x: event.touches[0].clientX,
        y: event.touches[0].clientY
      };
    } else if (event.touches.length === 2) {
      // Pinch to zoom
      const touch1 = event.touches[0];
      const touch2 = event.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      const scale = distance / touchStartDistance;
      
      // Zoom by adjusting distance from origin
      const currentDistance = Math.sqrt(
        camera.position.x * camera.position.x + 
        camera.position.y * camera.position.y + 
        camera.position.z * camera.position.z
      );
      const newDistance = Math.max(3, Math.min(15, currentDistance / scale));
      
      const normalizedPos = new THREE.Vector3(
        camera.position.x / currentDistance,
        camera.position.y / currentDistance,
        camera.position.z / currentDistance
      );
      
      camera.position.set(
        normalizedPos.x * newDistance,
        normalizedPos.y * newDistance,
        normalizedPos.z * newDistance
      );
      camera.lookAt(0, 0, 0);
      
      touchStartDistance = distance;
    }
  }

  function onTouchEnd() {
    isDragging = false;
    setTimeout(() => {
      if (!isDragging) {
        autoRotate = true;
      }
    }, 2000);
  }

  // Handle window resize
  function onWindowResize() {
    const canvas = document.getElementById('threejs-canvas');
    if (!canvas || !camera || !renderer) return;

    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  }

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);

    // Auto-rotate model only on Y axis (360 view)
    if (autoRotate && model && !isDragging) {
      model.rotation.y += rotationSpeed;
      // Ensure no tilting
      model.rotation.x = 0;
      model.rotation.z = 0;
    }

    // Render scene
    if (renderer && scene && camera) {
      renderer.render(scene, camera);
    }
  }

  // Wait for loaders to be available before initializing
  function waitForLoaders(callback, maxAttempts = 15, attempt = 0) {
    // Check if loaders are available
    const objLoaderAvailable = typeof THREE !== 'undefined' && typeof THREE.OBJLoader !== 'undefined';
    const mtlLoaderAvailable = typeof THREE !== 'undefined' && typeof THREE.MTLLoader !== 'undefined';
    const fbxLoaderAvailable = typeof THREE !== 'undefined' && typeof THREE.FBXLoader !== 'undefined';
    
    if (typeof THREE !== 'undefined' && (objLoaderAvailable || fbxLoaderAvailable)) {
      console.log('Loaders ready, initializing...');
      console.log('OBJLoader:', objLoaderAvailable, 'MTLLoader:', mtlLoaderAvailable, 'FBXLoader:', fbxLoaderAvailable);
      callback();
    } else if (attempt < maxAttempts) {
      if (attempt % 3 === 0) { // Log every 3rd attempt to reduce spam
        console.log(`Waiting for loaders... (attempt ${attempt + 1}/${maxAttempts})`);
      }
      setTimeout(() => waitForLoaders(callback, maxAttempts, attempt + 1), 300);
    } else {
      console.warn('Loaders failed to load after maximum attempts. Using fallback.');
      console.warn('THREE available:', typeof THREE !== 'undefined');
      console.warn('OBJLoader available:', objLoaderAvailable);
      console.warn('MTLLoader available:', mtlLoaderAvailable);
      console.warn('FBXLoader available:', fbxLoaderAvailable);
      // Try to initialize anyway - will use fallback model
      callback();
    }
  }

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      waitForLoaders(init);
    });
  } else {
    waitForLoaders(init);
  }
})();

