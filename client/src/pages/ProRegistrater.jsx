import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const ProPRegister = ({ isOpen, onClose }) => {
  const [provider, setProvider] = useState({
    username: "",
    email: "",
    phone: "",
    service: "",
    contact: "",
    location: "",
    price: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProvider({
      ...provider,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `http://localhost:5004/api/provider/register`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(provider),
        }
      );

      const res_data = await response.json();
      console.log("Response from server:", res_data.extraDetails);

      if (response.ok) {
        toast.success("Provider Registration Successful");
        storeTokenInLS(res_data.token, "provider"); // Store as provider
        setProvider({
          username: "",
          email: "",
          phone: "",
          service: "",
          contact: "",
          location: "",
          price: "",
          password: "",
        });
        // navigate("/provider-dashboard"); // Redirect to provider dashboard
      } else {
        toast.error(
          res_data.extraDetails ? res_data.extraDetails : res_data.msg
        );
      }
    } catch (error) {
      console.log("Provider Registration Error:", error);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <main>
        <div className="section-registration2" onClick={onClose}>
          <div
            className="container grid2 grid-two-cols"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              ✖
            </button>
            <div className="registration-form">
              <h1 className="main heading mb-3">Provider Registration</h1>
              <br />
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Name:</label>
                  <input
                    type="text"
                    name="username"
                    required
                    placeholder="Business/Provider Name"
                    id="username"
                    autoComplete="off"
                    value={provider.username}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    id="email"
                    autoComplete="off"
                    value={provider.email}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="phone">Phone:</label>
                  <input
                    type="number"
                    name="phone"
                    required
                    placeholder="Phone"
                    id="phone"
                    autoComplete="off"
                    value={provider.phone}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="service">Service:</label>
                  <input
                    type="text"
                    name="service"
                    required
                    placeholder="Service Offered"
                    id="service"
                    autoComplete="off"
                    value={provider.service}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="contact">Contact Info:</label>
                  <input
                    type="text"
                    name="contact"
                    required
                    placeholder="Contact Info"
                    id="contact"
                    autoComplete="off"
                    value={provider.contact}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="location">Location:</label>
                  <input
                    type="text"
                    name="location"
                    required
                    placeholder="Location"
                    id="location"
                    autoComplete="off"
                    value={provider.location}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    name="price"
                    required
                    placeholder="Price for Services"
                    id="price"
                    autoComplete="off"
                    value={provider.price}
                    onChange={handleInput}
                  />
                </div>
                <div>
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    name="password"
                    required
                    placeholder="Password"
                    id="password"
                    autoComplete="off"
                    value={provider.password}
                    onChange={handleInput}
                  />
                </div>
                <br />
                <button type="submit" className="btn btn-submit">
                  Register as Provider
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
