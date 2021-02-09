import React, {useState} from 'react';

const Products = ({addToCart}) => {

    const [products] = useState([
        {
          name: "killer jeans",
          cost: 10.99,
          image: "https://5.imimg.com/data5/NI/BP/HW/ANDROID-37085281/product-jpeg-500x500.jpg",
        },
        {
          name: "Nike Shoes",
          cost: 2.99,
          image: "https://4.imimg.com/data4/RE/BI/ANDROID-41682785/product-500x500.jpeg",
        },
        {
          name: "Wranglet Jacket",
          cost: 22.99,
          image: "https://images.wrangler.com/is/image/WranglerBrand/mens-flannel-lined-denim-jacket?$SCALE%2DORIGINAL$",
        },
        {
          name: "Levis Jacket",
          cost: 23.99,
          image: "https://lsco.scene7.com/is/image/lsco/levis/clothing/723340144-alt1-pdp.jpg?$qv_desktop_full$",
        },
        {
          name: "Gucci Belts",
          cost: 12.99,
          image: "https://images.selfridges.com/is/image/selfridges/141-77035800-400593AP00T_NERO_M?$PDP_M_ZOOM$",
        },
        {
          name: "Wrogn Shirts",
          cost: 1.99,
          image: "https://usplworld-static.s3.ap-south-1.amazonaws.com/static/img/wrogn/products/product_detail/WHSH0052/1.jpeg",
        },
        {
          name: "Turtle t-shirt",
          cost: 1.90,
          image: "https://images-na.ssl-images-amazon.com/images/I/712SMoTKAhL._AC_UX425_.jpg",
        },
      ]);

   
    
       return(
       <>
       
      <h1>Products</h1>
      <div className="products">
       {products.map((product,idx) => (
         <div className="product" key={idx}>
           <h3>{product.name}</h3>
           <h4>${product.cost}</h4>
           <img src =  {product.image}/>
            <button onClick={() => addToCart(product)}> Add to Cart</button>

           
         </div>
       ))}
      </div> 
      </>
       )


      
}

export default Products;