//Write a function that validates whether two strings are identical. (case insensitive)
// If the strings are the same an alert pops up that says “string 1 is the same as string 2”.
// If the strings are NOT identical an alert pops up that says “The two strings are different”
function isIdenticalString(string1,string2){
   let message = 'The two strings are different';
   if (string1.toLowerCase() === string2.toLowerCase()){
     message = 'string one is the same as string two';
  }
  alert(message);
};

$("form").on('submit', function (e) {
   e.preventDefault();
   let stringOne = $('#string1').val();
   let stringTwo = $('#string2').val();

   isIdenticalString(stringOne,stringTwo)
});
