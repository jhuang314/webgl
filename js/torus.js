$(function () {
    var gui = new dat.GUI({
	height: 5 * 32 - 1
    });
    var params = {
	xspeed: 0.0
	, yspeed: 0.0
	, xscale: 1
	, yscale: 1
	, zscale: 1
    };
    
    gui.add(params, 'xspeed').min(-0.4).max(0.4).step(0.01);
    gui.add(params, 'yspeed').min(-0.4).max(0.4).step(0.01);
    gui.add(params, 'xscale').min(0.1).max(3).step(0.01);
    gui.add(params, 'yscale').min(0.1).max(3).step(0.01);
    gui.add(params, 'zscale').min(0.1).max(3).step(0.01);
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer;
    try {
	renderer = new THREE.WebGLRenderer();	
    }
    catch(e) {
	renderer = new THREE.CanvasRenderer();		
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    //add the torus
    var geometry = new THREE.TorusGeometry(3,0.3,64, 64, THREE.PI);
    
    
    var material = new THREE.MeshPhongMaterial({
	color: 0x00ff00
    });
    var torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    camera.position.z = 5;
    
    // add lights
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(50, 50, 50);
    scene.add(light);
    
    function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
	
	//torus.rotation.y += 0.1;
	torus.rotation.x += params.xspeed;
	torus.rotation.y += params.yspeed;
	
	torus.scale.x = params.xscale;
	torus.scale.y = params.yscale;
	torus.scale.z = params.zscale;
    }
    render();
    
    
    
});
