let obj = {
    name:"Piyush",
    age:89,
    address:"Pune",
    company:"Google",
};


let fn = ({name,company}) =>
{ 
    console.log(name,company);
}

fn(obj);