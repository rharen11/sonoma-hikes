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

export{
    index
}