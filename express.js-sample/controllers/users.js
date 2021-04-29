const userModel = require("../models/users");

exports.get_all = function(req, res, next) {
    userModel.find({}, function(err, data) {
        if (err){
            next(err);
        }
        else{
            res.json(data);
        }
    });
};

exports.create_data = function(req, res, next) {
    var new_data = new userModel(req.body);
    new_data.save(function(err, data) {
        if (err){
        next(err);}
        else{
        res.json(data);
        }
    });
};

exports.create_data_multiple = function(req, res, next) {
    userModel.insertMany(req.body, function(err, data) {
        if (err){
            next(err);}
        else{
            res.json(data);
        }
    });
};

exports.read_data = function(req, res, next) {
    userModel.find({_id:req.params._id}, function(err, data) {
        if (err){
            next(err);}
        else{
            res.json(data);
        }
    });
};


exports.update_data = function(req, res, next) {
    userModel.findOneAndUpdate({_id: req.params._id}, req.body, {new: true}, function(err, data) {
        if (err){
            next(err);}
        else{
            res.json(data);
        }
    });
};

exports.delete_data = function(req, res, next) {
    userModel.remove({
        _id: req.params._id
    }, function(err, data) {
        if (err){
            next(err);}
        else{
            res.json({ message: 'successfully deleted', data : data });
        }
    });
};