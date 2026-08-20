const EmployeeFormSelect = ({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
  error,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-[var(--color-text)]"
      >
        {label}

        {required && (
          <span className="ml-1 text-[var(--color-danger)]">
            *
          </span>
        )}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="
          w-full rounded-[var(--radius-input)]
          border border-[var(--color-border)]
          bg-[var(--color-surface)]
          px-4 py-2.5
          text-sm text-[var(--color-text)]
          outline-none transition
          focus:border-[var(--color-primary)]
          focus:ring-2
          focus:ring-[var(--color-primary)]/10
        "
      >
        <option value="">
          Select {label.toLowerCase()}
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <p className="text-xs text-[var(--color-danger)]">
          {error}
        </p>
      )}
    </div>
  );
};

export default EmployeeFormSelect;