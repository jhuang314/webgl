$(function () {
    var gui = new dat.GUI({
	height: 5 * 32 - 1
    });
    var params = {
	xrot: 0.0
	, yrot: 0.0
	, xscale: 1
	, yscale: 1
	, zscale: 1
    };
    
    gui.add(params, 'xrot').min(-3).max(3).step(0.01);
    gui.add(params, 'yrot').min(-3).max(3).step(0.01);
    gui.add(params, 'xscale').min(0.1).max(3).step(0.01);
    gui.add(params, 'yscale').min(0.1).max(3).step(0.01);
    gui.add(params, 'zscale').min(0.1).max(3).step(0.01);
    
    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer;
    try {
	renderer = new THREE.WebGLRenderer();	
    }
    catch(e) {
	renderer = new THREE.CanvasRenderer();		
    }

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    
    var loader = new THREE.OBJLoader();
    loader.addEventListener( 'load', function ( event ) {
	
	scene.add( event.content );
	
    });
    var cow;
    loader.load("cow.obj", function(object) {
	scene.add(object);
	cow = object;
    });
    
    camera.position.z = 15;
    
    // add lights
    var light = new THREE.PointLight(0xffffff, 1, 0);
    light.position.set(50, 50, 50);
    scene.add(light);
    
    function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
	
	if (cow) {
	    cow.rotation.x = params.xrot;
	    cow.rotation.y = params.yrot;
	    cow.scale.x = params.xscale;
	    cow.scale.y = params.yscale;
	    cow.scale.z = params.zscale;
	}
	
    }
    render();
    
    
    
});
