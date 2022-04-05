var promise = new Promise(function(resolve, reject) {
    const string1 = "Nithiya";
    setTimeout(() => {
        console.log("Hi");
    }, 6000);
    if(string1 == "Nithiya") {
        resolve();       
    } else {
        reject();
    }
    });
    
    promise.then(function () {
            console.log('Success!!!!!!!!!!!!!!!!!');
        }).
        catch(function () {
            console.log('Error has occurred');
        });
