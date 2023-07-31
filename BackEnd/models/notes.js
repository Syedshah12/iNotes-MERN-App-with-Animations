const mongoose = require('mongoose');
const { Schema } = mongoose;


var notesSchema = mongoose.Schema({
    user:
    {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },

    created_at: {
        type: Date, default: Date.now
    },

    updated_at: {
        type: Date, default: Date.now
    }


});











const Note = new mongoose.model('Note', notesSchema);
module.exports = Note;
