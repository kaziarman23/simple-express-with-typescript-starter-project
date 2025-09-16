import { Schema, model } from 'mongoose';
import { TProduct } from './product.interface';

const productSchema = new Schema<TProduct>(
  {
    title: { type: String, required: true, unique: true },
    author: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    category: {
      type: String,
      enum: ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
      required: true,
    },
    description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 0 },
    inStock: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  },
);

export const Product = model<TProduct>('Product', productSchema);