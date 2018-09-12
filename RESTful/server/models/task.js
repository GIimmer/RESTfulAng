const goose = require('mongoose');
goose.connect("mongodb://localhost:27017/RESTfulTask", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db Message Board"));

const TaskSchema = new goose.Schema({
    content: {
        type: String,
        required: [true, "task content must contain SOMEthing"],
        minlength: [5, "More task content plox"]
    },
},{timestamps:true});



module.exports = goose.model("Task", TaskSchema);