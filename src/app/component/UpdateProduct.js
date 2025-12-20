import React from 'react'
import { updateSingleProduct } from '../actions/updateProduct'
export default function UpdateSingleProduct({id,data}) {
    const updateData=updateSingleProduct.bind(null,id)
  return (
    <form action={updateData} className="space-y-4 max-w-md">
    <input
      name="title"
      placeholder="Title"
      defaultValue={data?.title || ""}
      required
    />

    <input
      name="price"
      type="number"
      step="0.01"
      placeholder="Price"
      defaultValue={data?.price ?? ""}
      required
    />

    <textarea
      name="description"
      placeholder="Description"
      defaultValue={data?.description || ""}
      required
    />

    <input
      name="category"
      placeholder="Category"
      defaultValue={data?.category || ""}
      required
    />

    <input
      name="image"
      placeholder="Image URL"
      defaultValue={data?.image || ""}
      required
    />

    <input
      name="rate"
      type="number"
      step="0.1"
      min="0"
      max="5"
      placeholder="Rating"
      defaultValue={data?.rating?.rate ?? ""}
      required
    />

    <input
      name="count"
      type="number"
      min="0"
      placeholder="Rating Count"
      defaultValue={data?.rating?.count ?? ""}
      required
    />

    <button type="submit">
      {data ? "Update Product" : "Create Product"}
    </button>
  </form>
  )
}
