var WFC = function({nd,weights,rules,wave}){
  wave = wave || {};
  var wavefront = {}
  var n_patterns = weights.length
  var wavefront = {}
  
  function coord(k){
    return k.split(",").map(x=>parseInt(x))
  }
  
  function entropy(x){
    var one = 0
    for (var i = 0; i < x.length; i++){
      one += x[i]*weights[i]
    }
    var S = 0
    for (var i = 0; i < x.length; i++){
      var pi = x[i]*weights[i]/one
      if (pi != 0){
        S -= pi*Math.log(pi)
      }
    }
    return S
  }

  function collapse(x){
    var one = 0
    for (var i = 0; i < x.length; i++){
      one += x[i]*weights[i]
    }
    var r = Math.random()*one
    for (var i = 0; i < x.length; i++){
      r -= x[i]*weights[i]
      if (r < 0){
        var y = new Array(x.length).fill(0)
        y[i] = 1
        return y
      }
    }
  }

  function neighborable(d,a,b){
    var didx = d.indexOf(1)
    if (didx < 0){
      didx = d.indexOf(-1)
      ;[a,b] = [b,a]
    }
    for (var i = 0; i < rules.length; i++){
      if (didx == rules[i][0] || "yxz"[didx] == rules[i][0]){
        if (a == rules[i][1] && b == rules[i][2]){
          return true
        }
      }
    }
    return false
  }

  function propagate(p){
    var stack = [p]

    while (stack.length){
      p = stack.pop()

      var dirs = []
      for (var i = 0; i < nd; i++){
        var d0 = new Array(nd).fill(0)
        d0[i] = -1
        dirs.push(d0)
      
        var d1 = new Array(nd).fill(0)
        d1[i] = 1
        dirs.push(d1)
      }      
      for (var i = 0; i < dirs.length; i++){
        var q = []
        for (var j = 0; j < p.length; j++){
          q.push(p[j]+dirs[i][j])
        }
        var x = wavefront[p]; if (x == undefined) {x = wave[p]}
        var y = wavefront[q]; if (x == undefined) {x = wave[q]}
      
        if (typeof y == 'number' || typeof y == 'undefined'){
          continue

        }else if (typeof x == 'number' && typeof y == 'object'){

          var mod = false
          for (var j = 0; j < y.length; j++){
            if (y[j] == 0){
              continue
            }
            if (y[j] > 0 && !neighborable(dirs[i],x,j)){
              y[j] = 0
              mod = true
            }
          }
          if (mod){
            stack.push(q);
          }

        }else if (typeof x == 'object' && typeof y == 'object'){
          var mod = false
          for (var j = 0; j < y.length; j++){
            if (y[j] == 0){
              continue    
            }
            var ok = false
            for (var k = 0; k < x.length; k++){
              if (x[k] > 0 && y[j] > 0 && neighborable(dirs[i],k,j)){
                ok = true
                break
              }
            }
            if (!ok){
              y[j] = 0
              mod = true
            }
          }
          if (mod){
            stack.push(q)
          }

        }else{
          throw Error("Invalid propagation parameter",x,y);
        }
        
      }
    }
  }

  function argmax(vals){
    var mi = -1;
    var mv = -Infinity;
    for (var i = 0; i < vals.length; i++){
      if (vals[i] > mv){
        mv = vals[i]
        mi = i
      }
    }
    return mi
  }
  
  this.readout = function(collapse=true){
    if (!collapse){
      var result = {}
      for (var k in wave){
        var oh = Array(n_patterns).fill(0);
        oh[wave[k]] = 1;
        result[k] = oh;
      }
      for (var k in wavefront){
        var s = wavefront[k].reduce((a,b) => a + b, 0)
        var oh = wavefront[k].map(x=>(s==0?0:x/s));
        result[k] = oh;
      }
      return result;
    }
    
    var result = {}
    for (var k in wavefront){
      if (wavefront[k].reduce((a,b) => a + b, 0) == 1){
        result[k] = argmax(wavefront[k])
      }
    }
    return Object.assign({},wave,result)
  }
  
  
  this.expand = function(xmin, xmax){
    var coords = [[0]]
    for (var i = 0; i < xmin.length; i++){
      var cc = []
      for (var x = xmin[i]; x < xmax[i]; x++){
        var c = []
        for (var j = 0; j < coords.length; j++){
          c.push(coords[j].concat(x))
        }
        cc = cc.concat(c)
      }
      coords = cc;
    }
    coords = coords.map(x=>x.slice(1)).filter(x=>!(x in wave || x in wavefront))

    coords.map(x=>wavefront[x]=new Array(n_patterns).fill(1))
    for (var k in wave){
      propagate(coord(k))
    }
  }
  
  this.step = function(){
    var min_ent = Infinity
    var min_arg = undefined

    for (var k in wavefront){
      var ent = entropy(wavefront[k])
      if (isNaN(ent)){
        for (var k in wavefront){
          wavefront[k]=new Array(n_patterns).fill(1)
        }
        for (var k in wave){
          propagate(coord(k))
        }
        console.log(":(")
        return false
      }
      if (ent == 0){
        continue;
      }
      ent += (Math.random()-0.5)
      if (ent < min_ent){
        min_ent = ent
        min_arg = coord(k)
      }
    }

    if (min_ent == Infinity){
      wave = this.readout();
      wavefront = {};
      return true;
    }
    wavefront[min_arg] = collapse(wavefront[min_arg]);
    propagate(min_arg);
    return false;
  } 
}

if (typeof module === "object"){
  module.exports = WFC;
}