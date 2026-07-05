import { movies } from './movies-list'

function main() {
    return (
        <div className="w-full max-w-lg mx-auto rounded-xl shadow-lg overflow-hidden bg-white">
            <div className="bg-gradient-to-r from-purple-700 to-indigo-600 px-6 py-1 flex items-center gap-2">
                <span className="text-white text-xl">🎬</span>
                <h1 className="text-white text-xl font-bold">Movie Survey</h1>
            </div>

            <div className="px-6 py-6 space-y-6">
                <div className="space-y-1">
                    <label className="block text-sm font-medium text-black text-left">
                        ชื่อ <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        placeholder="กรุณากรอกชื่อของคุณ"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="space-y-1">
                    <label className="block text-sm font-medium text-black text-left">
                        อีเมล <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        placeholder="example@email.com"
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                <div className="space-y-3">
                    <label className="block text-sm font-medium text-black text-left">
                        เลือกหนังที่คุณชอบ <span className="text-red-500">*</span>
                    </label>
                    <div className="space-y-4">
                        {movies.map((movie) => (
                            <label
                                key={movie.title}
                                className="flex items-start gap-3 text-left"
                            >
                                <input
                                    type="radio"
                                    name="favorite-movie"
                                    className="mt-1 h-4 w-4 accent-black"
                                />
                                <span>
                                    <span className="block text-sm text-gray-900">
                                        {movie.title} ({movie.year})
                                    </span>
                                    <span className="block text-sm text-gray-500">
                                        Director: {movie.director}
                                    </span>
                                </span>
                            </label>
                        ))}
                    </div>
                </div>

                <div className="space-y-1">
                    <label className="block text-sm font-medium text-black text-left">
                        ความคิดเห็นเกี่ยวกับหนัง
                    </label>
                    <textarea
                        placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
                        rows={4}
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm placeholder-gray-400 resize-y focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                </div>
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
                <button
                    type="button"
                    className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    <span>🔄</span> รีเซ็ต
                </button>
                <button
                    type="button"
                    className="flex items-center gap-2 rounded-md bg-gradient-to-r from-purple-700 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
                >
                    <span>📨</span> ส่งแบบสำรวจ
                </button>
            </div>
        </div>
    )
}

export default main
