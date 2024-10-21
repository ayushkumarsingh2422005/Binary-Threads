import mongoose from "mongoose";

// base user schema

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    role: {
        type: String,
        required: true,
        enum : ['custumer', 'admin', 'diliverypartner']
    },
    isActivated: {
        type: Boolean,
        default: false
    }
});


const custumerSchema = new mongoose.Schema({
    ...userSchema.obj,
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'custumer',
        enum : ['custumer']
    },
    liveLocation: {
        latitude: {
            type: Number,
            required: true
        }, 
        longitude: {
            type: Number,
            required: true
        }
    },
    address : {
        type : String
    }
});

const deliveryPartnerSchema = new mongoose.Schema({
    ...userSchema.obj,
    phone: {
        type: Number,
        required: true,
        unique: true
    },
    role: {
        type: String,
        default: 'custumer',
        enum : ['custumer']
    },
    liveLocation: {
        latitude: {
            type: Number,
            required: true
        }, 
        longitude: {
            type: Number,
            required: true
        }
    },
    address : {
        type : String
    }
});