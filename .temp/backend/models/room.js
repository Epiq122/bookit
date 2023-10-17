"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var roomSchema = new mongoose_1.Schema({
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
    numOfBeds: {
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
                type: mongoose_1.default.Schema.Types.ObjectId,
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
        type: mongoose_1.default.Schema.Types.ObjectId,
        ref: 'User',
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
exports.default = mongoose_1.default.models.Room || mongoose_1.default.model('Room', roomSchema);
