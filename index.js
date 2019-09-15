/* global describe WFC WFCTool2D WFCTool3D THREE*/

var tilesets = {
circuit_simple: function(tool){
  
tool.addTile(`\
@@@
@@@
@@@`,{weight:5})

tool.addTile(`\
...
...
...`)

tool.addTile(`\
@..
@-=
@..`)
  
tool.addTile(`\
@..
...
...`)

tool.addTile(`\
...
===
...`)
  
tool.addTile(`\
.-.
===
.-.`)
  

tool.addTile(`\
...
=--
...`)
  
tool.addTile(`\
.=.
.==
.=.`)
  
tool.addTile(`\
.=.
.==
...`)

tool.addColor("@", [55,45,45])
tool.addColor(".", [30,100,20])
tool.addColor("-", [180,170,170])
tool.addColor("=", [125,145,25])
  
},

circuit: function(tool){

tool.addTile(`\
@@@@@@@@
@@@@@@@@
@@@@@@@@
@@@@@@@@
@@@@@@@@
@@@@@@@@
@@@@@@@@
@@@@@@@@`,{weight:10})

tool.addTile(`\
........
........
........
........
........
........
........
........`)

tool.addTile(`\
........
..####..
.#----##
.#----#=
.#----#=
.#----##
..####..
........`)
  
tool.addTile(`\
@#......
@###....
@#-#####
@#-#-#==
@#-#-#==
@#-#####
@###....
@#......`)
  
tool.addTile(`\
@#......
##......
........
........
........
........
........
........`)

tool.addTile(`\
........
........
########
========
========
########
........
........`)
  
tool.addTile(`\
..#--#..
..#--#..
###--###
==#--#==
==#--#==
###--###
..#--#..
..#--#..`)
  

tool.addTile(`\
........
..####..
##---###
=#------
=#------
##---###
..####..
........`)
  
tool.addTile(`\
..#==#..
..#==#..
..#==###
..#=====
..#=====
..#==###
..#==#..
..#==#..`)
  
tool.addTile(`\
..#==#..
...#==#.
#...#==#
=#...#==
==#...#=
#==#...#
.#==#...
..#==#..`)
  
tool.addTile(`\
..#==#..
...#==#.
....#==#
.....#==
......#=
.......#
........
........`)

tool.addColor("@", [55,45,45])
tool.addColor(".", [30,100,20])
tool.addColor("-", [180,170,170])
tool.addColor("=", [125,145,25])
tool.addColor("#", [10,10,30])

},
  
floor_plan: function(tool){


tool.addTile(`\
.........
.........
.........
.........
.........
.........
.........
.........
.........`,{weight:2})
  
tool.addTile(`\
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@`,)

tool.addTile(`\
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
#########
#########
#########
.........
.........
.........`)
  
tool.addTile(`\
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
@@@######
@@@######
@@@######
@@@###...
@@@###...
@@@###...`)
  
tool.addTile(`\
.........
.........
.........
...######
...######
...######
...###@@@
...###@@@
...###@@@`)
  
tool.addTile(`\
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
#########
#########
#########
....#....
....#....
....#....`)
  

tool.addTile(`\
....#....
....#....
....#....
....#....
....#....
....#....
....#....
....#....
....#....`)
  
tool.addTile(`\
.........
.........
.........
.........
....#####
....#....
....#....
....#....
....#....`)
  
tool.addTile(`\
....#....
....#....
....#....
....#....
....#####
....#....
....#....
....#....
....#....`)
  
tool.addTile(`\
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
####=====
#########
####=====
.........
.........
.........`)
  
  
tool.addTile(`\
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
=====####
#########
=====####
.........
.........
.........`)
  
tool.addTile(`\
@@@@@@@@@
@@@@@@@@@
@@@@@@@@@
=========
#########
=========
.........
.........
.........`)
  
  
tool.addTile(`\
@@@@@@@@@
@#==@@@@@
@#..=@@@@
##...=###
##....###
##....###
.........
.........
.........`)
  
tool.addTile(`\
@@@@@@@@@
@#==@==#@
@#..=..#@
##..=..##
##.....##
##.....##
.........
.........
.........`)
  
tool.addTile(`\
....#....
....#....
....===..
.......=.
.......=.
....####.
....#....
....#....
....#....`)
  

tool.addTile(`\
.........
.#######.
.##...##.
.#.#.#.#.
.#..#..#.
.#.#.#.#.
.##...##.
.#######.
.........`)


tool.addTile(`\
.........
.........
...###...
..#...#..
..#...#..
..#...#..
...###...
.........
.........`,{weight:0.2})
  
  
tool.addTile(`\
....#....
....#####
....#....
....#####
....#....
....#####
....#....
....#####
....#....`)
  
  
tool.addColor(".", [210,210,190])
tool.addColor("#", [20,20,30])
tool.addColor("=", [140,140,140])
tool.addColor("@", [240,240,235])

},
  
  
noodle: function(tool){

tool.addTile(`\
.......
#######
=======
-------
=======
#######
.......`)

tool.addTile(`\
.......
#######
+++++++
~~~~~~~
+++++++
#######
.......`)
  
tool.addTile(`\
.......
#######
@@@@@@@
;;;;;;;
@@@@@@@
#######
.......`)
  
tool.addTile(`\
.#=-=#.
.#=-=##
.#=-===
.#=----
.#=====
.######
.......`)
  
tool.addTile(`\
.#+~+#.
.#+~+##
.#+~+++
.#+~~~~
.#+++++
.######
.......`)

tool.addTile(`\
.#@;@#.
.#@;@##
.#@;@@@
.#@;;;;
.#@@@@@
.######
.......`)
  
  
tool.addTile(`\
.#+~+#.
#######
=======
-------
=======
#######
.#+~+#.`)
  
  
tool.addTile(`\
.#=-=#.
#######
+++++++
~~~~~~~
+++++++
#######
.#=-=#.`)

tool.addTile(`\
.#=-=#.
#######
@@@@@@@
;;;;;;;
@@@@@@@
#######
.#=-=#.`)

tool.addTile(`\
.#@;@#.
#######
=======
-------
=======
#######
.#@;@#.`)
  
tool.addTile(`\
.#+~+#.
#######
@@@@@@@
;;;;;;;
@@@@@@@
#######
.#+~+#.`)

tool.addTile(`\
.#@;@#.
#######
+++++++
~~~~~~~
+++++++
#######
.#@;@#.`)
  

tool.addColor(".", [255,255,0])
tool.addColor("#", [50,50,50])
  
tool.addColor("-", [250,230,230])
tool.addColor("=", [250,200,200])
  
tool.addColor("~", [230,250,230])
tool.addColor("+", [200,250,200])
  
tool.addColor(";", [230,230,250])
tool.addColor("@", [200,200,250])


},
  
noodle3d: function(tool){
  
tool.addTile([`\
___
_@_
___`
,`\
___
_@_
___`
,`\
___
_@_
___`
],{transforms:['rx','rz']})

tool.addTile([`\
___
_#_
___`
,`\
___
_#_
___`
,`\
___
_#_
___`
],{transforms:['rx','rz']})

tool.addTile([`\
___
_@_
___`
,`\
___
_@@
___`
,`\
___
___
___`
])

tool.addTile([`\
___
_#_
___`
,`\
___
_##
___`
,`\
___
___
___`
])

tool.addMaterial("@", new THREE.MeshLambertMaterial( { color: 0xffffff } ));
tool.addMaterial("#", new THREE.MeshLambertMaterial( { color: 0xff4444 } ));  

},

}

var worker;
var canvas;
var scene;
var camera;
var renderer;
var root;

function wfcDemo2D(tilesetName){
  
  if (worker){
    worker.terminate();
  }
  
  var tool = new WFCTool2D();
  
  tilesets[tilesetName](tool);
  
  var viewport;
  var wave;

  var workerCode = function(){
    var viewport;
    var wfc;
    var aspectRatio;
    var size;
    var increment;
    var multiply;

    console.log("connect")

    onmessage = function(e) {
      console.log(e)
      if (e.data.op == "init"){
        wfc = new WFC(e.data.wfcInput);
        aspectRatio = e.data.aspectRatio;
        size = e.data.initialSize;
        increment = e.data.increment;
        multiply = e.data.multiply
        main();
      }
    }

    function main(){
      setTimeout(main,1);
      if (!wfc){
        return
      }
      if (wfc.step()){
        viewport = {x:-size,y:-Math.round(size*aspectRatio),w:size*2,h:Math.round(size*2*aspectRatio)}
        wfc.expand([viewport.y,viewport.x],[viewport.y+viewport.h,viewport.x+viewport.w]);
        size=Math.ceil((size+increment)*multiply);
      }
      postMessage({viewport,wave:wfc.readout(/*false*/)})
    }
  }

  console.log(tool.getTileFormulae())
  
  worker =new Worker(URL.createObjectURL(new Blob(["var WFC="+WFC.toString()+';('+workerCode.toString()+')()'])));// new Worker('worker.js');

  worker.postMessage({
    op:'init',
    wfcInput:tool.generateWFCInput(),
    aspectRatio:window.innerHeight/window.innerWidth,
    initialSize:8,
    increment:0,
    multiply:1.5,
  })

  worker.onmessage = function(e){
    viewport = e.data.viewport;
    wave = e.data.wave;
  }

  if (renderer){
    renderer.domElement.style.display="none";
  }
  
  if (!canvas){
    canvas = document.createElement("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "absolute";
    canvas.style.left = "0px";
    canvas.style.top = "0px";
    document.body.appendChild(canvas);
  }else{
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0,0,canvas.width,canvas.height);
  }
  
  canvas.style.display="block";

  function main(){
    requestAnimationFrame(main)
    // tool.clearPlotCache();
    if (viewport && wave){
      tool.plotWFCOutput(canvas,viewport,wave)
    }
  }
  main();
}


function wfcDemo3D(tilesetName){
  if (worker){
    worker.terminate();
  }
  
  var tool = new WFCTool3D();
  tilesets[tilesetName](tool);
  
  var wave;
  
  if (canvas){
    canvas.style.display="none";
  }
  
  if (!scene){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    camera.position.set(10,8,10);
    camera.lookAt(0,0,0);
    renderer = new THREE.WebGLRenderer();
    
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    renderer.domElement.style.position = "absolute";
    renderer.domElement.style.left = "0px";
    renderer.domElement.style.top = "0px";
    
    document.body.appendChild( renderer.domElement );
    
    var light = new THREE.DirectionalLight( 0xffffff, 1 );
    light.position.set(10,15,5);
    light.castShadow = true;
    
    scene.add( light );
    scene.add( new THREE.AmbientLight( 0xffffff, 0.3 ) );

    root = new THREE.Object3D();
    
    scene.add(root);
    
  }else{
    while (root.children.length){
      root.children.pop();
    }
  }
  renderer.domElement.style.display="block";

  
  var workerCode = function(){
    var wfc;
    var size;
    var increment;
    var multiply;

    console.log("connect")

    onmessage = function(e) {
      console.log(e)
      if (e.data.op == "init"){
        wfc = new WFC(e.data.wfcInput);
        size = e.data.initialSize;
        increment = e.data.increment;
        multiply = e.data.multiply
        main();
      }
    }

    function main(){
      setTimeout(main,1);
      if (!wfc){
        return
      }
      if (wfc.step()){
        wfc.expand([-size,-size,-size],[size,size,size]);
        size=Math.ceil((size+increment)*multiply);
      }
      postMessage({wave:wfc.readout()})
    }
  }
  
  console.log(tool.getTileFormulae())
  
  worker =new Worker(URL.createObjectURL(new Blob(["var WFC="+WFC.toString()+';('+workerCode.toString()+')()'])));// new Worker('worker.js');

  worker.postMessage({
    op:'init',
    wfcInput:tool.generateWFCInput(),
    initialSize:5,
    increment:0,
    multiply:1.5,
  })

  worker.onmessage = function(e){
    wave = e.data.wave;
  }
  
  var frame = 0;
  var done = false;

  function main(){
    requestAnimationFrame(main)
    if (wave){
      tool.plotWFCOutput(root,wave);
      root.rotation.setFromVector3(new THREE.Vector3(0,frame*0.01,0))
    }
    renderer.render( scene, camera );
    frame++;
  }
  main();

}

var menubar = document.createElement("div");
var title = document.createElement("span"); menubar.appendChild(title);
title.innerHTML = "<b>NDWFC:</b> <i>N-dimensional Wave Function Collapse with infinite canvas</i>"
// title.style.border="1px solid white"
title.style.display="inline-block";
title.style.marginTop="4px";
menubar.style.zIndex="1000"
menubar.style.position="absolute";
menubar.style.left="0px";
menubar.style.top="0px";
menubar.style.background="rgba(0,0,0,0.6)"
menubar.style.color="white";
menubar.style.padding="10px"
menubar.style.fontFamily="sans-serif";
menubar.style.width=window.innerWidth+"px";
menubar.style.fontSize="20px"

var selbox = document.createElement("span"); menubar.appendChild(selbox);
selbox.innerHTML = "Tileset = "
selbox.style.marginRight="30px";
selbox.style.float="right";
// selbox.style.border="1px solid rgba(255,255,255,0.8)";
selbox.style.padding="5px";
selbox.style.fontSize="16px"

var select = document.createElement("select");
for (var k in tilesets){
  var option = document.createElement("option");
  option.value = k;
  option.innerHTML = k;
  select.appendChild(option);
}
// select.style.position="absolute";
// select.style.left="20px";
// select.style.top="20px";
select.style.background="rgba(0,0,0,0)";
select.style.color="white"
select.style.fontSize="16px"
select.onchange = function(){
  if (select.value.includes("3d")){
    wfcDemo3D(select.value);
  }else{
    wfcDemo2D(select.value);
  }
}

selbox.appendChild(select);


document.body.appendChild(menubar)

select.value="noodle"
wfcDemo2D('noodle');