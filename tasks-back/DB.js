
let mongoAddress = process.env.MONGO_TASKADDRESS || "localhost";
let mongoPORT = process.env.MONGO_TASKPORT || 27017;


module.exports = {
    DB: `mongodb://${mongoAddress}:${mongoPORT}/mevncrud`
}