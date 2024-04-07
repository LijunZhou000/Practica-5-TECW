// const Posts = require('./posts');
// const Attachments = require('./attachments');

// Posts.belongsTo(Attachments, { foreignKey: 'attachmentId', onDelete: 'CASCADE', onUpdate: 'CASCADE'});
// Attachments.hasOne(Posts, { foreignKey: 'attachmentId', onDelete: 'CASCADE', onUpdate: 'CASCADE'});

// module.exports = {Posts, Attachments}

// Load ORM
const Sequelize = require('sequelize');
// To use SQLite data base:
// DATABASE_URL = sqlite:quiz.sqlite
// const url = process.env.DATABASE_URL || 
// "sqlite:quiz.sqlite";
const sequelize = new Sequelize("sqlite:blog.sqlite");
const Posts = require('./posts')(sequelize);
const Attachment = require('./attachment')(sequelize);
// const Posts = sequelize.import("./posts.js");
// const Attachments = sequelize.import("./attachments.js");

Attachment.hasOne(Posts, {as: 'posts', foreignKey: 'attachmentId'});
Posts.belongsTo(Attachment, {as: 'attachment', foreignKey: 'attachmentId'});

module.exports = sequelize;