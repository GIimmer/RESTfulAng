const Tasks = require("../models/task.js");

module.exports = {
    getAllTasks: (req,res)=>Tasks.find({})
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    getOneTask: (req,res)=>Tasks.findById(req.params.id)
                                .then(data=>req.json(data))
                                .catch(errs=>res.json(errs)),

    createTask: (req,res)=>Tasks.create(req.body)
                                .then(data=>console.log('yo')||res.json(data))
                                .catch(errs=>console.log('hey')||res.json(errs)),

    updateTask: (req,res)=>Tasks.findById(req.body.id)
                                .then(message=>{
                                    message.comments.push({
                                        name: req.body.name,
                                        comment: req.body.comment
                                    });
                                    return message.save()
                                })
                                .then(updatedMSG=>res.json(updatedMSG))
                                .catch(errs=>res.json(errs)),

    deleteTask: (req,res)=>Tasks.remove({_id: req.params.id})
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),

    deleteTasks: (req,res)=>Tasks.remove({})
                                .then(data=>res.json(data))
                                .catch(errs=>res.json(errs)),
}