$(function() {
	var WIDTH = 400
	, HEIGHT = 300;

	// set some camera attribs
	var VIEW_ANGLE = 45
	, ASPECT = WIDTH / HEIGHT
	, NEAR = 0.1
	, FAR = 10000;

	var $container = $('#container');

	var renderer = new THREE.WebGLRenderer();
	var camera = 
	new THREE.PerspectiveCamera(
	    VIEW_ANGLE,
	    ASPECT,
	    NEAR,
	    FAR);

	var scene = new THREE.Scene();

	scene.add(camera);

	camera.position.z = 300;

	renderer.setSize(WIDTH, HEIGHT);
	$container.append(renderer.domElement);


	// add stuff to look at :)
	var radius = 100
	    , segments = 32
	    , rings = 32
	    , sphereMaterial = 
	    new THREE.MeshLambertMaterial({
		color: 0xCC0000
	    });
	var sphere = new THREE.Mesh(
	new THREE.SphereGeometry(
	    radius, 
	    segments,
	    rings),
	sphereMaterial);

	scene.add(sphere);

var pointLight = 
new THREE.PointLight(0xFFFFFF);

pointLight.position.x = 10;
pointLight.position.y = 50;
pointLight.position.z = 130;

scene.add(pointLight);


renderer.render(scene, camera);
});
