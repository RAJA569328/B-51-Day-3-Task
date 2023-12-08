// FIRST QUESTION 
let obj1 = {
    name:"person1",
    age : 5
}
let obj2 = {
    name:"person1",
    age : 5
}
// _______________________________________________________________________________

//METHOD ONE in conditional statement
function  TRUE(A1,A2,B1,B2){
if(A1 == A2){
    if(B1==B2){
    console.log('METHOD ONE: Yes both the object has same properties')
    }
    else{
        console.log("METHOD ONE: No both the object doesn't same properties")
    }
}else{
    console.log("METHOD ONE: No both the object doesn't same properties")
}
}

TRUE(obj1.name,obj2.name,obj1.age,obj2.age)

// ___________________________________________________________________________

// METHOD TWO in LODASH
const Compare = require('lodash');

function  CompareSecondMethod(){
if(Compare.isEqual(obj1, obj2)){
    console.log('METHOD TWO : Yes both the object has same properties')
}else{
    console.log("METHOD TWO : No both the object doesn't same properties ")
}
}

CompareSecondMethod()

// _________________________________________________________________________________