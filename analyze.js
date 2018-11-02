function analyze(obj){
	let keywords = Object.keys(obj);
    let names = document.querySelectorAll(".p-name"), length = names.length;
    for (let i = 0; i < length; i++){
      let result = {}, string = names[i].textContent.trim().toLowerCase();
      let parts = string.split(/\s/g);
      for (let q = 0; q < parts.length; q++){
        for (var keyword in obj){
          if (RegExp(keyword+'*').test(parts[q])){
            if (obj[keyword].exceptions.forEach(function(exc){if(RegExp(exc+"*").test(string)){continue;}})){}
            else{ result[keyword] = true; }
          }
        }
      }
      for (var word in result){
				/*Do whatever is needed*/
      }
    }
  }
