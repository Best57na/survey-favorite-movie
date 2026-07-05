const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateName(name) {
  if (!name.trim()) return 'โปรดใส่ชื่อของคุณ'
  return ''
}

export function validateEmail(email) {
  if (!email.trim()) return 'โปรดใส่อีเมลของคุณ'
  if (!EMAIL_PATTERN.test(email)) return 'รูปแบบอีเมลไม่ถูกต้อง'
  return ''
}

export function validateMovieId(movieId) {
  if (!movieId) return 'กรุณาเลือกหนังที่คุณชอบ'
  return ''
}

export function validateSurveyForm({ name, email, movieId }) {
  return {
    name: validateName(name),
    email: validateEmail(email),
    movieId: validateMovieId(movieId),
  }
}

export function hasValidationErrors(errors) {
  return Object.values(errors).some(Boolean)
}
