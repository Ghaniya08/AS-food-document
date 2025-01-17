const Product = {
    name: 'product',
    title: 'Food Item', 
    type: 'document',
    fields: [
      {
        name: 'title', 
        title: 'Title', 
        type: 'string', 
        description: 'Name of the food item',
    },
    {
        name: 'description',
        title: 'Description'
        ,type: 'text'
        ,description: 'Detailed description of the food item'
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
        description: 'Price of the food item'
    },
    {
        name: 'stock',
        title: 'In Stock',
        type: 'boolean',
        description: 'Availability of the food item',
    },
    {
        name: 'rating', 
        title: 'Rating', 
        type: 'number',
        description: 'Average rating of the food item',
    },
    {
        name: 'review', 
        title: 'Reviews', 
        type: 'number', 
        description: 'Number of reviews for the food item',
    },
    {
        name: 'image', 
        title: 'Image', 
        type: 'url', 
        description: 'Image URL of the food item'
    },
    {
        name: 'category', 
        title: 'Category', 
        type: 'string', 
        description: 'Category of the food item (e.g., Sweet, Savory)',
      options: {list: [{ title: 'Sweet', value: 'Sweet' },{ title: 'Savory', value: 'Savory' },],},}, 
    {
        name: 'id', 
        title: 'ID', 
        type: 'string', 
        description: 'Unique identifier for the food item',
    },
  ]}
  
const Blog = {
    name: 'blog',
    type: 'document',
    title: 'Blog',
    fields: [
      {
        name: 'title',
        type: 'string',
        title: 'Blog Title',
      },
      {
        name: 'content',
        type: 'text',
        title: 'Content',
      },
      {
        name: 'author',
        type: 'string',
        title: 'Author',
      },
      {
        name: 'publishedDate',
        type: 'datetime',
        title: 'Published Date',
      },
    ],
  };
  

const Orders = {
    name: 'order',
    type: 'document',
    title: 'Order',
    fields: [
      {
        name: 'userId',
        type: 'string',
        title: 'User ID',
      },
      {
        name: 'productId',
        type: 'string',
        title: 'Product ID',
      },
      {
        name: 'quantity',
        type: 'number',
        title: 'Quantity',
      },
      {
        name: 'totalPrice',
        type: 'number',
        title: 'Total Price',
      },
      {
        name: 'orderDate',
        type: 'datetime',
        title: 'Order Date',
      },
    ],
  };
  

const User = {
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
      },
      {
        name: 'password',
        type: 'string',
        title: 'Password',
      },
      {
        name: 'authId',
        type: 'string',
        title: 'Auth ID',
      },
    ],
  };
  