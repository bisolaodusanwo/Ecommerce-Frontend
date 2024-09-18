//giving it a tailwind styling 
const Goods = () => {
    return (
        <>
            <main className="bg-white py-8">
                <section className="max-w-screen-xl mx-auto px-4">
                    <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-md">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-bold text-gray-900">Total price:</span>
                            <span className="text-lg font-bold text-gray-900">0$</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-gray-700">Cart items:</span>
                            <span className="text-gray-700">0</span>
                        </div>
                    </div>
                    <div className="mt-6">
                       
                    </div>
                </section>
            </main>
        </>
    );
};

//exporting Goods to use it in App.tsx
export default Goods;
