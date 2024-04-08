import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [allFieldsFilled, setAllFieldsFilled] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const checkFieldsFilled = () => {
    const nameInput = document.querySelector(".name").value;
    const emailInput = document.querySelector(".email").value;
    const messageInput = document.querySelector(".message").value;

    const areFieldsFilled = nameInput && emailInput && messageInput;

    // Update the allFieldsFilled state based on whether all fields are filled
    setAllFieldsFilled(areFieldsFilled);
  };

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setIsVerified(true);
  };

  const formRef = useRef(null);
  const siteKey = import.meta.env.VITE_SITE_KEY;

  const sendEmail = (e) => {
    e.preventDefault();

    if (isVerified) {
      const serviceID = import.meta.env.VITE_PUBLIC_SERVICE_ID;
      const appTemplateId = import.meta.env.VITE_PUBLIC_TEMPLATE_ID;
      const appPublicId = import.meta.env.VITE_PUBLIC_USER_ID;

      emailjs
        .sendForm(serviceID, appTemplateId, formRef.current, appPublicId)
        .then(
          () => {
            toast.success("Message Sent!", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          },
          () => {
            toast.error("Something went wrong!", {
              position: "bottom-center",
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
          }
        );

      // Reset form fields
      e.target.querySelector(".name").value = "";
      e.target.querySelector(".email").value = "";
      e.target.querySelector(".message").value = "";
    } else {
      // Show an error message or take appropriate action when reCAPTCHA is not verified
      toast.error("Please verify the reCAPTCHA before sending the message.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

  return (
    <main>
      <div className="wrapper min-h-screen mt-40 mb-20">
        <h2 className="section-title">Contact Us</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 overflow-hidden mt-10">
          <motion.form
            onSubmit={sendEmail}
            className="flex flex-col  "
            ref={formRef}
            initial={{ x: "-100%" }}
            whileInView={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            <div className="gap-3">
              <div className="mb-4">
                <label className="block text-gray-700 uppercase">
                  <span className="font-semibold">Name</span>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Write your name"
                    onChange={checkFieldsFilled}
                    required
                    className="name mt-2 appearance-none w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
                  />
                </label>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700   uppercase">
                  <span className="font-semibold">Email</span>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Write your email"
                    onChange={checkFieldsFilled}
                    required
                    className="email appearance-none mt-2 w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300"
                  />
                </label>
              </div>
            </div>
            <div>
              <label className="block text-gray-700 mb-4  uppercase">
                <span className="font-semibold">Message</span>
                <textarea
                  name="message"
                  placeholder="Write your message"
                  onChange={checkFieldsFilled}
                  required
                  className="message appearance-none mt-2 w-full p-4 outline-none text-gray-700  border border-gray-300 focus:border-gray-600 duration-300 resize-none h-40"
                />
              </label>
            </div>
            {allFieldsFilled && !isVerified && (
              <ReCAPTCHA
                className="mb-4"
                sitekey={siteKey}
                onChange={onChange}
              />
            )}

            <input
              required
              className="bg-black hover:opacity-80 text-white py-5 px-10 uppercase duration-300 cursor-pointer"
              type="submit"
              value="Submit"
            />
          </motion.form>

          <motion.div
            initial={{ x: "100%" }}
            whileInView={{ x: 0 }}
            transition={{ ease: "easeInOut", duration: 1 }}
            className="right flex flex-col gap-5 w-full h-[30rem] overflow-hidden "
          >
            <div>
              <p className="font-bold uppercase text-lg">Address:</p>
              <p>
                Chakshal, Ollartech, Batpara; P/O: Deputibari ; P/S NArshindhi
                Sadar,Narsingdhi (near the Monir Chairman house Goli ),
                Narsingdi, Bangladesh, 1603
              </p>
            </div>
            <div>
              <p className="font-bold uppercase text-lg">
                24/7 Hotline Number:
              </p>
              <p
                title=" Our Phone Numbers"
                className="text-rose-500 underline underline-offset-2"
              >
                01819-269213 <br /> 01881648061
              </p>
            </div>
            <div>
              <p className="font-bold uppercase text-lg">Email Adress:</p>
              <a
                href="mailto:info@mazzakagro.com"
                aria-label="Our Email Address"
                title="Our Email Address"
                className="text-rose-500 underline underline-offset-2"
              >
                info@mazzakagro.com
              </a>
            </div>
            <div>
              <p className="font-bold uppercase text-lg">Opening Hours:</p>
              <p>Mon-Sat: 10:00am - 8:00pm</p>
              <p>Sun: 11:00am - 9:00pm</p>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default Contact;
