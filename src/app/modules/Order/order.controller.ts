import { Request, Response } from 'express';
import { OrderServices } from './order.service';

// Create a new order
const createOrder = async (req: Request, res: Response) => {
  try {
    const orderData = req.body;
    const result = await OrderServices.createOrderIntoDB(orderData);
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to create order',
      error: error,
    });
  }
};

// Calculate total revenue
const calculateRevenue = async (req: Request, res: Response) => {
  try {
    const result = await OrderServices.calculateTotalRevenueFromDB();
    res.status(200).json({
      success: true,
      message: 'Revenue calculated successfully',
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Failed to calculate revenue',
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  calculateRevenue,
};