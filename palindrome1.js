let str="nun";
let bag="";
  for (let i=str.length-1;i>=0;i--){
      bag=bag+str[i];
  }if(bag==str){
    console.log("its a palindrome")
  }
  else {
      console.log("Not a palindrome");
  }