function SurveySummary({ formData, movie, onReset }) {
  return (
    <div className="px-6 py-6 space-y-6">
      <div className="rounded-lg border border-green-200 bg-green-50 p-4 space-y-3 text-left">
        <p className="flex items-center gap-2 text-green-700 font-medium">
          <span>✅</span> ส่งแบบสำรวจสำเร็จ!
        </p>
        <div className="space-y-2 text-sm">
          <p>
            <span className="text-gray-500">ชื่อ:</span>{' '}
            <span className="text-gray-900">{formData.name}</span>
          </p>
          <p>
            <span className="text-gray-500">อีเมล:</span>{' '}
            <span className="text-gray-900">{formData.email}</span>
          </p>
          <p>
            <span className="text-gray-500">หนังที่เลือก:</span>{' '}
            <span className="text-purple-700 font-medium">{movie?.title}</span>
          </p>
        </div>
        {formData.comment && (
          <div className="space-y-1 border-t border-green-200 pt-3">
            <p className="text-gray-500 text-sm">ความคิดเห็น:</p>
            <p className="rounded-md bg-white px-3 py-2 text-sm text-gray-900">{formData.comment}</p>
          </div>
        )}
      </div>

      <button
        type="button"
        onClick={onReset}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-gray-900 px-4 py-3 text-sm font-medium text-white hover:bg-black"
      >
        <span>🔄</span> ทำแบบสำรวจใหม่
      </button>
    </div>
  )
}

export default SurveySummary
