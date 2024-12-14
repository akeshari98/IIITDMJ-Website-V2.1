import axios from "axios";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { validateForm } from "../../../utils/validateData";
import { sendEmail } from "../../../utils/EmailSend";

function ContactUs() {
  const buttonRef = useRef(null);
  const form = useRef();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    message: "",
  });

  const emptyFormData = () => {
    setFormData({ fullname: "", email: "", phone: "", message: "" });
  };
 
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // console.log(formData);
  };

  // form submit logic and submit button loading and disablity
  const handleSubmit = async (e) => {
    e.preventDefault();
    let result = validateForm(formData);
    if (result) {
      setLoading(true);
      buttonRef.current.setAttribute("disabled", true);
      try {
        await axios
          .post(`${process.env.React_APP_Backend}/feedbacks/insert`, formData)
          .then((res) => {
            let response = res.data;
            if (response.isSuccess) {
              if (response.displayMessage) {
                alert(response.displayMessage);
                emptyFormData();
                setLoading(false);
                buttonRef.current.removeAttribute("disabled", false);
              } else {
                // emailJS system
                emailjs
                  .sendForm(
                    "service_8jobu1p",
                    "template_s2448br",
                    form.current,
                    "YRZEQC3wYqOWMbasL"
                  )
                  .then(
                    (result) => {
                      console.log("You are now connected!");
                      alert(
                        "Thank you! Your message has been successfully sent"
                      );
                    },
                    (error) => {
                      console.log(error.text);
                    }
                  );
                setLoading(false);
                emptyFormData();
                buttonRef.current.removeAttribute("disabled", false);
              }
            } else {
              alert(response.displayMessage);
              setLoading(false);
              buttonRef.current.removeAttribute("disabled", false);
            }
          });
      } catch (error) {
        console.log(error);
        if (error.code === "ERR_NETWORK") {
          alert("Please Check your Internet connection!");
          setLoading(false);
          buttonRef.current.removeAttribute("disabled", false);
        }
      }
    }
  };

  return (
    <div className="h-full w-full">
      <section className="text-gray-600 body-font relative">
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="map"
            scrolling="no"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.829250050693!2d80.02273867491695!3d23.17643127906625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a94397365dd3%3A0x5f9aeb812c2678c9!2sIIITDM%20Jabalpur!5e0!3m2!1sen!2sin!4v1728232138635!5m2!1sen!2sin"
            style={{
              filter: "contrast(1.2) opacity(0.5)",
            }}
          ></iframe>
        </div>
        <div className="container px-5 py-24 mx-auto flex ">
          <div className="lg:w-1/3 md:w-1/2 bg-white h-full rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-lg ">
            <h4 className="text-black text-2xl font-semibold mb-4">
              Contact Address
            </h4>
            <p className="text-gray-900 mb-4 font-medium">
              Pandit Dwarka Prasad Mishra<br></br>
              Indian Institute of Information Technology, <br></br>
              Design & Manufacturing<br></br>
              Jabalpur<br></br>
              Dumna Airport Road, P.O.: Khamaria,<br></br>
              Jabalpur - 482005, Madhya Pradesh, India
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
