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
    .catch(err => {
        console.log(err)
        res.redirect('/trails')
      })
    }

function create(req, res){
    Trail.create(req.body)
    console.log(req.body)
    .then(trail => {
        res.redirect('/trails')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/trails')
      })
    }

export{
    index,
    newTrail as new,
    create
}