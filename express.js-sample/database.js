var databaseURI = 'mongodb://'+process.env.MONGO_HOST+':'+process.env.MONGO_PORT+'/mongotes' 

module.exports = {
    mongoURI: databaseURI,
    secretOrKey: 'nahdude',
};