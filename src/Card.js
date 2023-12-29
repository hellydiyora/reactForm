import React, { useState } from "react";
import "./Card.css";

const Card = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    gender: "",
    hobbies: [],
    color: "",
    birthdate: "",
    email: "",
    file: "",
    range: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({
        ...formData,
        hobbies: checked
          ? [...formData.hobbies, value]
          : formData.hobbies.filter((lang) => lang !== value),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const requiredFields = [
      "name",
      "password",
      "gender",
      "birthdate",
      "email",
      "file",
      "time",
    ];
    for (const field of requiredFields) {
      if (!formData[field]) {
        alert(`Please fill in the ${field} field`);
        return;
      }
    }
    //Validate Name
    if (/^\d+$/.test(formData.name)) {
      alert("Name should not be filled with numeric characters");
      return;
    }
    // Validate email
    if (!validateEmail(formData.email)) {
      alert("Please enter a valid email address");
      return;
    }
    // Validate password
    if (!validatePassword(formData.password)) {
      alert(
        "Password should be at least 8 characters long and contain 1 special symbol"
      );
      return;
    }
    console.log("Form Data:", formData);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      password: "",
      gender: "",
      hobbies: [],
      color: "",
      birthdate: "",
      email: "",
      file: "",
      range: "",
      time: "",
    });
  };

  return (
    <div className="FormCard">
      <h1>About YOU</h1>
      <form onSubmit={handleSubmit}>
        <div className="Main">
          <div className="FirstModule">
            <label className="text">
              <p>Enter your Name: <span style={{color: "red" }}>*</span></p>
              <input
                placeholder="First Name"
                type="text"
                name="name"
                className="one"
                value={formData.name}
                onChange={handleChange}
              />
            </label>

            <label className="password">
              <p>Enter your Password:<span style={{color: "red" }}>*</span></p>
              <input
                placeholder="Password"
                type="password"
                name="password"
                className="one"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <label className="email">
              <p>Enter your email address:<span style={{color: "red" }}>*</span></p>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <label className="birthdate">
              <p>Select your birthday date:<span style={{color: "red" }}>*</span></p>
              <input
                type="date"
                name="birthdate"
                value={formData.birthdate}
                onChange={handleChange}
              />
            </label>
            <label className="time">
              <p>Select a time of your submittion:<span style={{color: "red" }}>*</span></p>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="SecondModule">
            <div className="Gender">
            <p>Select your gender:<span style={{color: "red" }}>*</span></p>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  checked={formData.gender === "male"}
                  onChange={handleChange}
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  checked={formData.gender === "female"}
                  onChange={handleChange}
                />
                Female
              </label>
            </div>
            
            
            <div className="Hobbies">
              <label>
              <p>Select Hobbies:</p>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="travel"
                  checked={formData.hobbies.includes("travel")}
                  onChange={handleChange}
                />
                Travelling
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="read"
                  checked={formData.hobbies.includes("read")}
                  onChange={handleChange}
                />
                Reading
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="paint"
                  checked={formData.hobbies.includes("paint")}
                  onChange={handleChange}
                />
                Painting
              </label>
              <label>
                <input
                  type="checkbox"
                  name="hobbies"
                  value="dance"
                  checked={formData.hobbies.includes("dance")}
                  onChange={handleChange}
                />
                Dancing
              </label>
            </div>
            <label className="color">
              <p>Select your favourite color:</p>
              <input
                type="color"
                name="color"
                value={formData.color}
                onChange={handleChange}
              />
            </label>

            <label className="file">
              <p>Choose a file:<span style={{color: "red" }}>*</span></p>
              <input
                type="file"
                name="file"
                value={formData.file}
                onChange={handleChange}
              />
            </label>

            <label className="range">
              <p>Select a range:</p>
              <input
                type="range"
                name="range"
                value={formData.range}
                onChange={handleChange}
              />
            </label>
          </div>
        </div>
        <div className="Button">
        <div className="Submitbtn">
          <button type="submit">Submit</button>
          <br />
        </div>
        <div className="Resetbtn">
          <button type="button" onClick={handleReset}>
            Reset
          </button>
        </div>
        </div>
      </form>
    </div>
  );
};

export default Card;