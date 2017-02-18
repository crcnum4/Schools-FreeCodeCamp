function titleCase(str) {
  str = str.toLowerCase();
  var strArray = str.split(" "); // splits the string str into a array of words
  // ["I'm", "a", "littel"...]
  
  for(var i = 0, length = strArray.length; i < length; i++) {
    var word = strArray[i].split(''); // ["I", "'", "m"]
    
    word[0] = word[0].toUpperCase();
    
    strArray[i] = word.join('');
    
  }
  
  str = strArray.join(' ');
  return str;
}

titleCase("I'm a little tea pot");
