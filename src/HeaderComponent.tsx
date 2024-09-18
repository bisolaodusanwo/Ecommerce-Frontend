const Header = () => {
    return (
        <>
            <header>
                <nav className="bg-gray-700 dark:bg-slate-800 shadow-md">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between px-4 py-3 mx-auto">
                        <a href="#" className="text-white text-2xl font-bold">Akame Cart</a>
                        <div className="flex items-center space-x-4">
                            <ul className="flex space-x-6">
                                <li>
                                    <a href="#" className="text-white hover:text-blue-600">Home</a>
                                </li>
                                <li>
                                    <a href="#" className="text-white hover:text-blue-600">Link</a>
                                </li>
                                <li className="relative group">
                                    <a href="#" className="text-white hover:text-blue-600">Dropdown</a>
                                    <ul className="absolute hidden group-hover:block bg-white mt-2 space-y-2 p-2 rounded-md shadow-lg">
                                        <li>
                                            <a href="#" className="block text-black hover:text-blue-600">Order</a>
                                        </li>
                                        <li>
                                            <a href="#" className="block text-black hover:text-blue-600">Add to Cart</a>
                                        </li>
                                        <li>
                                            <hr className="border-gray-300"/>
                                        </li>
                                        <li>
                                            <a href="#" className="block text-black hover:text-blue-600">Feedback</a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="text-gray-500 cursor-not-allowed">Disabled</a>
                                </li>
                            </ul>
                            <form className="flex items-center space-x-2">
                                <input className="px-2 py-1 border rounded-md focus:outline-none focus:border-blue-600" type="text" placeholder="Search..." />
                                <button className="px-4 py-1 bg-slate-500 text-white rounded-md hover:bg-blue-700">Search</button>
                            </form>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    );
}

//export the component Header to use inside the App.tsx
export default Header;
