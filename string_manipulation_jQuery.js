$.fn.beautify = function() {
    return $(this).text().toLowerCase().replace(/^\s+|\s+$|\s+(?=\s)/g, ""); //Získá text, převede na malá písmena a odstraní všechny nepotřebné mezery
};

$.fn.massReplace = function(obj, flags){
    let find = Object.keys(obj);
    let replace = Object.values(obj);
    let replaceString = $(this).text();
    
    for (var i = 0; i < find.length; i++) {
        var regex = new RegExp(find[i], flags);
        replaceString = replaceString.replace(regex, replace[i]);
    }
    return replaceString;
}
