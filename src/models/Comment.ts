import {Schema, model} from 'mongoose';

export const CommentSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    placeId: {
        type: Number,
        required: true,
    },
    authorId: {
        type: Number,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

export default model('Comment', CommentSchema);
