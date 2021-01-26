import Product from "../models/product";
import {
  getAll,
  insert,
  remove,
  updateCategory,
  getByCategory,
  update,
} from "../services/productService";

export const getProducts = async (req, res) => {
  getAll()
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).send(error.writeErrors[0].errmsg);
    });
};

export const insertProduct = async (req, res) => {
  insert(
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.category
  )
    .then((response) => {
      res.status(201).send("Product created");
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

export const deleteProduct = async (req, res) => {
  remove(req.body.id)
    .then((response) => {
      res.status(200).send("Product deleted");
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

export const updateProduct = async (req, res) => {
  update(
    req.body.id,
    req.body.title,
    req.body.description,
    req.body.price,
    req.body.category
  )
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

export const changeCategory = async (req, res) => {
  updateCategory(req.body.id, req.body.category)
    .then((response) => {
      res.status(200).send("Category updated");
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};

export const findByCategories = async (req, res) => {
  getByCategory(req.body.category)
    .then((response) => {
      res.status(200).send(response);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
};
