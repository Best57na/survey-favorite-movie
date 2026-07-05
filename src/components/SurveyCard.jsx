function SurveyCard({ children }) {
  return (
    <div className="w-full max-w-lg mx-auto rounded-xl shadow-lg overflow-hidden bg-white">
      <div className="bg-linear-to-r from-purple-700 to-indigo-600 px-6 py-4 flex items-center gap-2">
        <span className="text-white text-xl">🎬</span>
        <h1 className="text-white text-xl font-bold">Movie Survey</h1>
      </div>
      {children}
    </div>
  )
}

export default SurveyCard
