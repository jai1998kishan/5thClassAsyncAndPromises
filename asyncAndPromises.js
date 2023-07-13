//async code
const fetchData=()=>{
    const promise=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('Done!');
        },1500);
    });
    return promise;
    
}


setTimeout(()=>{
    console.log('Timer is done');
    fetchData().then(text=>{
        console.log(text);
    })
},2000);


//sync code
console.log('Hello!');
console.log('Hi!');

//javascript first excuite the sync code than async code



























