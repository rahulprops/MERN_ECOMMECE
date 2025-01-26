import React, { useEffect } from 'react';
import { useFetchProductQuery } from '../../features/apis/shopProduct';
import { useAddToCartMutation } from '../../features/apis/cartApi';

const FeatusProducts = () => {
  const { data: products, isSuccess, isLoading, error } = useFetchProductQuery();
   const [addToCart , {data:cart , isSuccess:cartSucess}]=useAddToCartMutation()
 const handleAddToCart=(productId)=>{
     let quantity=1
        addToCart({productId,quantity})
 } 
 useEffect(()=>{
    if(cartSucess){
      alert("addtocart add sucess")
    }
 },[cartSucess])

  // Handle loading and error states
  if (isLoading) return <div className="text-center py-10">Loading products...</div>;
  if (error) return <div className="text-center py-10 text-red-500">Failed to load products.</div>;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="text-center text-4xl font-bold text-gray-800 mb-12">Featured Products</div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {isSuccess &&
          products.map((item) => (
            <div
              key={item._id}
              className="bg-white border border-gray-200 rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <img
                src={item.image || 'https://via.placeholder.com/150'}
                alt={item.title || 'Product'}
                className="w-full h-64 object-cover rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{item.description}</p>
                <div className="flex items-center justify-between mt-4">
                  <div className="text-xl font-bold text-gray-800">
                    ${item.salePrice}{' '}
                    {item.salePrice < item.price && (
                      <span className="text-sm text-gray-500 line-through ml-2">${item.price}</span>
                    )}
                  </div>
                  <button onClick={()=>handleAddToCart(item._id)} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                    Add to Cart
                  </button>
                </div>
                {/* <div className="mt-2">{renderStars(item.rating)}</div> */}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FeatusProducts;
