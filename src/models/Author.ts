import {Schema, model} from 'mongoose';

export const AuthorSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: Number,
        required: true,
    },
    rank: {
        type: String,
        enum: ['USER', 'ADMIN'],
        default: 'USER',
        required: true,
    },
});

export default model('Author', AuthorSchema);
