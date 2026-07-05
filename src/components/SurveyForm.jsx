import TextField from './TextField'
import RadioGroup from './RadioGroup'

function SurveyForm({ formData, errors, movies, onFieldChange, onSubmit, onReset }) {
  const movieOptions = movies.map((movie) => ({
    value: movie.id,
    primary: `${movie.title} (${movie.year})`,
    secondary: `Director: ${movie.director}`,
  }))

  return (
    <form onSubmit={onSubmit} noValidate>
      <div className="px-6 py-6 space-y-6">
        <TextField
          label="ชื่อ"
          name="name"
          required
          value={formData.name}
          onChange={(value) => onFieldChange('name', value)}
          placeholder="กรุณากรอกชื่อของคุณ"
          error={errors.name}
        />

        <TextField
          label="อีเมล"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={(value) => onFieldChange('email', value)}
          placeholder="example@email.com"
          error={errors.email}
        />

        <RadioGroup
          label="เลือกหนังที่คุณชอบ"
          name="movie"
          required
          options={movieOptions}
          value={formData.movieId}
          onChange={(value) => onFieldChange('movieId', value)}
          error={errors.movieId}
        />

        <TextField
          label="ความคิดเห็นเกี่ยวกับหนัง"
          name="comment"
          multiline
          value={formData.comment}
          onChange={(value) => onFieldChange('comment', value)}
          placeholder="พิมพ์ความคิดเห็นของคุณที่นี่..."
        />
      </div>

      <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200">
        <button
          type="button"
          onClick={onReset}
          className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <span>🔄</span> รีเซ็ต
        </button>
        <button
          type="submit"
          className="flex items-center gap-2 rounded-md bg-linear-to-r from-purple-700 to-indigo-600 px-4 py-2 text-sm font-medium text-white hover:opacity-90"
        >
          <span>📨</span> ส่งแบบสำรวจ
        </button>
      </div>
    </form>
  )
}

export default SurveyForm
