import {Schema, model} from 'mongoose';

export const PlaceSchema: Schema = new Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    coordinates: {
        type: String,
        required: true,
    },
});

export default model('Place', PlaceSchema);
