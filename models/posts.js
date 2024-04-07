// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('sqlite:blog.sqlite'
//     , {logging: false}
// )

// const Posts = sequelize.define('Posts',
// {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     createdAt: {
//         type: Sequelize.DATE
//     },
//     updatedAt: {
//         type: Sequelize.DATE
//     },
//     title: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     body: {
//         type: Sequelize.TEXT,
//         allowNull: false
//     },
//     attachmentId: {
//         type: Sequelize.INTEGER
//     }
// },
// {
//     tableName: 'Posts',
//     timestamps: false
// });

// module.exports = {Posts}
// -------------------------------------------------------------------------------------------------------------------------
'use strict';
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Posts extends Model {}

    Posts.init({
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        attachmentId: {
            type: DataTypes.INTEGER
        }
    },
    {
        sequelize,
        // tableName: 'Posts',
        // timestamps: false
    });
    return Posts;
};

// const {Model} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//     class Posts extends Model {}

//     Posts.init({
//         id: {
//             type: DataTypes.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         },
//         createdAt: {
//             type: DataTypes.DATE
//         },
//         updatedAt: {
//             type: DataTypes.DATE
//         },
//         title: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         body: {
//             type: DataTypes.TEXT,
//             allowNull: false
//         },
//         attachmentId: {
//             type: DataTypes.INTEGER
//         }
//     },
//     {
//         sequelize,
//         // tableName: 'Posts',
//         // timestamps: false
//     });
//     return Posts;
// };