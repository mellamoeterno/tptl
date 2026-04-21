import { useState } from "react";

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});           //figure out why is the state for error setErrors with {} instead of null

  // Handle input change (controlled inputs)
  const handleChange = (e) => {
    const { name, value } = e.target;           //e.target capture user input

    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user types
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // Validation logic
  const validate = () => {
    const newErrors = {};

    if (!values.name.trim()) {                  //values.name refers to 'name' from the (value) from (const [values, setValues]) 'value' Defines the initial data or the data sent upon submission 
      newErrors.name = "Name is required";      //and trim() removes all leading and trailing whitespace characters (such as spaces, tabs, and newlines)
    }

    if (!values.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {///\S+@\S+\.\S+/ validate or check if a string is NOT a valid email address format
      newErrors.email = "Invalid email format";
    }

    if (!values.password) {
      newErrors.password = "Password is required";
    } else if (values.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    return newErrors;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form submitted:", values);

      // Reset form
      setValues({
        name: "",
        email: "",
        password: "",
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "0 auto" }}>
      <h2>Register</h2>

      {/* Name */}
      <div>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
        {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>

      {/* Password */}
      <div>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;