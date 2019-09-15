var WFCTool2D = function(){
  var tiles = []
  var colors = {}
  var weights = []
  var n_prototypes = 0
  var formulae = []
  
  
  var transformBank = {
    cw:function(m){
      var r = [];
      for (var i = 0; i < m.length; i++){
        r.push([])
        for (var j = m.length-1; j >= 0; j--){
          r[r.length-1].push(m[j][i]); 
        }
      }
      return r;
    },
    
    fx:function(m){
      var r = [];
      for (var i = 0; i < m.length; i++){
        r.push([])
        for (var j = m[0].length-1; j >= 0; j--){
          r[r.length-1].push(m[i][j]); 
        }
      }
      return r;
    },
    fy:function(m){
      var r = [];
      for (var i = m.length-1; i >= 0; i--){
        r.push([])
        for (var j = 0; j < m[i].length; j++){
          r[r.length-1].push(m[i][j]); 
        }
      }
      return r;
    }
  }
  
  
  function equal(m,r){
    for (var i = 0; i < m.length; i++){
      for (var j = 0; j < m[0].length; j++){
        if (m[i][j] != r[i][j]){
          return false;
        }
      }
    }
    return true;
  }
  
  function fit(d,a,b){
    if (d == "x"){
      for (var i = 0; i < a.length; i++){
        if (a[i][a[i].length-1] != b[i][0]){
          return false;
        }
      }
    }else if (d == "y"){
      for (var i = 0; i < a[0].length; i++){
        if (a[a.length-1][i] != b[0][i]){
          return false;
        }
      }
    }
    return true;
  }
  
  this.addTile = function(s,{transforms="auto",weight=1}={}){
    var t = s.split("\n").map(x=>x.split(""))
    tiles.push(t);
    formulae.push([ n_prototypes, '', t ])
    weights.push(weight)
    
    var tests = []
    
    if (transforms == "auto"){
      transforms = ['cw','cw+cw','cw+cw+cw']
    }
    
    for (var i = 0; i < transforms.length; i++){
      var tl = transforms[i].split("+")
      var tt = t
      for (var j = 0; j < tl.length; j++){
        tt = transformBank[tl[j]](tt);
      }
      tests.push(tt);
    }
    for (var i = 0; i < tests.length; i++){
      var ok = true;
      for (var j = 0; j < tiles.length; j++){
        if (equal(tests[i],tiles[j])){
          ok = false;
          break;
        }
      }
      if (ok){
        tiles.push(tests[i])
        weights.push(weight)
        formulae.push([ n_prototypes, transforms[i], tests[i] ])
      }
    }
    n_prototypes++;
  }
  
  this.addColor = function(symbol, color){
    colors[symbol] = color
  }
  
  this.getTileFormulae = function(){
    return formulae;
  }
  
  this.generateWFCInput = function(){
    var rules = []
    for (var i = 0; i < tiles.length; i++){
      for (var j = 0; j < tiles.length; j++){

        if (fit("x",tiles[i],tiles[j])){
          rules.push(['x',i,j])
        }
        if (fit("y",tiles[i],tiles[j])){
          rules.push(['y',i,j])
        }
      }
    }
    return {weights,rules,nd:2}
  }
  
  var viewportCached = {x:0,y:0,w:-1,h:-1};
  var waveCached = {};
  
  this.clearPlotCache = function(){
    waveCached = {};
  }
  
  this.plotWFCOutput = function(canvas,viewport,wave){
    var ctx = canvas.getContext('2d');
    var w = tiles[0][0].length
    var h = tiles[0].length;

    var cw = canvas.width/viewport.w
    var ch = canvas.height/viewport.h
    
    if (viewportCached.x != viewport.x || viewportCached.y != viewport.y || viewportCached.w != viewport.w || viewportCached.h != viewport.h){
      console.log("no cache")
      waveCached = {};
      ctx.fillStyle = "black"
      ctx.fillRect(0,0,canvas.width,canvas.height)
    }
    viewportCached = {x:viewport.x,y:viewport.y,w:viewport.w,h:viewport.h};
    
    for (var k in wave){
      if (k in waveCached){
        continue
      }
      waveCached[k] = wave[k]
      var [y,x] = k.split(",").map(x=>parseInt(x));
      x = (x-viewport.x)/viewport.w*canvas.width
      y = (y-viewport.y)/viewport.h*canvas.height
      
      var v = wave[k];
      
      for (var i = 0; i < h; i++){
        for (var j = 0; j < w; j++){
   
          var rgb = [0,0,0];
          if (typeof v === 'number'){
            rgb = colors[tiles[v][i][j]];
          }else{
            for (var ii = 0; ii < tiles.length; ii++){
              rgb[0] += colors[tiles[ii][i][j]][0]*v[ii];
              rgb[1] += colors[tiles[ii][i][j]][1]*v[ii];
              rgb[2] += colors[tiles[ii][i][j]][2]*v[ii];
            }
            rgb = rgb.map(Math.round)
          }
          ctx.fillStyle = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`;
          ctx.fillRect(x+cw*j/w,y+ch*i/h,cw/w+1,ch/h+1);
        }
      }
    }
  }
  
}



var WFCTool3D = function(){
  var tiles = []
  var materials = {}
  var weights = []
  var n_prototypes = 0
  var formulae = []
  
  
  var transformBank = {
    ry:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m.length; j++){
          for (var k = 0; k < m.length; k++){
            r[i][j][k] = m[i][m.length-1-k][j]; 
          }
        }
      }
      return r;
    },
    
    rx:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m.length; j++){
          for (var k = 0; k < m.length; k++){
            r[i][j][k] = m[k][j][m.length-1-i]; 
          }
        }
      }
      return r;
    },
    
    rz:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m.length; j++){
          for (var k = 0; k < m.length; k++){
            r[i][j][k] = m[m.length-1-j][i][k]; 
          }
        }
      }
      return r;
    },
    
    fz:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m[0].length; j++){
          for (var k = 0; k < m[0][0].length; k++){
            r[i][j][k] = m[i][j][m.length-1-k]; 
          }
        }
      }
      return r;
    },
    
    fx:function(m){
      var r = JSON.parse(JSON.stringify(m));
      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m[0].length; j++){
          for (var k = 0; k < m[0][0].length; k++){
            r[i][j][k] = m[i][m.length-1-j][k]; 
          }
        }
      }
      return r;
    },
    
    fy:function(m){
      
      var r = JSON.parse(JSON.stringify(m));

      for (var i = 0; i < m.length; i++){
        for (var j = 0; j < m[0].length; j++){
          for (var k = 0; k < m[0][0].length; k++){
            r[i][j][k] = m[m.length-1-i][j][k]; 
          }
        }
      }
      return r;
    },
  }

  function equal(m,r){
    for (var i = 0; i < m.length; i++){
      for (var j = 0; j < m[0].length; j++){
        for (var k = 0; k < m[0][0].length; k++){
          if (m[i][j][k] != r[i][j][k]){
            return false;
          }
        }
      }
    }
    return true;
  }
  
  function fit(d,a,b){
    if (d == "x"){
      for (var i = 0; i < a.length; i++){
        for (var j = 0; j < a[i][0].length; j++){
          if (a[i][a[i].length-1][j] != b[i][0][j]){
            return false;
          }
        }
      }
    }else if (d == "y"){
      for (var i = 0; i < a[0].length; i++){
        for (var j = 0; j < a[i][0].length; j++){
          if (a[a.length-1][i][j] != b[0][i][j]){
            return false;
          }
        }
      }
    }else if (d == "z"){
      for (var i = 0; i < a.length; i++){
        for (var j = 0; j < a[0].length; j++){
          if (a[i][j][a[i][0].length-1] != b[i][j][0]){
            return false;
          }
        }
      }      
    }
    return true;
  }
  
  this.addTile = function(s,{transforms="auto",weight=1}={}){
    var t = s.map(y=>y.split("\n").map(x=>x.split("")));
    tiles.push(t);
    formulae.push([ n_prototypes, '', t ])
    weights.push(weight)
    
    var tests = []
    
    if (transforms == "auto"){
      transforms = ['ry','ry+ry','ry+ry+ry','fy','fy+ry','fy+ry+ry','fy+ry+ry+ry']
    }
    
    for (var i = 0; i < transforms.length; i++){
      var tl = transforms[i].split("+")
      var tt = t
      for (var j = 0; j < tl.length; j++){
        tt = transformBank[tl[j]](tt);
      }
      tests.push(tt);
    }
    for (var i = 0; i < tests.length; i++){
      var ok = true;
      for (var j = 0; j < tiles.length; j++){
        if (equal(tests[i],tiles[j])){
          ok = false;
          break;
        }
      }
      if (ok){
        tiles.push(tests[i])
        weights.push(weight)
        formulae.push([ n_prototypes, transforms[i], tests[i] ])
      }
    }
    n_prototypes++;
  }
  
  this.addMaterial = function(symbol, material){
    materials[symbol] = material;
  }
  
  this.getTileFormulae = function(){
    return formulae;
  }
  
  this.generateWFCInput = function(){
    var rules = []
    for (var i = 0; i < tiles.length; i++){
      for (var j = 0; j < tiles.length; j++){

        if (fit("x",tiles[i],tiles[j])){
          rules.push(['x',i,j])
        }
        if (fit("y",tiles[i],tiles[j])){
          rules.push(['y',i,j])
        }
        if (fit("z",tiles[i],tiles[j])){
          rules.push(['z',i,j])
        }
      }
    }
    return {weights,rules,nd:3}
  }
  
  /*global describe THREE */
  this.plotWFCOutput = function(root,wave){

    while (root.children.length){
      root.children.pop();
    }
    
    var wz = tiles[0][0][0].length
    var wx = tiles[0][0].length
    var wy = tiles[0].length;
    
    var geometry = new THREE.BoxGeometry( 1/wx, 1/wy, 1/wz );

    for (var K in wave){
      var [y,x,z] = K.split(",").map(x=>parseInt(x));
      for (var i = 0; i < wy; i++){
        for (var j = 0; j < wx; j++){
          for (var k = 0; k < wz; k++){
            var material = materials[tiles[wave[K]][i][j][k]]
            if (material){
              var cube = new THREE.Mesh(geometry,material);
              cube.position.set(x+j/wx,y+i/wy,z+k/wz)
              cube.castShadow = true;
              cube.receiveShadow = true;
              root.add(cube);
            }
          }
        }
      }
    }
  }
  
}

if (typeof module === "object"){
  module.exports = {WFCTool2D,WFCTool3D};
}