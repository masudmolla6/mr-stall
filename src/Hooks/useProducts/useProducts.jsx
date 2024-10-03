import React from 'react';
import useAxiosPublic from '../useAxiosPublic/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useProducts = () => {
    const axiosPublic = useAxiosPublic();
    const { data: products = [],refetch,isPending:loading } = useQuery({
        queryKey: ["products"],
        queryFn: async () => {
            const res = await axiosPublic.get("/products");
            return res.data;
        }
    })
    return [products, refetch, loading];
};

export default useProducts;