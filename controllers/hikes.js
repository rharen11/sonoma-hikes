import { Profile } from "../models/profile.js";

function newHike(req, res){
    res.render('hikes/new', {
        title: "Add Hike"
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function createHike(req, res){
    Profile.findById(req.user.profile._id)
    .then(profile => {
        profile.hikes.push(req.body)
        profile.save()
        .then(() => {
            res.redirect(`/profiles/${req.user.profile._id}`)
        })
    })
    .catch(err => {
        console.log(err)
        res.redirect(`/profiles/${req.user.profile._id}`)
      })
}

export{
    newHike as new,
    createHike
}