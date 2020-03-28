var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 50, 1000);
var renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setClearColor('#28004D');
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);
document.body.appendChild(renderer.domElement);
//光线-----------------------------------------------------------------
var light;
function initLight(){
  light = new THREE.DirectionalLight(0xff00ff,1.0,0);
  light.position.set(0,0,-300);
  scene.add(light);
  renderer.render(scene, camera);

}

/*var pointColor ="#FFF8D7";
var pointLight = new THREE.PointLight(pointColor);
pointLight.distance=100;
pointLight.intensity = 1;
pointLight.position.set(200,200,-300);

  scene.add(pointLight);*/
//地球----------------------------------------------------------------
var earthqiu = new THREE.SphereGeometry(35,15,15);
//var material = new THREE.MeshBasicMaterial({
    //color: "#ff00ff"});
var texture = new THREE.TextureLoader().load('./Earth/DQD.jpg');
var material = new THREE.MeshBasicMaterial({
   map:texture});

var mesh = new THREE.Mesh(earthqiu, material);
mesh.position.z = -300;

scene.add( mesh );
//地球自转-------------------------------------------------------------

//月球----------------------------------------------------------------
var moon = new THREE.SphereGeometry(13,15,15);
var texture2 = new THREE.TextureLoader().load('./Earth/YQ.jpg');
var material2 = new THREE.MeshBasicMaterial({
   map:texture});

var mesh2 = new THREE.Mesh(moon, material2);
mesh2.position.z= -300;
mesh2.position.x= 40;
scene.add( mesh2 );
var angle = 0;
//月球公转----------------------------------------------------------------
function animate() {
  mesh.rotation.y += 0.025;

  angle += 0.01;
  var x = 300*Math.sin(angle)
  var z = 300*Math.cos(angle)-600
  mesh2.position.set(x,0,z);
}

function render() {
requestAnimationFrame(render);
animate();
renderer.render(scene, camera);
}
render();
