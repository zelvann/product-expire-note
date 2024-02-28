import {NextApiRequest, NextApiResponse} from "next";
import {_product, ResponseData} from "@/types";
import _create from "@/services/create";
import _delete from "@/services/delete";
import _update from "@/services/update";
import product_variant from "@/services/product";
import query from "@/services/list";
import _expired from "@/services/expired";

const handler = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) : Promise<void> => {
  if(req.query.list && req.method === 'POST') {
    // http://localhost:3000/api/list/product/create
    if(req.query.list[2] === 'create') {
      const attribute: _product = req.body;
      try {
        const result = await _create(attribute);
        res.status(201).json({
          message: 'Produk telah berhasil ditambahkan',
          data: result
        })
      } catch (error) {
        // console.error(error);
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
        // console.error(error);
        res.status(500).json({
          message: 'Gagal menghapus produk',
          error_info: error
        })
      }
    }
    // http://localhost:3000/api/list/product/update/[id]
    else if(req.query.list[2] === 'update') {
      try {
        const result = await _update(req.query.list[3]);
        res.status(201).json({
          message: 'Produk telah berhasil diupdate',
          data: result
        })
      } catch (error) {
        // console.error(error)
        res.status(500).json({
          message: 'Gagal mengupdate produk',
          error_info: error
        })
      }
    } else {
      res.status(404).json({
        message: 'Error'
      })
    }
  }
  else if(req.query.list && req.method === 'GET') {
    // http://localhost:3000/api/list/product/detail/[product.id]
    if(req.query.list.length === 4 && req.query.list[1] === 'product' && req.query.list[2] === 'detail') {
      try {
        const result = await product_variant(req.query.list[3]);
        res.status(200).json({
          message: 'berhasil mengambil data berdasarkan id',
          data: result
        });
      } catch (error) {
        // console.error();
        res.status(500).json({
          message: 'gagal mengambil data berdasarkan id',
          error_info: error
        })
      }
    } 
    // http://localhost:3000/api/list/product/filter
    else if(req.query.list[1] === 'product' && req.query.list[2] === 'filter') {
      try {
        const result = await _expired();
        res.status(200).json({
          message: 'berhasil mengambil data berdasarkan tanggal expire',
          data: result
        })
      } catch(error) {
        // console.error(error);
        res.status(500).json({
          message: 'gagal mengambil data berdasarkan tanggal expire',
          error_info: error
        })
      }
    } 
    // http://localhost:3000/api/list
    else if(req.query.list[0] === 'list') {
      try {
        const result = await query();
        res.status(200).json({
          message: 'berhasil mengambil data',
          data: result
        })
      } catch (error) {
        // console.error(error);
        res.status(500).json({
          message: 'gagal mengambil data',
          error_info: error
        })
      }
    } else {
      res.status(404).json({
        message: 'Error'
      })
    }
  }
  else {
    res.status(404).json({
      message: 'Error'
    })
  }
}

export default handler;