const express = require("express")
const router = express.Router()
const jobController = require('../app/controllers/jobController');

router.get('/jobs', jobController.getAllJobs);
router.get('/jobs/:id', jobController.getJobById);
router.get('/jobs/search/:language', jobController.searchJobsByLanguage);


module.exports = router