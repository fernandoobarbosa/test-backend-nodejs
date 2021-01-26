import Product from "../models/product";

export const getAll = async () => {
  const products = await Product.find();
  return products;
};

export const insert = async (title, description, price, category) => {
  const product = await Product.create({
    title: title,
    description: description,
    price: price,
    category: category,
  });
  return product;
};

export const remove = async (id) => {
  const product = await Product.deleteOne({
    _id: id,
  });
  return product;
};

export const updateCategory = async (id, category) => {
  const product = await Product.updateOne({ _id: id }, { category: category });

  return product;
};

export const update = async (id, title, description, price, category) => {
  const product = await Product.updateOne(
    { _id: id },
    {
      title: title,
      description: description,
      price: price,
      category: category,
    }
  );

  return product;
};

export const getByCategory = async (category) => {
  const product = await Product.find({ category: category });
  return product;
};
