

function greetUser(name , time) {

    if (time < 12){
        console.log(`Good Morning ${name}`);
    } else if(time>12 && time < 17){
        console.log(`Good Afternoon ${name}`)
    } else if(time > 12 && time < 19){
        console.log(`Good evening ${name}`)
    }else{
        console.log(`Good Night ${name}`)
    }
}
console.log(Date())

greetUser('Fred', 13);

for(i = 0;true;i+=2){
        console.log(i)
    
}

//get current username from db or session = var
