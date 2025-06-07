import React, { useState } from "react";
import "./Listing.css"; // Assuming you have a CSS file for styling

const HouseListingForm = () => {
  const [formData, setFormData] = useState({
    ownerName: "",
    title: "",
    description: "",
    address: "",
    city: "",
    price: "",
    type: "House",
    bedrooms: "",
    bathrooms: "",
    area: "",
    images: [],
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "images") {
      setFormData({ ...formData, images: files });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Listing submitted successfully!");
    // Backend integration here
  };

  return (
    <div id="listing-form-container">
      <form className="listing-form" onSubmit={handleSubmit}>
        <h2>Add New Property</h2>

        <label>Owner Name</label>
        <input
          type="text"
          name="ownerName"
          value={formData.ownerName}
          onChange={handleChange}
          required
        />

        <label>Property Title</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label>Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />

        <label>Address</label>
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
        />

        <label>City</label>
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <label>Price (PKR)</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          required
        />

        <label>Property Type</label>
        <select name="type" value={formData.type} onChange={handleChange}>
          <option value="House">House</option>
          <option value="Apartment">Apartment</option>
          <option value="Plot">Plot</option>
        </select>

        <label>Bedrooms</label>
        <input
          type="number"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
        />

        <label>Bathrooms</label>
        <input
          type="number"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
        />

        <label>Area (sq. ft.)</label>
        <input
          type="number"
          name="area"
          value={formData.area}
          onChange={handleChange}
        />

        <label>Upload Images</label>
        <input type="file" name="images" multiple onChange={handleChange} />

        <button type="submit">Submit Listing</button>
      </form>
    </div>
  );
};

export default HouseListingForm;
