//--------------function-------------
// function are reusable blocks of code
//example 1:-
//function abc()
//{
//code block for the function
//console.log("inside blog");
//}
//to run the block of code inside the function,I need to excution(call) the function
//abc() //function excution,function call

//example 2:-
// function add(a, b){//4,5//parameters
//  console.log(a + b);
// }
// add(4,5) //arguments
//-------------------------------------------
//return function
//example:-
// function add(a,b)
// {
//   return a+b;// end the function execution
//   //console.log("hi")//after the return any code or statment not work or not visible in console
// }
// var result=add(4,5);
// console.log(result);
//console.log(add(4,1));

//example2:-
// function add(a,b)
// {
//   console.log(a);
//  debugger;//stop the code at the poin of execution
//   console.log(a+b);
// }
// add(4,5);

//example3:-
//var result = add(4,3)
//console.log(result);
//  function add(a,b{
//    result a+b;
//  }
//---------------scope-------
//scope is where that variable we can use/present/acceccable.
//example 1:
//   function abc() {
//   //scope of a,b is abc function
//   var a = 10; //we can not access a and b outside function because its function scope unless we use return.
//   var b = 20;
//   console.log(a, b, "inside block");
// }
// var x = 10;
// abc();
// console.log(a, b, "inside global");

//------------------------------------------
// var x = 10;
// function a() {
//   var y = 20;
//   function b() {
//     console.log(x, y);
//   }
//   b();
// }
// a();