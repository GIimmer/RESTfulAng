const goose = require('mongoose');
goose.connect("mongodb://localhost:27017/RESTfulTask", {useNewUrlParser: true},(errs)=> console.log(errs?errs:"db Message Board"));

const TaskSchema = new goose.Schema({
    title: {
        type: String,
        required: [true, "task title must contain SOMEthing"],
        minlength: [2, "Longer title plox"]
    },
    content: {
        type: String,
        required: [true, "task content must contain SOMEthing"],
        minlength: [5, "More task content plox"]
    },
    isComplete:{
        type: Boolean,
        required: true,
    }
},{timestamps:true});



module.exports = goose.model("Task", TaskSchema);