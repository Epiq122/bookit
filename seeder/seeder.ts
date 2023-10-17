import Room from "../backend/models/room";
import mongoose from "mongoose";
import {rooms} from "@/seeder/data";

// require('dotenv').config({ path: 'next.config.js' })

const seedRooms = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/Bookit",);

        await Room.deleteMany();
        console.log("Rooms are deleted");

        await Room.insertMany(rooms);
        console.log("Rooms are added");

        process.exit();
    } catch (error) {
        console.log(error);
        process.exit();
    }
};

seedRooms();
