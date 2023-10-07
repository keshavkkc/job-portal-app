const Job = require('../models/job');

exports.getAllJobs = async (req, res) => {
    try {
        const jobs = await Job.find();
        res.json(jobs);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id);
        if (!job) {
            return res.status(404).send("Job not found");
        }
        res.json(job);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.searchJobsByLanguage = async (req, res) => {
    try {
        const language = req.params.language.toLowerCase();
        const jobs = await Job.find({ title: new RegExp(language, 'i') });

        res.json(jobs);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

