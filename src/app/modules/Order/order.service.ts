import { Product } from '../Product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

// Create a new order with inventory check
const createOrderIntoDB = async (orderData: TOrder) => {
  const { product: productId, quantity: orderQuantity } = orderData;

  // Find the product in the database
  const product = await Product.findById(productId);

  // Check if product exists
  if (!product) {
    throw new Error('Product not found!');
  }

  // Check for sufficient stock
  if (product.quantity < orderQuantity) {
    throw new Error('Insufficient stock!');
  }

  // Update product quantity and inStock status
  product.quantity -= orderQuantity;
  if (product.quantity === 0) {
    product.inStock = false;
  }
  await product.save();

  // Create the order
  const result = await Order.create(orderData);
  return result;
};

// Calculate total revenue
const calculateTotalRevenueFromDB = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);
  // Return the calculated revenue or 0 if no orders exist
  return result.length > 0 ? result[0] : { totalRevenue: 0 };
};

export const OrderServices = {
  createOrderIntoDB,
  calculateTotalRevenueFromDB,
};