import {
    useGetAllProductsQuery,
    useGetProductQuery,
} from "../features/apiSlice";


export const Data = () => {
    const { data: allProductsData } = useGetAllProductsQuery();
    const { data: singleProductData } = useGetProductQuery("iphone");

    // console.log(allProductsData.products);
    // console.log(singleProductData);

    const allProducts = allProductsData.products;
    console.log(allProducts);
    return (
        <div>
            {allProducts.map(product => (
                <div key={product.id}>
                    <h2>{product.title}</h2>
                    <img src={product.thumbnail} alt={product.title} />
                    <p>Price: {product.price}</p>
                    <p>Rating: {product.rating}</p>
                    <p>Stock: {product.stock}</p>
                    <button>Add to cart</button>
                </div>
            ))}
        </div>
    );

};