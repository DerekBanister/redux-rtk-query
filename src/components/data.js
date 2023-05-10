import { useGetAllProductsQuery } from "../features/apiSlice";

export const Data = () => {

    const { data } = useGetAllProductsQuery();

    console.log(data);




    return <div> Data:</div>
};