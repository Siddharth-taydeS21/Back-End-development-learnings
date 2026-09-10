import mongoose from "mongoose";
import { Product } from "./product.models";

const orderItemSchema = new mongoose.Schema({
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    },
    quantity: {
        type: Number,
        default: 0,
        required: true
    }
})

const orderSchema = new mongoose.Schema({
    // orderPrice
    orderPrice: {
        type: Number,
        required: true
    },
    // customer
    customer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    // oderItems : [] // orderItemSchema = productId-ref, quantity
    orderItems: {
        type: [orderItemSchema]
    },
    // address
    address: {
        type: String,
        required: true,
    },
    // status : string, enum, default
    status: {
        type: String,
        enum: ["PENDING", "CANCELED", "DELIVERED"],
        default: "PENDING"
    }
}, { timestamps: true })

export const Order = mongoose.model('Order', orderSchema);