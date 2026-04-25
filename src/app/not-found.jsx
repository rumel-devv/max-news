import React from 'react';
import Link from 'next/link';

const NotFound = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="text-center max-w-xl">
                <h1 className="text-6xl font-bold text-red-600 mb-2">
                    MAX NEWS
                </h1>
                <p className="text-gray-500 mb-6">
                    Stay updated. Stay ahead.
                </p>
                <h2 className="text-7xl font-bold text-gray-800 mb-4">
                    404
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                    Oops! The page you’re looking for doesn’t exist or has been moved.
                </p>
                <div className="flex justify-center gap-4">
                    <Link href="/">
                        <button className="px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
                            Go Home 🏠
                        </button>
                    </Link>
                    <Link href="/news">
                        <button className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-200 transition">
                            Browse News 📰
                        </button>
                    </Link>
                </div>
                <p className="mt-8 text-sm text-gray-400">
                    Max News © {new Date().getFullYear()}
                </p>
            </div>
        </div>
    );
};

export default NotFound;