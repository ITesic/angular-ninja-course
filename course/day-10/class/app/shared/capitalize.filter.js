angular
  .module('shared')
  .filter('capitalize', function(){

    return function(input, charIndex) {
      charIndex = charIndex - 1 || 0;
      var output = "";

      var words = input.split(' ');

      for(var i = 0; i < words.length; i++) {
        words[i] = words[i].toLowerCase();

        var chars = words[i].split('');

        if (charIndex < chars.length) {
          chars[charIndex] = chars[charIndex].toUpperCase();
        }

        words[i] = chars.join('');
      }

      output = words.join(' ');

      return output;
    }

  });
