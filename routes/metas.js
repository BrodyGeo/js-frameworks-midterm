// Our router module
const router = require('express').Router();

// Our controller
const MetasController = require('../controllers/metasController');

// Your routes
router.get(`/new`, MetasController.new);
router.get(`/`, MetasController.index);
router.get(`/:id`, MetasController.show);
router.post(`/`, MetasController.create);
router.get(`/:id/edit`, MetasController.edit);
router.post(`/update`, MetasController.update);
router.post(`/destroy`, MetasController.destroy);

// We have to export our changes
module.exports = router;