const createError = require('http-errors');
const {models} = require("../models");

const Sequelize = require("sequelize");

exports.load = async (req, res, next, postId) => {
    try {
        // const post = await models.Posts.findByPk(postId);
        const post = await models.Posts.findByPk(postId, {
            include: [
            {model: models.Attachment, as: 'attachment'}
            ]
        });           
        if (post) {
            req.load = {...req.load, post};
            next();
        } else {
            throw createError(404,'There is no post with id=' + postId);
        }
    } catch (error) {
        next(error);
    }
};

exports.index = async (req, res, next) => {
    try {
        const posts = await models.Posts.findAll({
            include: [
            {model: models.Attachment, as: 'attachment'}
            ]
        });   
        res.render('posts/index.ejs', {posts});
    } catch (error) {
    next(error);
    }
};

exports.show = async (req, res, next) => {
    const {post} = req.load;
    res.render('posts/show', {post});
};

exports.new = (req, res, next) => {
    const post = {title: "", body: ""};
    res.render('posts/new', {post});
};

exports.create = async (req, res, next) => {
    const {title, body} = req.body;
    let post;
    try {
        post = models.Posts.build({title, body});
        post = await post.save({fields: ["title", "body"]});
        // res.redirect('/posts/' + post.id);
        try {
            if (!req.file) {
                console.log('Info: Post without attachment.');
                return;
            }
            let attachment = await models.Attachment.create({
                mime: req.file.mimetype,
                image: req.file.buffer,
                url: null
                });
            await post.setAttachment(attachment);
            console.log('Success: Attachment saved successfully.');
        } catch (error) {
            console.log('Error:' + error.message);
        } finally {
            res.redirect('/posts/' + post.id);
        }
    } catch (error) {
    if (error instanceof (Sequelize.ValidationError)) {
        console.log('There are errors in the form:');
        error.errors.forEach(({message}) => console.log(message));
        res.render('posts/new', {post});
    } else {
        next(error);
    }
    }
};

exports.edit = (req, res, next) => {
    const {post} = req.load;
    res.render('posts/edit', {post});
    };

exports.update = async (req, res, next) => {
    const {post} = req.load;
    post.title = req.body.title;
    post.body = req.body.body;
    try {
        await post.save({fields: ["title", "body"]});
        // res.redirect('/posts/' + post.id);

        try {
            if (!req.file) {
                console.log('Info: Post attachment not changed.');
                return;
            }
            // Delete old attachment.
            await quiz.attachment?.destroy();
            // Create the new attachment:
            const attachment = await models.Attachment.create({
                mime: req.file.mimetype,
                image: req.file.buffer,
                url: null
            });
            await post.setAttachment(attachment);
            console.log('Success: Attachment saved successfully.');
        } catch (error) {
            console.log('Error:' + error.message);
        } finally {
            res.redirect('/posts/' + post.id);
        }

    } catch (error) {
    if (error instanceof (Sequelize.ValidationError)) {
        console.log('There are errors in the form:');
        error.errors.forEach(({message}) => console.log(message));
        res.render('posts/edit', {post});
    } else {
        next(error);
    }
    }
};

exports.destroy = async (req, res, next) => {
    try {
        await req.load.post.destroy();
        // await attachment?.destroy();
        const attachment = req.load.post.attachment;
        if (attachment) {
            attachment.destroy()
        }
        res.redirect('/posts');
    } catch (error) {
        console.log('Error: Error deleting the Post: ' + error.message);
        next(error);
    }
};

exports.attachment = (req, res, next) => {
    const {post} = req.load;
    const {attachment} = post;
    if (!attachment) {
        res.redirect("/images/none.jpg");
    } else if (attachment.image) {
        res.type(attachment.mime);
        res.send(attachment.image);
    } else if (attachment.url) {
        res.redirect(attachment.url);
    } else {
        res.redirect("/images/none.jpg");
    }
}