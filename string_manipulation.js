String.prototype.beautify = function(){
	return this.toLowerCase().replace(/^\s+|\s+$|\s+(?=\s)/g, "")
}

String.prototype.massReplace = function(obj, flags) {
	let find = Object.keys(obj);
	let replace = Object.values(obj);
	let replaceString = this;
	  for (var i = 0; i < find.length; i++) {
	    var regex = new RegExp(find[i], flags);
	    replaceString = replaceString.replace(regex, replace[i]);
	  }
	  return replaceString;
}
