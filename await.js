function getCheese(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const cheese="🧀"
            
            resolve(cheese);
        },1000);
    })
    
}

function makeDough(cheese){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const dough=cheese+"🍞";
            
            // resolve(dough);
            reject("bad cheese");
        },2000);
    })
    
}

function bakePizza(dough){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            const pizza=dough+"🍕";
            
            resolve(pizza);
        },2000);
    })
    
}


async function orderPizza(){
    try{
        const cheese=await getCheese();
        console.log('here is cheese', cheese); 

        const dough=await makeDough(cheese);
        console.log('here is dough', dough);

        const pizza=await bakePizza(dough);
        console.log('here is pizza', pizza);
    }catch(err){
        console.log("error occurred",err);
    }
    console.log("process ended");
}

orderPizza();