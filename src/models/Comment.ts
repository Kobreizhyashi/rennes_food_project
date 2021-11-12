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
        type: Schema.Types.ObjectId,
        ref: 'Author',
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

export default model('Comment', CommentSchema);
