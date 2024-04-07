// const Sequelize = require('sequelize');

// const sequelize = new Sequelize('sqlite:blog.sqlite'
//     , {logging: false}
// )

// const Attachments = sequelize.define('Attachments',
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
//     mime: {
//         type: Sequelize.STRING
//     },
//     url: {
//         type: Sequelize.STRING
//     },
//     image: {
//         type: Sequelize.BLOB
//     }
// },
// {
//     tableName: 'Attachments',
//     timestamps: false
// });

// module.exports = {Attachments}
// --------------------------------------------------------------------------------------------------------------
'use strict';
const {Model, DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    class Attachment extends Model {}

    Attachment.init({
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
        mime: {
            type: DataTypes.STRING
        },
        url: {
            type: DataTypes.STRING
        },
        image: {
            type: DataTypes.BLOB
        }
    },
    {
        sequelize,
        // tableName: 'Attachment',
        // timestamps: false
    });
    return Attachment;
};

// const {Model} = require('sequelize');

// module.exports = (sequelize, DataTypes) => {
//     class Attachments extends Model {}

//     Attachments.init({
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
//         mime: {
//             type: DataTypes.STRING
//         },
//         url: {
//             type: DataTypes.STRING
//         },
//         image: {
//             type: DataTypes.BLOB
//         }
//     },
//     {
//         sequelize,
//         // tableName: 'Attachments',
//         // timestamps: false
//     });
//     return Attachments;
// };