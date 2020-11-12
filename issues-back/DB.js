
let mongoAddress = process.env.MONGO_ISSUEADDRESS || "localhost";
let mongoPORT = process.env.MONGO_ISSUEPORT || 27017;




module.exports = {
    DB: `mongodb://${mongoAddress}:${mongoPORT}/mevncrud`
}