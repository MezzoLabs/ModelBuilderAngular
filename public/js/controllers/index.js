module.exports = app => {
    registerController('ModelBuilder', require('./modelBuilder'));

    function registerController(name, controller){
        app.controller(name + 'Controller', controller);
    }
};