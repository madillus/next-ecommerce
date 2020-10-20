import postgres from 'postgres';
import dotenv from 'dotenv';

dotenv.config();

const sql = postgres();

export async function getProducts() {
  const products = await sql`
SELECT * from products;`;

  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  });
}

export async function getProductById(id) {
  if (!/^\d+$/.test(id)) return undefined;

  const products = await sql`
    SELECT * from products WHERE id = ${id};
  `;

  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  });
}

export async function updateProductById(id, product) {

  if (!/^\d+$/.test(id)) return undefined;

  const products = await sql`
    UPDATE products
      SET name = ${product.name}
      WHERE id = ${id}
      RETURNING *;
  `;

  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  });
}

export async function deleteProductById(id) {
  // Return undefined if the id is not
  // in the correct format
  if (!/^\d+$/.test(id)) return undefined;

  const products = await sql`
    DELETE FROM products
      WHERE id = ${id}
      RETURNING *;
  `;

  return products.map((product) => {
    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  });
}

// export const products = [
//   { id: '1', name: 'Baseball', price: '20', image: 'BaseballHatLogo.png' },
//   { id: '2', name: 'Trucker', price: '20', image: 'BaseballHatLogo.png' },
//   { id: '3', name: 'Snapback', price: '20', image: 'BaseballHatLogo.png' },
//   { id: '4', name: 'Strapback', price: '20', image: 'BaseballHatLogo.png' },
//   { id: '5', name: 'Flex fit', price: '20', image: 'BaseballHatLogo.png' },
//   { id: '6', name: 'Five Panel', price: '20', image: 'BaseballHatLogo.png' },
// ];
