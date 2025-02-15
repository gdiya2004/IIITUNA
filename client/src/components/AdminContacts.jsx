import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";
import "./AdminContacts.css"; // Importing CSS file

export const AdminContacts = () => {
  const [contactData, setContactData] = useState([]);
  const { authorizationToken } = useAuth();

  const getContactsData = async () => {
    try {
      const response = await fetch(`http://localhost:5004/api/admin/contact`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteContactById = async (id) => {
    try {
      const response = await fetch(`http://localhost:5004/api/admin/contact/delete/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: authorizationToken,
        },
      });
      if (response.ok) {
        getContactsData();
        toast.success("Deleted successfully");
      } else {
        toast.error("Not Deleted");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getContactsData();
  }, []);

  return (
    <section className="admin-contacts-section">
      <h1>Admin Contact Data</h1>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contactData.length > 0 ? (
              contactData.map((curContactData, index) => {
                const { username, email, message, _id } = curContactData;
                return (
                  <tr key={index}>
                    <td>{username}</td>
                    <td>{email}</td>
                    <td>{message}</td>
                    <td>
                      <button className="delete-btn" onClick={() => deleteContactById(_id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="4" className="no-data">
                  No contact data available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};
