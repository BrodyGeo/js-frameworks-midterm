const Meta = require('../models/meta');
const mongoose = require('mongoose');


exports.new = (req, res) => {
    res.render('metas/new', {
        title: 'New Meta Human!'
    });
};

exports.index = (req, res) => {
    Meta.find()
    .then(metas => {
        res.render('metas/index', {
            metas: metas,
            title: 'Meta Humans'
        });
    })
    .catch(error => {
        req.flash('error', `ERROR: ${error}`);
        res.redirect('/metas');
    });
};


exports.show = (req, res) => {
    Meta.findById(req.params.id)
    .then(meta => 
        {
            res.render('metas/show', {
                title: meta.alias,
                meta: meta
            });
        })
    .catch(error => {
        req.flash('error', `ERROR: ${error}`);
        res.redirect('/metas');
    });
};


exports.edit = (req, res) => {
    console.log();
    Meta.findById(req.params.id)
    .then(meta =>
        {
            res.render(`metas/edit`,
            {
                title: `Edit ${meta.alias}`,
                meta: meta
            })
        })
    .catch(error => {
        req.flash('error', `ERROR: ${error}`);
        res.redirect('/metas');
    });
};

/* May need to remove async */
exports.create = async (req, res) => {
    Meta.create(req.body.meta)
    .then(() => {
        req.flash('success', `Your new Meta Human.`);
        res.redirect('/metas');
    })
    .catch(error => {
        req.flash('error', `ERROR: ${error}`);
        res.render('/metas/new', {
            title: 'New Meta Human',
            meta: req.body.meta
        });
    });
};


exports.update = (req, res) => {
    Meta.updateOne(
        {
        _id: req.body.id
        }
        , req.body.meta, 
        {
        runValidators: true
    })
    .then(() => 
    {
        req.flash('success', `Your Meta Human has been updated.`);
        res.redirect(`/metas`);
    })
    .catch(error => {
        req.flash('error', `ERROR: ${error}`);
        res.render('/metas/edit', {
            title: `Edit ${req.body.meta.alias}`,
            meta: req.body.meta
        });
    });
};


exports.destroy = (req, res) => {
    Meta.deleteOne({
        _id: req.body.id
    })
    .then(() => 
    {
        req.flash('success', `Your Meta Human has been deleted.`);
        res.redirect(`/metas`);
    })
    .catch(error => {
        req.flash('error', `ERROR: ${error}`);
        res.redirect('/metas');
    });
};