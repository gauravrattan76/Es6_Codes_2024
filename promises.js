var promise = new Promise(function (resolve, reject) {
    // the function is executed automatically when the promise is constructed
    // after 1 second signal that the job is done with the result "done!"
    setTimeout(function () { return reject("we have a error"); }, 500);
});
promise.then(function (res) {
    console.log(res);
}, function (err) {
    console.log(err);
});
