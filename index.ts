import { NONAME } from "dns/promises";
import inquirer from "inquirer";

// Class Person
class Person{
personality:string="Mystery"
name?:string;

constructor(askQuestion:number){

if(askQuestion==1){
this.personality="Introvert"
console.log(`\nYou are an ${this.personality} person`);
}


else if (askQuestion==2){
this.personality="Extrovert"
console.log(`\nYou are an ${this.personality} person `);
}

else {
  console.log("You are still mysterious person.");
 }}
}



// Class Student
class Student extends Person {
    name : string 
    constructor(personality:number,name:string){
    super (personality)
    this.name=name
  
    }
}


async function user_input(){

    const ans = await inquirer.prompt([{

        type:"number",
        name:"inputNum",
        message:"Type '1' If you like to talk to other . Type '2' if  you would rather keep to yourself... ",
    },{
    type:"string",
    name:"inputName",
    message:"Enter Your Name:",

  }])
let student = new Student(ans.inputNum,ans.inputName)
console.log(` Your name is ${student.name} and Your personality is ${student.personality}`)

if(student.personality=="Introvert"){
console.log("\nYou might prefer reading a book over attending a party.\nYou might enjoy deep conversations with person more than chatting in a large group.\nYou might feel drained after social events,needing time to recharge alone.");
}

if(student.personality=="Extrovert"){
console.log("\nYou might enjoy striking up conversations with strangers rather than sticking to familiar faces.\nYou might energizing in lively social gatherings rather than quiest solitiary activities.\nYou might prefer engaging in animated discussions at parties over sitting back and observing.");
}
  

}

async function exitProgram(){
await user_input()
console.log("\n**********************************************")
console.log("\nThankyou! for using the Entrovert-Extrovert Personality Identifier.Have a great day!");

}

exitProgram()
















