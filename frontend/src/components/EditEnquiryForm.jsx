import { useState } from "react";
import api from "../services/api";

const EditEnquiryForm = ({ enquiry,onUpdate }) => {
  const [formData, setFormData] = useState({ ...enquiry });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await api.put(`/enquiries/${enquiry._id}`, formData);
    onUpdate(res.data);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        name="clientName"
        value={formData.clientName}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        name="projectName"
        value={formData.projectName}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <input
        name="budget"
        value={formData.budget}
        onChange={handleChange}
        className="input input-bordered w-full"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        className="textarea textarea-bordered w-full"
      />
      <input
        name="links"
        value={formData.links}
        onChange={handleChange}
        className="input input-bordered w-full"
      />

      <button className="btn btn-success  w-full">Update Enquiry</button>
    </form>
  );
};

export default EditEnquiryForm;
