$(function () {
    var gui = new dat.GUI({
	height: 5 * 32 - 1
    });
    var params = {
	xspeed: 0.0
	, yspeed: 0.0
    };

    gui.add(params, 'xspeed').min(-0.4).max(0.4).step(0.01);
    gui.add(params, 'yspeed').min(-0.4).max(0.4).step(0.01);

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    //add the torus
    var geometry = new THREE.TorusGeometry(3,0.3,64, 64, THREE.PI);


    var material = new THREE.MeshBasicMaterial({
	color: 0x00ff00
    });
    var torus = new THREE.Mesh(geometry, material);
    scene.add(torus);
    camera.position.z = 5;

    function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);

	//torus.rotation.y += 0.1;
	torus.rotation.x += params.xspeed;
	torus.rotation.y += params.yspeed;

    }
    render();
    


});
