import { NextApiRequest, NextApiResponse } from 'next';
import { getProductById, updateProductById, deleteProductById } from '../../../util/database'

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse
  )

{const productId = request.query.id as string;

  if (!/^\d+$/.test(productId)) {
    response.statusCode = 404;
    response.setHeader('Content-Type', 'application/json');
    return response.end(JSON.stringify({ errors: 'Not found' }));
  }

  let product = {};

  if (request.method === 'GET') {
    product = await getProductById(productId);
  } else if (request.method === 'PATCH') {
    const newProduct = request.body.user;
    product = await updateProductById(productId, newProduct);
  } else if (request.method === 'DELETE') {
    product = await deleteProductById(productId);
  }


  response.statusCode = 200;
  response.setHeader('Content-Type', 'application/json');
  response.end(JSON.stringify({ product: product }));
}



//const userid= request.user.id
//const users= await get users
//(!/^\d+$/.test(user.id))
