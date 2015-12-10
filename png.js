function palindromeNumberGenerator ( number ) {
  var myObj = {
    value: this.value,
    steps: 0
  };

  //Check if the number input is a Palindromic Number

  //Split number input into an array of strings
  var n = ( '' + number ).split( '' );

  //Reverse the array of strings
  var r = n.reverse();

  //Loop through and check to see if the first array and reversed array have
  //the same string values at the same indexes (Palindromic)

  for ( i = 0; i < n.length; i++  ) {
    //If the number IS Palindromic
    if ( n[i] === r[i] ) {
      //Join the elements of the arrays into a string, return string
      var j = n.join('');
      //Parse the string and return an integer
      var p = parseInt(j);
      this.value = p;
      steps = 0;
      //return an object
      return myObj;
    } else {
    //If the number is NOT Palindromic
    //Join the elements of the arrays into a string, return string
    var a = n.join('');
    var s = r.join('');
    //Parse the string and return an integer
    var d = parseInt(a);
    var f = parseInt(s);
    newNumber = d + f;
    steps ++;
    }
  }
}
palindromeNumberGenerator(3543);