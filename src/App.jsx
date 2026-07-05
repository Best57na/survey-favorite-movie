import { useState } from 'react'
import SurveyCard from './components/SurveyCard'
import SurveyForm from './components/SurveyForm'
import SurveySummary from './components/SurveySummary'
import { movies } from './constants/movies'
import { validateSurveyForm, hasValidationErrors } from './utils/validation'
import './App.css'

const initialFormData = {
  name: '',
  email: '',
  movieId: '',
  comment: '',
}

function App() {
  const [formData, setFormData] = useState(initialFormData)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validateSurveyForm(formData)
    setErrors(validationErrors)
    if (!hasValidationErrors(validationErrors)) {
      setSubmitted(true)
    }
  }

  const handleReset = () => {
    setFormData(initialFormData)
    setErrors({})
    setSubmitted(false)
  }

  const selectedMovie = movies.find((movie) => movie.id === formData.movieId)

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-10 px-4">
      <SurveyCard>
        {submitted ? (
          <SurveySummary formData={formData} movie={selectedMovie} onReset={handleReset} />
        ) : (
          <SurveyForm
            formData={formData}
            errors={errors}
            movies={movies}
            onFieldChange={handleFieldChange}
            onSubmit={handleSubmit}
            onReset={handleReset}
          />
        )}
      </SurveyCard>
    </div>
  )
}

export default App
