const router = require('express').Router()
const db = require('../db')
const models = require('../db/models')
const Campus = models.Campus
module.exports = router;
// GET all campuses
router.get('/', function (req, res, next) {
  Campus.findAll()
    .then((campuses) => res.json(campuses))
})



// GET a campus by ID
router.get('/:id', function (req, res, next) {
  Campus.findById(req.params.id)
    .then((campus) => res.json(campus))
    .catch(next)
})

// GET a list of students at a campus
router.get('/:id/students', function (req, res, next) {
  Campus.findById(req.params.id)
    .then((campus) => campus.getStudents())
    .then((students) => res.json(students))
    .catch(next)
})

// POST a new campus
router.post('/', function (req, res, next) {
  Campus.create(req.body)
    .then((campus) => res.json(campus))
    .catch(next)
})

// PUT updated campus info (for one campus)
router.put('/:id', function (req, res, next) {

  Campus.findById(req.params.id)
    .then((campus) => campus.update(req.body))
    .then((campus) => res.json(campus))
    .catch(next)
})

// DELETE a campus
router.delete('/:id', function (req, res, next) {
  Campus.findById(req.params.id)
    .then((campus) => campus.destroy())
    .then((campus) => res.json("Deleted"))
    .catch(next)
})


