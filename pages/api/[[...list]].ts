import {NextApiRequest, NextApiResponse} from "next";
import {_product, ResponseData} from "@/types";
import _create from "@/services/create";
import _delete from "@/services/delete";

const handler = async(req: NextApiRequest, res: NextApiResponse<ResponseData>) :Promise<void> => {
  if(req.query.list && req.method === 'POST') {
    // ex: http://localhost:3000/api/list/product/create
    if(req.query.list[2] === 'create') {
      const attribute: _product = req.body;
      try {
        const result = await _create(attribute);
        res.status(201).json({
          message: 'Produk telah berhasil ditambahkan',
          data: result
        })
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: 'Gagal menambahkan produk',
          error_info: error
        })
      }
    }
    // http://localhost:3000/api/list/product/delete/[id]
    else if(req.query.list[2] === 'delete') {
      try {
        const result = await _delete(req.query.list[3]);
        res.status(201).json({
          message: 'Produk telah berhasil dihapus',
          data: result
        })
      } catch (error) {
        console.error(error);
        res.status(500).json({
          message: 'Gagal menghapus produk',
          error_info: error
        })
      }
    }
  }
}

export default handler;