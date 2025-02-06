import React, { useState } from "react";

const SimpleForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Add meg a felhasználóneved!";
    if (!formData.email.includes("@")) newErrors.email = "Adj meg egy érvényes email címet!";
    if (formData.message.length < 10) newErrors.message = "Az üzenet legalább 10 karakter legyen!";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert("Az űrlapot sikeresen elküldted!");
      setFormData({ username: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-xl font-bold mb-4">Egyszerű Űrlap</h1>

        <div className="mb-4">
          <label htmlFor="username" className="block mb-1">Felhasználónév: </label>
          <input
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>

        <br/>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-1">Email: </label>
          <input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>

        <br/>

        <div className="mb-4">
          <label htmlFor="message" className="block mb-1">Üzenet: </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
        </div>

        <br/>

        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Küldés
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;