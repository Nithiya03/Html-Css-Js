var promise = new Promise(function(resolve, reject) {
    const string1 = "Nithiya";

    if(string1 === "ma") {
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