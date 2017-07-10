const router = require('express').Router()
const db = require('../db')
const models = require('../db/models');
const Student = models.Student;
module.exports = router;

// GET all students
router.get('/', function (req, res, next) {
  Student.findAll()
    .then((students) => res.json(students))
    .catch(next)
})

// GET a student by ID
router.get('/:id', function (req, res, next) {
  Student.findById(req.params.id)
    .then((student) => res.json(student))
    .catch(next)
})

// POST a new student
router.post('/', function (req, res, next) {
  Student.create(req.body)
    .then((student) => res.json(student))
    .catch(next)
})

// PUT updated student info (for one student)
router.put('/:id', function (req, res, next) {
  Student.findById(req.params.id)
    .then((student) => student.update(req.body))
    .then((student) => res.json(student))
    .catch(next)
})

// DELETE a student
router.delete('/:id', function (req, res, next) {
  Student.findById(req.params.id)
    .then((student) => student.destroy())
    .then((student) => res.json("Deleted"))
    .catch(next)
})


