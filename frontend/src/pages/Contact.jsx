import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const formObject = Object.fromEntries(formData.entries());

    try {
      await api.post("/enquiries", formObject);
      toast.success("Enquiry submitted successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submitHandler} className="max-w-xl mx-auto p-6 space-y-4">
      <input
        required
        id="clientName"
        name="clientName"
        placeholder="Client Name"
      />
      <input
        required
        id="projectName"
        name="projectName"
        placeholder="Project Name"
      />
      <input required placeholder="Phone Number" id="phone" name="phone" />
      <textarea
        required
        placeholder="Project Description"
        id="description"
        name="description"
      ></textarea>
      <input required placeholder="Budget" id="budget" name="budget" />
      <input placeholder="Relevant Links" id="links" name="links" />
      <button className="bg-black text-white px-4 py-2" disabled={loading}>
        {loading ? "Please wait..." : "Submit"}
      </button>
    </form>
  );
};

export default Contact;
