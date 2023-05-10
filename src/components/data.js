import { useGetAllProductsQuery, useGetProductQuery } from "../features/apiSlice";

export const Data = () => {

    const { productsArr } = useGetAllProductsQuery();
    const { singleProduct } = useGetProductQuery("iphone");

    console.log(productsArr);
    console.log(singleProduct);




    return <div> Data:</div>
};