function add(a,b){//a,b is parameters
return a+b
}

console.log(add(1,2))//arguments

console.log(add()) // default parameter undefiend

function display(name="Default name"){
console.log(name)
}
display("Prasanna");//Print Prasanna
display();//Print Default name