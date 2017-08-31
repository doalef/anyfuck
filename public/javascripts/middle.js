(function() {
    var fucks, i, j, nfk, ref;
  
    fucks = document.getElementById('fucks');
  
    for (i = j = ref = fucks.children.length - 1; ref <= 0 ? j <= 0 : j >= 0; i = ref <= 0 ? ++j : --j) {if (window.CP.shouldStopExecution(1)){break;}
      nfk = ~~(Math.random() * i) || 0;
      fucks.appendChild(fucks.children[nfk]);
    }
  window.CP.exitedLoop(1);
  
  
  }).call(this);
  