import React, { useState } from "react";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import emailjs from "emailjs-com";
import { Heading } from "../common/Heading";

// Reusable InputField component
const InputField = ({ type, placeholder, index, name, value, onChange }) => (
  <InView triggerOnce>
    {({ ref, inView }) => (
      <>
        {placeholder === "Message" ? (
          <motion.textarea
            ref={ref}
            placeholder={placeholder}
            rows="10"
            className="w-full p-4 border border-gray-300 text-black rounded-lg outline-none focus:border-primaryColor"
            aria-label={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          />
        ) : (
          <motion.input
            ref={ref}
            placeholder={placeholder}
            type={type}
            className="w-full p-4 border border-gray-300 text-black rounded-lg outline-none focus:border-primaryColor"
            aria-label={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.5,
              delay: index * 0.2,
            }}
          />
        )}
      </>
    )}
  </InView>
);

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // For loading state

  // Handle form data change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    emailjs
      .send(
        "service_tzewxhe",
        "template_kgzkuf7",
        templateParams,
        "CdAGLGtmzWXYwmsz7"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
        },
        (error) => {
          console.log("Error sending email:", error.text);
          alert("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setLoading(false); // Stop loading animation
        // Clear the form after submission
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      });
  };

  return (
    <div
      id="contact"
      className="contact flex justify-center items-center xl:h-screen pt-28 mx-5 max-md:pt-36"
    >
      <div className="container w-full max-w-4xl">
        <Heading title="Keep in Touch" />

        <div className="content space-y-10">
          <InView triggerOnce={false}>
            {({ ref, inView }) => (
              <motion.div
                ref={ref}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="left p-5"
              >
                <form className="space-y-4" onSubmit={handleSubmit}>
                  {["Name", "Email", "Subject", "Message"].map(
                    (placeholder, index) => (
                      <InputField
                        key={index}
                        placeholder={placeholder}
                        index={index}
                        type={placeholder === "Email" ? "email" : "text"}
                        name={placeholder.toLowerCase()}
                        value={formData[placeholder.toLowerCase()]}
                        onChange={handleChange}
                      />
                    )
                  )}
                  <InView triggerOnce>
                    {({ ref, inView }) => (
                      <motion.button
                        ref={ref}
                        type="submit"
                        className="w-full p-4 bg-primaryColor text-white font-semibold rounded-lg hover:bg-primaryColor-dark transition duration-300"
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        disabled={loading} // Disable button when loading
                      >
                        {loading ? "Sending..." : "Submit"}
                      </motion.button>
                    )}
                  </InView>
                </form>
              </motion.div>
            )}
          </InView>
        </div>
      </div>
    </div>
  );
};
