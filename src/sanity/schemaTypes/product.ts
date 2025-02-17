const Product = {
  name: "product",
  type: "document",
  title: "product",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Name of product",
    },
   
    
    {
      name: "description",
      type: "text",
      title: "Description of product",
    },

    {
      name: "images",
      type: "image",
      title: "Product Images",
    },

    {
      name: "slug",
      type: "slug",
      title: "Product Slug",
      options: {
        source: "name",
      },
    },

    {
      name: "price",
      type: "number",
      title: "Price",
    },

    {
      name: "category",
      type: "reference",
      title: "Product Category",
      to: [
        {
          type: "category",
        },
      ],
    },


  ],
};

export default Product;
