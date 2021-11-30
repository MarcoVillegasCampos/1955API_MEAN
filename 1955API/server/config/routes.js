var person=require('../controllers/API.js');
module.exports = function(app){
    app.get('/',function(request,response){
        person.allpeople(request,response);
    });

    app.get('/new/:name',function(request,response){
       person.addNewName(request,response);
    });

    app.get('/remove/:name',function(request,response){
        person.removeName(request,response);
    });

    app.get('/:name',function(request,response){
        person.findName(request,response);
    })
};

