import { Trail } from "../models/trail.js";

function index(req, res){
    Trail.find({})
    .then(trails => {
        res.render('trails/index', {
            title: "Welcome to Hood Mountain!",
            trails, trails
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect('/trails')
      })
}

function show(req, res){
    Trail.findById(req.params.id)
    .then(trail => {
        res.render('trails/show', {
            title: `${trail.name} Details`,
            trail
        })
    })
    .catch((err) => {
        console.log(err)
        res.redirect("/")
      })
}

function newTrail(req, res){
    Trail.find({})
    .then(trails => {
        res.render('trails/new', {
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
    .then(trail => {
        res.redirect('/trails')
    })
    .catch(err => {
        console.log(err)
        res.redirect('/trails')
      })
    }

    function edit(req, res){
        Trail.findById(req.params.id)
        .then(trail => {
            res.render('trails/edit', {
                trail: trail,
                title: "Edit Trail"
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect('/trails')
          })
    }

    function update(req, res){
        Trail.findById(req.params.id)
        .then(trail => {
            trail.updateOne(req.body, {new: true})
            .then(updatedTrail => {
                res.redirect('/trails')
            })
        })
        .catch(err => {
            console.log(err)
            res.redirect('/trails')
          })
    }

function deleteTrail(req, res){
    Trail.findByIdAndDelete(req.params.id)
    .then(() => {
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
    create,
    deleteTrail as delete,
    edit,
    update,
    show
}