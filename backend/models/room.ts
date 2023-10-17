import mongoose, {Schema, Document} from "mongoose";


export interface IReview extends Document {
    user: mongoose.Schema.Types.ObjectId;
    rating: number;
    comment: string;

}

export interface IImage extends Document {
    public_id: string;
    url: string;

}

export interface ILocation extends Document {
    type: string;
    coordinates: number[];
    formattedAddress: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;

}

export interface IRoom extends Document {
    name: string;
    description: string;
    pricePerNight: number;
    address: string;
    location: ILocation;
    guestCapacity: number;
    numOfbeds: number;
    hasInternet: boolean;
    hasBreakfast: boolean;
    hasAirConditioned: boolean;
    hasPets: boolean;
    hasRoomCleaning: boolean;
    ratings: number;
    numOfReviews: number;
    images: IImage[];
    category: string;
    reviews: IReview[];
    user: mongoose.Schema.Types.ObjectId;
    createdAt: Date;


}


const roomSchema: Schema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter room name'],
        trim: true,
        maxlength: [200, 'Room name cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Please enter room description'],
    },
    pricePerNight: {
        type: Number,
        required: [true, 'Please enter room per night'],
        default: 0.0
    },
    address: {
        type: String,
        required: [true, 'Please enter address'],
    },
    location: {
        type: {
            type: String,
            enum: ['Point']
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        city: String,
        state: String,
        zipCode: String,
        country: String
    },
    guestCapacity: {
        type: Number,
        required: [true, 'Please enter room guest capacity'],
    },
    numOfbeds: {
        type: Number,
        required: [true, 'Please enter number of beds in room'],
    },
    hasInternet: {
        type: Boolean,
        default: false
    },
    hasBreakfast: {
        type: Boolean,
        default: false
    },
    hasAirConditioned: {
        type: Boolean,
        default: false
    },
    hasPets: {
        type: Boolean,
        default: false
    },
    hasRoomCleaning: {
        type: Boolean,
        default: false
    },
    ratings: {
        type: Number,
        default: 0,
    },
    numOfReviews: {
        type: Number,
        default: 0,
    },
    images: [
        {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please enter room category'],
        enum: {
            values: ['King', 'Single', 'Twins'],
            message: "Please select correct category for room"
        }
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type: String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
export default mongoose.models.Room || mongoose.model<IRoom>('Room', roomSchema);
