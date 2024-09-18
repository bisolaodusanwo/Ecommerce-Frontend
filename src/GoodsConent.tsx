import React, { useEffect, useState } from "react";
import axios from "axios";

interface Goods {
    name: string;
    price: number;
    description: string;
}

const GoodsContent = () => {
    const [data, setData] = useState<Goods[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/v1/goods');
            console.log('Full API Response:', response);

            const goodsArray = response.data.data;
            console.log('Goods Array:', goodsArray);

            if (Array.isArray(goodsArray)) {
                setData(goodsArray);
            } else {
                throw new Error('API response does not contain an array');
            }
            setLoading(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError('An unknown error occurred');
            }
            setLoading(false);
        }
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-white">
            {data.map((item) => (
                <div 
                    key={item.name} 
                    className="bg-gray-900 text-white rounded-lg shadow-lg p-6 transform transition duration-500 hover:scale-105"
                >
                    <div className="mb-2 text-xl font-bold">Name: {item.name}</div>
                    <div className="mb-2 text-lg">Price: ${item.price}</div>
                    <div className="text-md">Description: {item.description}</div>
                </div>
            ))}
        </div>
    );
};

export default GoodsContent;








