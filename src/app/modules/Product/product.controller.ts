import { Request, Response } from "express";
import { ProductServices } from "./product.service";

// Create a new product
const createProduct = async (req: Request, res: Response) => {
  try {
    const productData = req.body;
    const result = await ProductServices.createProductIntoDB(productData);
    res.status(201).json({
      success: true,
      message: "Book created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create book",
      error: error,
    });
  }
};

// Get all products or search products
const getAllProducts = async (req: Request, res: Response) => {
  try {
    const { searchTerm } = req.query;
    const result = await ProductServices.getAllProductsFromDB(
      searchTerm as string
    );
    res.status(200).json({
      success: true,
      message: "Books retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve books",
      error: error,
    });
  }
};

// Get a single product
const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const result = await ProductServices.getSingleProductFromDB(productId);
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book retrieved successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to retrieve book",
      error: error,
    });
  }
};

// Update a product
const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    const updateData = req.body;
    const result = await ProductServices.updateProductInDB(
      productId,
      updateData
    );
    if (!result) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to update book",
      error: error,
    });
  }
};

// Delete a product
const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;
    await ProductServices.deleteProductFromDB(productId);
    res.status(200).json({
      success: true,
      message: "Book deleted successfully",
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to delete book",
      error: error,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
