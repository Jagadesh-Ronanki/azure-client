import { useState, useEffect } from 'react';
import { columns } from './components/columns.jsx';
import { DataTable } from './components/data-table.jsx';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    
    fetchProducts();
  }, [setProducts]);

  return (
    <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
      <div className="flex items-center justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Product Management</h2>
          <p className="text-muted-foreground">
            Here&apos;s a list of your products
          </p>
        </div>
      </div>
      <DataTable
        data={products}
        columns={columns}
        setProducts={setProducts}
      />
    </div>
  );
};

export default ProductPage;