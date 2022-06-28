import { Trail } from "../models/trail.js";

function index(req, res){
    Trail.find({})
    .then(trails => {
        res.render('trails/index', {
            title: "Welcome to Hood Mountain!",
            trails, trails
        })
    })
}

function newTrail(req, res){
    Trail.find({})
    .then(trails => {
        res.render('trails//new', {
            title: "Add New Trail",
            trails
        })
    })
}

export{
    index,
    newTrail as new
}