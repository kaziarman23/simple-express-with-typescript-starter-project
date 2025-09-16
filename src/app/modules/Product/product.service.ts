import { TProduct } from './product.interface';
import { Product } from './product.model';

// Create a new product
const createProductIntoDB = async (productData: TProduct) => {
  const result = await Product.create(productData);
  return result;
};

// Get all products (and search)
const getAllProductsFromDB = async (searchTerm?: string) => {
  if (searchTerm) {
    const regex = new RegExp(searchTerm, 'i'); // case-insensitive search
    const result = await Product.find({
      $or: [{ title: regex }, { author: regex }, { category: regex }],
    });
    return result;
  }
  return await Product.find();
};

// Get a single product by ID
const getSingleProductFromDB = async (id: string) => {
  const result = await Product.findById(id);
  return result;
};

// Update a product by ID
const updateProductInDB = async (id: string, updateData: Partial<TProduct>) => {
  const result = await Product.findByIdAndUpdate(id, updateData, { new: true });
  return result;
};

// Delete a product by ID
const deleteProductFromDB = async (id: string) => {
  const result = await Product.findByIdAndDelete(id);
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getAllProductsFromDB,
  getSingleProductFromDB,
  updateProductInDB,
  deleteProductFromDB,
};