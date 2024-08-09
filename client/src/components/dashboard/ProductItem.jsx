import React from "react";
import { Link } from "react-router-dom";
import { HiChevronDoubleRight } from "react-icons/hi";
import { formatPrice } from "../../utils/helpers";

const ProductItem = ({ product, update }) => {
  return (
    <div className="border border-white rounded-lg shadow-lg p-4">
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr>
            <th className="p-4 border-b-2 text-left">ID</th>
            <th className="p-4 border-b-2 text-left">Image</th>
            <th className="p-4 border-b-2 text-left">Name</th>
            <th className="p-4 border-b-2 text-left">Price</th>
            <th className="p-4 border-b-2 text-left">SKU</th>
            <th className="p-4 border-b-2 text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border-b text-left align-middle">1</td>
            <td className="p-4 border-b text-left align-middle">
              <img
                className="w-[100px] h-[100px] object-contain rounded"
                src={product.thumbnail}
                alt={product.name}
              />
            </td>
            <td className="p-4 border-b text-left align-middle">
              {product.name}
            </td>
            <td className="p-4 border-b text-left align-middle">
              {formatPrice(product.price)}
            </td>
            <td className="p-4 border-b text-left align-middle">
              {product.sku}
            </td>
            <td className="p-4 border-b text-left align-middle">
              {product.category}
            </td>
          </tr>
        </tbody>
      </table>
      {update && (
        <div className="mt-4 text-right">
          <Link
            className="bg-secondary-100 text-white px-4 py-1 rounded-md shadow-md"
            to={`/admin/dashboard/updateproducts/${product.id}`}
            state={{ product }}
          >
            Update
            <span className="inline-block ml-2">
              <HiChevronDoubleRight />
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProductItem;
