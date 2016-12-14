angular
  .module('ninja.shared')
  .filter('capitalize', function(){
    return function(str, charIndex){
      var words = str.toLowerCase().split(' ');
      var capitalized = "";
      charIndex = charIndex - 1 || 0;

      for(var i = 0; i < words.length; i++) {

        if(charIndex >= words[i].length){
          continue;
          // charIndex = words[i].length - 1;
        }

        var letters = words[i].split('');

        var c = letters[charIndex].toUpperCase();
        letters.splice(charIndex, 1, c);

        words[i] = letters.join('');
      }

      return words.join(' ');
    }
  })
