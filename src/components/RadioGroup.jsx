function RadioGroup({ label, name, options, value, onChange, error, required = false }) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-black text-left">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div
        className={`space-y-4 rounded-md border p-3 ${error ? 'border-red-500' : 'border-transparent'}`}
      >
        {options.map((option) => (
          <label key={option.value} className="flex items-start gap-3 text-left">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(event) => onChange(event.target.value)}
              className="mt-1 h-4 w-4 accent-black"
            />
            <span>
              <span className="block text-sm text-gray-900">{option.primary}</span>
              {option.secondary && (
                <span className="block text-sm text-gray-500">{option.secondary}</span>
              )}
            </span>
          </label>
        ))}
      </div>
      {error && <p className="text-left text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default RadioGroup
