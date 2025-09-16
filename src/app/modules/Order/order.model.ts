import { Schema, model } from 'mongoose';
import { TOrder } from './order.interface';

const orderSchema = new Schema<TOrder>(
  {
    email: { type: String, required: true },
    product: { type: Schema.Types.ObjectId, required: true, ref: 'Product' },
    quantity: { type: Number, required: true, min: 1 },
    totalPrice: { type: Number, required: true },
  },
  {
    timestamps: true,
  },
);

export const Order = model<TOrder>('Order', orderSchema);