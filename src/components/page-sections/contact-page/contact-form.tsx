"use client";
import { motion } from "framer-motion";
import { useState } from "react";

interface FormData {
  projectTypes: string[];
  budgetRange: string;
  deadline: string;
  fullName: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    projectTypes: [],
    budgetRange: "option1",
    deadline: "",
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const projectTypeOptions = [
    { id: "webDesign", label: "Web Design" },
    { id: "dashboard", label: "Dashboard" },
    { id: "mobileApp", label: "Mobile App" },
    { id: "mockup", label: "Mockup" },
    { id: "desktopApp", label: "Desktop App" },
    { id: "uiKit", label: "Ui kit" },
  ];

  const budgetOptions = [
    { id: "option1", label: "$1k", value: "option1" },
    { id: "option2", label: "$2k", value: "option2" },
    { id: "option3", label: "$2k to $3k", value: "option3" },
    { id: "option4", label: "$4k to 5k", value: "option4" },
    { id: "option5", label: "More then $6k", value: "option5" },
  ];

  const deadlineOptions = [
    { id: "1", label: "1 week", value: "1" },
    { id: "2", label: "2 week", value: "2" },
    { id: "3", label: "3 week", value: "3" },
    { id: "4", label: "4 week", value: "4" },
    { id: "5", label: "5 week", value: "5" },
  ];

  const handleProjectTypeChange = (projectType: string) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(projectType)
        ? prev.projectTypes.filter((type) => type !== projectType)
        : [...prev.projectTypes, projectType],
    }));
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }

    if (formData.projectTypes.length === 0) {
      newErrors.projectTypes = ["Please select at least one project type"];
    }

    if (!formData.deadline) {
      newErrors.deadline = "Please select a deadline";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }
    setIsSubmitting(true);

    try {
      setFormData({
        projectTypes: [],
        budgetRange: "option1",
        deadline: "",
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });

      alert("Message sent successfully!");
    } catch (error) {
      alert("Error sending message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact_info">
      <div className="section_title text-left">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="h_title wow fadeInUp"
        >
          Let’s start the conversation
        </motion.h2>
        <p>Please email us, we’ll happy to assist you.</p>
      </div>
      <form onSubmit={handleSubmit} className="contact_form">
        <div className="form-group">
          <h6>What type of project you need?</h6>
          {errors.projectTypes && (
            <div className="text-danger mb-2">{errors.projectTypes[0]}</div>
          )}
          <div className="box_info">
            {projectTypeOptions.map((option) => (
              <div key={option.id} className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id={option.id}
                  checked={formData.projectTypes.includes(option.id)}
                  onChange={() => handleProjectTypeChange(option.id)}
                />
                <label className="form-check-label" htmlFor={option.id}>
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <h6>Budget Range</h6>
          <div className="box_info">
            {budgetOptions.map((option) => (
              <div key={option.id} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gridRadios"
                  id={`budget${option.id}`}
                  value={option.value}
                  checked={formData.budgetRange === option.value}
                  onChange={(e) =>
                    handleInputChange("budgetRange", e.target.value)
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`budget${option.id}`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="form-group">
          <h6>Deadline</h6>
          {errors.deadline && (
            <div className="text-danger mb-2">{errors.deadline}</div>
          )}
          <div className="box_info">
            {deadlineOptions.map((option) => (
              <div key={option.id} className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="Radios"
                  id={`week${option.id}`}
                  value={option.value}
                  checked={formData.deadline === option.value}
                  onChange={(e) =>
                    handleInputChange("deadline", e.target.value)
                  }
                />
                <label
                  className="form-check-label"
                  htmlFor={`week${option.id}`}
                >
                  {option.label}
                </label>
              </div>
            ))}
          </div>
        </div>
        <div className="row contact_fill">
          <div className="col-lg-4 form-group">
            <h6>Full Name</h6>
            {errors.fullName && (
              <div className="text-danger mb-2">{errors.fullName}</div>
            )}
            <input
              type="text"
              className={`form-control ${errors.fullName ? "is-invalid" : ""}`}
              name="name"
              id="name"
              placeholder="Enter your name here"
              value={formData.fullName}
              onChange={(e) => handleInputChange("fullName", e.target.value)}
            />
          </div>
          <div className="col-lg-4 form-group">
            <h6>Email</h6>
            {errors.email && (
              <div className="text-danger mb-2">{errors.email}</div>
            )}
            <input
              type="email"
              className={`form-control ${errors.email ? "is-invalid" : ""}`}
              name="email"
              id="email"
              placeholder="info@KbDoc.com"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
          </div>
          <div className="col-lg-4 form-group">
            <h6>Phone no</h6>
            <input
              type="tel"
              className="form-control"
              name="tel"
              id="phone"
              placeholder="+462"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e.target.value)}
            />
          </div>
          <div className="col-lg-12 form-group">
            <h6>Message</h6>
            <textarea
              className="form-control message"
              id="message"
              placeholder="Enter Your Text ..."
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
            ></textarea>
          </div>
          <div className="col-lg-12 form-group">
            <button
              type="submit"
              className="btn action_btn thm_btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
