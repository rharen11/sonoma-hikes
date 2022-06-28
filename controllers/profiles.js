import { Profile } from "../models/profile.js";

function show(req, res){
    Profile.findById(req.params.id)
  .then(profile => {
    const isSelf = profile._id.equals(req.user.profile._id)
    res.render("profiles/show", {
      title: `${profile.name}'s Hikes`,
      profile: profile,
      isSelf
    })
  })
  .catch((err) => {
    console.log(err)
    res.redirect("/")
  })
}

function newHike(req, res){
    res.render('hikes/new', {
        title: "Add Hike"
    })
    .catch(err => {
        console.log(err)
        res.redirect('/')
    })
}

function create(req, res){
    Profile.findById(req.user.profile._id)
    .then(profile => {
        profile.hikes.push(req.body)
        console.log(req.body)
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
    show,
    newHike as new,
    create
}