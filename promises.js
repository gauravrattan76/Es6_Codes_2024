let cleanRoom = new Promise(function(resolve,reject)
{
    let clean = false;

    if(clean === true)
    {
        resolve("The room has been cleaned");
    }
    else
    {
        reject("Room still requires cleaning");
    }
});

cleanRoom.then(function(res){
console.log(res);
}).catch(function(err)
{
    console.log(err);
})