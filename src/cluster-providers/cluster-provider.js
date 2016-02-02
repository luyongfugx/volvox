export default class ClusterProvider {
    constructor(randomProvider) {
        this._randomProvider = randomProvider;
    }

    async findServiceInstancesAsync(name) {
        return new Promise((resove, reject)=> {
            return reject(new Error("should be implemented in subclasses"))
        });
    }

    async  registerServiceAsync(serviceName, serviceId, version, uri) {
        return new Promise((resove, reject)=> {
            return reject(new Error("should be implemented in subclasses"))
        });
    }

    async bootstrapClientAsync() {
        return new Promise((resove, reject)=> {
            return reject(new Error("should be implemented in subclasses"))
        });
    }

    async findServiceInstanceAsync(serviceName) {
        var res = await this.findServiceInstancesAsync(serviceName);
        if (res.length === 0)
            throw new Error("Could not find service");

        console.log(res);
        //TODO: Thread Local Random
        return res[this._randomProvider.next(0, res.length)];
    }
}