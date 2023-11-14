/*
    Allow you create an empty Promise instance.
    If your action were done, you can call the resolve method to fulfilled the promise. 

    Usage:
        const deferred = new Deferred();
        // do something
        deferred.resolve('done');

    example:
        function someUserAction() {
            const deferred = new Deferred();
            
            el.addEventListener('click', () => {
                deferred.resolve('done');
            });

            return deferred;
        }

        function someAsyncFunction(dosomething) {
            const deferred = new Deferred();

            fetch('xxx').then(res => {
                res.json().then(data => {
                    dosomething(data);

                    deferred.resolve(data);
                })
            });

            return deferred;
        }
*/

function Deferred() {
    const deferred = [];
    const promise = new Promise((resolve, reject) => {
        deferred.push({ resolve, reject });
    });

    Object.assign(promise, {
        resolve: (r) => deferred[0].resolve(r),
        reject: (r) => deferred[0].reject(r),
    });

    return promise;
}
