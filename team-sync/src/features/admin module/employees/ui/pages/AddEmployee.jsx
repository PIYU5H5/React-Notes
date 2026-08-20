import { Controller, useForm } from "react-hook-form";

import Button from "../components/Button";
import EmployeeFormInput from "../components/employees/EmployeeFormInput";
import EmployeeFormSelect from "../components/employees/EmployeeFormSelect";
import EmployeeAvatar from "../components/employees/EmployeeAvatar";
import { createEmployee } from "../../api/employeeApis";

const AddEmployee = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
    watch,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      employeeId: "",
      designation: "",
      department: "",
      role: "",
      status: "active",
      joiningDate: "",
      address: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      avatar: null,
    },
  });

  const password = watch("password");

  const onSubmit = async (data) => {
    console.log("Employee Data:", data);
    try {
      let res = await createEmployee(data);
      alert("done bhai");
      reset();
    } catch (error) {}
  };

  const handleCancel = () => {
    reset();
  };

  return (
    <section className="min-h-screen bg-[var(--color-background)] p-6 md:p-8">
      {/* Header */}
      <div className="mx-auto mb-8 max-w-4xl">
        <h1 className="text-2xl font-bold text-[var(--color-text)]">
          Add Employee
        </h1>

        <p className="mt-1 text-sm text-[var(--color-text-muted)]">
          Add a new employee to your organization.
        </p>
      </div>

      {/* Form Card */}
      <div
        className="
          mx-auto max-w-4xl
          rounded-[var(--radius-card)]
          border border-[var(--color-border)]
          bg-[var(--color-surface)]
          p-6 shadow-sm md:p-8
        "
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* ================= PROFILE ================= */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              Profile
            </h2>

            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Employee profile information.
            </p>

            <div className="mt-6">
              <Controller
                name="avatar"
                control={control}
                render={({ field }) => (
                  <EmployeeAvatar
                    value={field.value}
                    onChange={field.onChange}
                  />
                )}
              />
            </div>
          </div>

          <div className="mb-8 border-t border-[var(--color-border)]" />

          {/* ================= BASIC INFORMATION ================= */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              Basic Information
            </h2>

            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Basic details of the employee.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <EmployeeFormInput
                label="Full Name"
                name="name"
                placeholder="Enter employee name"
                required
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must contain at least 2 characters",
                  },
                })}
                error={errors.name?.message}
              />

              <EmployeeFormInput
                label="Email"
                name="email"
                type="email"
                placeholder="employee@example.com"
                required
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Enter a valid email address",
                  },
                })}
                error={errors.email?.message}
              />

              <EmployeeFormInput
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Enter phone number"
                {...register("phone", {
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Enter a valid 10 digit phone number",
                  },
                })}
                error={errors.phone?.message}
              />

              <EmployeeFormInput
                label="Employee ID"
                name="employeeId"
                placeholder="EMP001"
                {...register("employeeId")}
                error={errors.employeeId?.message}
              />

              <EmployeeFormInput
                label="Designation"
                name="designation"
                placeholder="e.g. Software Developer"
                {...register("designation")}
                error={errors.designation?.message}
              />

              <EmployeeFormInput
                label="Joining Date"
                name="joiningDate"
                type="date"
                {...register("joiningDate")}
                error={errors.joiningDate?.message}
              />
            </div>
          </div>

          <div className="mb-8 border-t border-[var(--color-border)]" />

          {/* ================= ACCOUNT ================= */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              Account Information
            </h2>

            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Configure the employee's account.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <EmployeeFormInput
                label="Password"
                name="password"
                type="password"
                placeholder="Enter password"
                required
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                error={errors.password?.message}
              />

              <EmployeeFormInput
                label="Confirm Password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                required
                {...register("confirmPassword", {
                  required: "Please confirm the password",
                  validate: (value) =>
                    value === password || "Passwords do not match",
                })}
                error={errors.confirmPassword?.message}
              />
            </div>
          </div>

          <div className="mb-8 border-t border-[var(--color-border)]" />

          {/* ================= ORGANIZATION ================= */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              Organization Details
            </h2>

            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Assign department, role and account status.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {/* Department */}
              <Controller
                name="department"
                control={control}
                rules={{
                  required: "Department is required",
                }}
                render={({ field }) => (
                  <EmployeeFormSelect
                    label="Department"
                    name="department"
                    value={field.value}
                    onChange={field.onChange}
                    required
                    options={[
                      {
                        value: "developer",
                        label: "Developer",
                      },
                      {
                        value: "administrative",
                        label: "Administrative",
                      },
                      {
                        value: "security",
                        label: "Security",
                      },
                      {
                        value: "management",
                        label: "Management",
                      },
                    ]}
                    error={errors.department?.message}
                  />
                )}
              />

              {/* Role */}
              <Controller
                name="role"
                control={control}
                rules={{
                  required: "Role is required",
                }}
                render={({ field }) => (
                  <EmployeeFormSelect
                    label="Role"
                    name="role"
                    value={field.value}
                    onChange={field.onChange}
                    required
                    options={[
                      {
                        value: "admin",
                        label: "Admin",
                      },
                      {
                        value: "employee",
                        label: "Employee",
                      },
                    ]}
                    error={errors.role?.message}
                  />
                )}
              />

              {/* Status */}
              <Controller
                name="status"
                control={control}
                render={({ field }) => (
                  <EmployeeFormSelect
                    label="Status"
                    name="status"
                    value={field.value}
                    onChange={field.onChange}
                    required
                    options={[
                      {
                        value: "active",
                        label: "Active",
                      },
                      {
                        value: "inactive",
                        label: "Inactive",
                      },
                    ]}
                    error={errors.status?.message}
                  />
                )}
              />
            </div>
          </div>

          <div className="mb-8 border-t border-[var(--color-border)]" />

          {/* ================= ADDRESS ================= */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold text-[var(--color-text)]">
              Address
            </h2>

            <p className="mt-1 text-sm text-[var(--color-text-muted)]">
              Employee residential information.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="md:col-span-2">
                <EmployeeFormInput
                  label="Address"
                  name="address"
                  placeholder="Enter complete address"
                  {...register("address")}
                  error={errors.address?.message}
                />
              </div>

              <EmployeeFormInput
                label="City"
                name="city"
                placeholder="Enter city"
                {...register("city")}
                error={errors.city?.message}
              />

              <EmployeeFormInput
                label="State"
                name="state"
                placeholder="Enter state"
                {...register("state")}
                error={errors.state?.message}
              />

              <EmployeeFormInput
                label="Country"
                name="country"
                placeholder="Enter country"
                {...register("country")}
                error={errors.country?.message}
              />

              <EmployeeFormInput
                label="Pincode"
                name="pincode"
                placeholder="Enter pincode"
                {...register("pincode", {
                  pattern: {
                    value: /^[0-9]{6}$/,
                    message: "Enter a valid 6 digit pincode",
                  },
                })}
                error={errors.pincode?.message}
              />
            </div>
          </div>

          {/* ================= ACTIONS ================= */}
          <div
            className="
              mt-8 flex flex-col-reverse gap-3
              border-t border-[var(--color-border)]
              pt-6
              sm:flex-row sm:justify-end
            "
          >
            <Button
              type="button"
              variant="secondary"
              onClick={handleCancel}
              disabled={isSubmitting}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Adding Employee..." : "Add Employee"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AddEmployee;
