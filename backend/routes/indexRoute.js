const express = require('express')
const controller = require('../controllers/todo')
const router = express.Router()

//GET
router.get('/',controller.get_array)
//POST
router.post('/',controller.add_to_array)
//PUT
router.put('/',controller.edit_array)
//DELETE
router.delete('/',controller.delete_an_array)

module.exports = router;