const EmployeeFormInput = ({
  label,
  name,
  error,
  required = false,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={name}
        className="text-sm font-medium text-[var(--color-text)]"
      >
        {label}

        {required && <span className="ml-1 text-[var(--color-danger)]">*</span>}
      </label>

      <input
        id={name}
        name={name}
        required={required}
        {...props}
        className="
          w-full rounded-[var(--radius-input)]
          border border-[var(--color-border)]
          bg-[var(--color-surface)]
          px-4 py-2.5
          text-sm text-[var(--color-text)]
          outline-none transition
          placeholder:text-[var(--color-text-muted)]
          focus:border-[var(--color-primary)]
          focus:ring-2
          focus:ring-[var(--color-primary)]/10
        "
      />

      {error && <p className="text-xs text-[var(--color-danger)]">{error}</p>}
    </div>
  );
};

export default EmployeeFormInput;
