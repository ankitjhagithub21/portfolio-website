import { useState } from "react";
import api from "../services/api";
import toast from "react-hot-toast";
import {
  FaUser,
  FaProjectDiagram,
  FaPhone,
  FaDollarSign,
  FaLink,
  FaPaperPlane,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BiMessageSquareDetail } from "react-icons/bi";
import Background from "../components/Background";


const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    clientName: "",
    projectName: "",
    phone: "",
    description: "",
    budget: "",
    links: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await api.post("/enquiries", formData);
      toast.success("🎉 Enquiry submitted successfully!");
      setFormData({
        clientName: "",
        projectName: "",
        phone: "",
        description: "",
        budget: "",
        links: "",
      });
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  

  return (
    <div className="min-h-screen  bg-gradient-to-br from-base-200 via-base-100 to-base-200 py-20 px-4 sm:px-6 lg:px-8">
      {/* Background Decorations */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-3xl mx-auto relative z-10 mt-2">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <div className="card bg-base-100 shadow-2xl">
            {/* Header Section */}
            <div className="text-center mt-5">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mb-4">
                Get In Touch
              </h1>
              <p className="text-base-content/70 text-lg max-w-2xl mx-auto">
                Have a project in mind? Let's create something amazing together.
                Fill out the form below and I'll get back to you within 24
                hours.
              </p>
            </div>
            <div className="card-body p-6 sm:p-8 lg:p-10">
              <form onSubmit={submitHandler} className="space-y-5">
                {/* Row 1: Client Name & Project Name */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium flex items-center gap-2">
                        <FaUser className="text-primary" />
                        Your Name
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="input outline-none w-full transition-all duration-300 hover:border-primary/50"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium flex items-center gap-2">
                        <FaProjectDiagram className="text-secondary" />
                        Project Name
                      </span>
                    </label>
                    <input
                      type="text"
                      required
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleChange}
                      placeholder="My Awesome Project"
                      className="input outline-none  w-full  transition-all duration-300 hover:border-secondary/50"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Budget */}
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium flex items-center gap-2">
                        <FaPhone className="text-accent" />
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="tel"
                      required
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="input outline-none w-full  transition-all duration-300 hover:border-accent/50"
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium flex items-center gap-2">
                        <FaDollarSign className="text-success" />
                        Budget Range
                      </span>
                    </label>
                    <select
                      required
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="select outline-none  w-full  transition-all duration-300 hover:border-success/50"
                    >
                      <option value="" disabled>
                        Select your budget
                      </option>
                      <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">
                        $10,000 - $25,000
                      </option>
                      <option value="$25,000+">$25,000+</option>
                    </select>
                  </div>
                </div>

                {/* Project Description */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium flex items-center gap-2">
                      <BiMessageSquareDetail className="text-info text-lg" />
                      Project Description
                    </span>
                  </label>
                  <textarea
                    required
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Tell me about your project, goals, and any specific requirements..."
                    rows={4}
                    className="textarea outline-none  w-full focus:textarea-info transition-all duration-300 hover:border-info/50 resize-none"
                  ></textarea>
                </div>

                {/* Relevant Links */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-medium flex items-center gap-2">
                      <FaLink className="text-warning" />
                      Relevant Links
                    </span>
                  </label>
                  <input
                    type="url"
                    name="links"
                    value={formData.links}
                    onChange={handleChange}
                    placeholder="https://example.com"
                    className="input outline-none  w-full transition-all duration-300 hover:border-warning/50"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading}
                    className={`btn btn-primary btn-lg float-right md:w-fit w-full gap-3 text-lg font-semibold shadow-lg hover:shadow-primary/25 transition-all duration-300 ${
                      loading ? "loading" : ""
                    }`}
                  >
                    {loading ? (
                      <>
                        <span className="loading loading-spinner"></span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="text-lg" />
                        Send Message
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
};

export default Contact;
