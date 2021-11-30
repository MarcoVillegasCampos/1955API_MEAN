var mongoose = require('mongoose');
var person = mongoose.model('Person');

module.exports={
    allpeople:function(request,response){
       person.find({},function(err,allpeople){
            if(err){
                console.log('error getting all query',err);
                response.json({
                    message:"error retrieving data",
                    error:err
                })
            }
            else{
                response.json({
                    message:"All data retrieved",
                    data:allpeople
                })
            }
        })
    },

    addNewName:function(request,response){
        var add = new person({
            name:request.params.name
        });
        add.save(function(err,newEntry){
            if(err){
                console.log("error adding new entry",err);
                response.json({
                    message:"error adding entry",
                    error:err
                });
            }
            else{
                console.log("entry saved");
                response.json({
                    message:"entry saved",
                    data:newEntry
                })

            }
        });
    },

    removeName:function(request,response){
        person.deleteOne({name:request.params.name},function(err){
            if(err){
                console.log("error deleting entry",err)
                response.json({
                    message:"error deleting entry",
                    error:err
                })
            }
            else{
                console.log('entry deleted');
                response.json({
                    message:"entry deleted"
                });
            }
        })
    },

    findName:function(request,response){
        person.findOne({name:request.params.name},function(err,foundperson){
            if(err){
                console.log('error finding entry');
                response.json({
                    message:"erron finding entry",
                    error:err
                })
            }
                else{
                    console.log('entry found');
                    response.json({
                        message:"entry found",
                        data:foundperson

                    })
                }
            })
        }
    
};