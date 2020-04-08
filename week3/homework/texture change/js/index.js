var container, stats;
var camera, scene, raycaster, renderer;

var mouse = new THREE.Vector2(), INTERSECTED;

var object;

var objects = [];

init();
render();
//animate();

function init() {
  container = document.createElement( 'div' );
  document.body.appendChild( container );

  camera = new THREE.PerspectiveCamera( 100, window.innerWidth / window.innerHeight, 1, 10000 );

  scene = new THREE.Scene();
  scene.background = new THREE.Color( 0xf0f0f0 );

  var light = new THREE.DirectionalLight( 0xffffff, 1 );
  light.position.set( -3, 3, 20 ).normalize();
  scene.add( light );
  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio( window.devicePixelRatio );
  renderer.setSize( window.innerWidth, window.innerHeight );
  container.appendChild( renderer.domElement );
}

  //var geometry = new THREE.BoxBufferGeometry( 20, 20, 20 );

  //for (var i=0; i<1; i++){

  function gunskin1(){
      var mtlLoader = new THREE.MTLLoader();
      	mtlLoader.load("gun.mtl", function(materials){
      		materials.preload();

      var objLoader = new THREE.OBJLoader();
      objLoader.setMaterials(materials);

        objLoader.load("gun.obj", function(mesh){
          mesh.traverse(function(node){
            if( node instanceof THREE.Mesh ){
              node.castShadow = true;
              node.receiveShadow = true;
            }
          });
          mesh.position.set(0,0,-500);
          mesh.rotation.y = -30;

          scene.add(mesh);
          objects.push(mesh);
        });
      });

    }
    function gunskin2(){
        var mtlLoader = new THREE.MTLLoader();
        	mtlLoader.load("Ggun.mtl", function(materials){
        		materials.preload();

        var objLoader = new THREE.OBJLoader();
        objLoader.setMaterials(materials);

          objLoader.load("gun.obj", function(mesh){
            mesh.traverse(function(node){
              if( node instanceof THREE.Mesh ){
                node.castShadow = true;
                node.receiveShadow = true;
              }
            });
            mesh.position.set(0,0,-500);
            mesh.rotation.y = -30;

            scene.add(mesh);
            objects.push(mesh);
          });
        });

      }
      function gunskin3(){
          var mtlLoader = new THREE.MTLLoader();
          	mtlLoader.load("Dgun.mtl", function(materials){
          		materials.preload();

          var objLoader = new THREE.OBJLoader();
          objLoader.setMaterials(materials);

            objLoader.load("gun.obj", function(mesh){
              mesh.traverse(function(node){
                if( node instanceof THREE.Mesh ){
                  node.castShadow = true;
                  node.receiveShadow = true;
                }
              });
              mesh.position.set(0,0,-500);
              mesh.rotation.y = -30;

              scene.add(mesh);
              objects.push(mesh);
            });
          });

        }




//}
//raycaster = new THREE.Raycaster();


//document.addEventListener( 'mousemove', onDocumentMouseMove, false );
    //document.addEventListener( 'mousedown', onDocumentMouseDown, false );
  //window.addEventListener( 'resize', onWindowResize, false );


/*function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize( window.innerWidth, window.innerHeight );
}*/

/*function onDocumentMouseMove( event ) {
  event.preventDefault();
  mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
  mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
}*/

/*function onDocumentMouseDown( event ) {
  var intersects = raycaster.intersectObjects( objects, true);
  if(intersects.length > 0){
    intersects[0].object.material.color.set(Math.random()*0xffffff);
  }
}/*

/*function animate() {
  requestAnimationFrame( animate );

  render();

}*/

function render() {
  document.getElementById("threejs-texture1").addEventListener('click',gunskin1);
    document.getElementById("threejs-texture2").addEventListener('click',gunskin2);
      document.getElementById("threejs-texture3").addEventListener('click',gunskin3);
   requestAnimationFrame(render);


  //raycaster.setFromCamera( mouse, camera );
  renderer.render( scene, camera );
}
