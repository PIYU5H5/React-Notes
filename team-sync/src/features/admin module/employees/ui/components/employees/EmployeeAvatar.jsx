import { useState } from "react";

const EmployeeAvatar = ({ value, onChange }) => {
  const [preview, setPreview] = useState(value || "");

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setPreview(imageUrl);
    onChange(file);
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-medium text-[var(--color-text)]">
        Profile Picture
      </label>

      <div className="flex items-center gap-5">
        {/* Preview */}
        <div className="
          flex h-20 w-20
          shrink-0
          items-center justify-center
          overflow-hidden
          rounded-full
          bg-[var(--color-primary)]/10
          text-2xl
          font-semibold
          text-[var(--color-primary)]
        ">
          {preview ? (
            <img
              src={preview}
              alt="Profile preview"
              className="h-full w-full object-cover"
            />
          ) : (
            "?"
          )}
        </div>

        <div>
          <label
            htmlFor="avatar"
            className="
              inline-flex
              cursor-pointer
              rounded-[var(--radius-input)]
              border border-[var(--color-border)]
              bg-[var(--color-surface)]
              px-4 py-2
              text-sm
              font-medium
              text-[var(--color-text)]
              transition
              hover:bg-[var(--color-background)]
            "
          >
            Choose Image
          </label>

          <input
            id="avatar"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <p className="mt-2 text-xs text-[var(--color-text-muted)]">
            JPG, PNG or WEBP. Max 2MB.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAvatar;