const baseInputClasses =
  'w-full rounded-md border px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500'

function TextField({
  label,
  name,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  error,
  multiline = false,
  rows = 4,
}) {
  const inputClasses = `${baseInputClasses} ${error ? 'border-red-500' : 'border-gray-300'}`

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-black text-left">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          rows={rows}
          className={`${inputClasses} resize-y`}
        />
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder={placeholder}
          className={inputClasses}
        />
      )}
      {error && <p className="text-left text-sm text-red-500">{error}</p>}
    </div>
  )
}

export default TextField
