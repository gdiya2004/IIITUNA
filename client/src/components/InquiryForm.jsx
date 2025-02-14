import React, { useState } from "react";
import axios from "axios";
import "./InquiryForm.css"
const InquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "", email: "", phone: "", eventType: "", eventDate: "",
        venueLocation: "", estimatedHeadcount: "", residence: "",
        budget: "", howDidYouHear: "", additionalInfo: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            console.log("dtahgvfdcfvhgbj")
            await axios.post("http://localhost:5004/api/inquiry", formData);
            alert("Inquiry submitted successfully!");
            setFormData({
                name: "", email: "", phone: "", eventType: "", eventDate: "",
                venueLocation: "", estimatedHeadcount: "", residence: "",
                budget: "", howDidYouHear: "", additionalInfo: "",
            });
        } catch (error) {
            alert("Error submitting inquiry");
        }
    };
   

    return (
        <form onSubmit={handleSubmit}>
    <h2>For Inquiries</h2>

    <label>Name *</label>
    <input type="text" name="name" required onChange={handleChange} value={formData.name} />

    <label>Email *</label>
    <input type="email" name="email" required onChange={handleChange} value={formData.email} />

    <label>Phone *</label>
    <input type="text" name="phone" required onChange={handleChange} value={formData.phone} />

    <label>Event Type *</label>
    <input type="text" name="eventType" required onChange={handleChange} value={formData.eventType} />

    <label>Event Date *</label>
    <input type="date" name="eventDate" required onChange={handleChange} value={formData.eventDate} />

    <label>Venue Location *</label>
    <input type="text" name="venueLocation" required onChange={handleChange} value={formData.venueLocation} />

    <label>Estimated Headcount *</label>
    <input type="number" name="estimatedHeadcount" required onChange={handleChange} value={formData.estimatedHeadcount} />

    <label>Where do you reside? *</label>
    <input type="text" name="residence" required onChange={handleChange} value={formData.residence} />

    <label>Have a budget in mind? *</label>
    <input type="text" name="budget" onChange={handleChange} value={formData.budget} />

    <label>How did you hear about us? *</label>
    <input type="text" name="howDidYouHear" onChange={handleChange} value={formData.howDidYouHear} />

    <label>Please share any information or inspiration you have for your dream event! *</label>
    <textarea name="additionalInfo" onChange={handleChange} value={formData.additionalInfo}></textarea>

    <button type="submit">Submit Inquiry</button>
</form>

    );
};

export default InquiryForm;
