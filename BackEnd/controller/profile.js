const model = require("../models/patients");
module.exports.insert = (item, res) => {
    console.log(item);
    
    let newItem = new model(item);
    let obj = { message: "" };
    
    newItem.save()
    .then(resp => {
        console.log(resp);
        obj.message = resp
        res.send(obj)
    }).catch(err => {
        obj.message = err
        console.log(err);
        res.send(obj)


    })

}