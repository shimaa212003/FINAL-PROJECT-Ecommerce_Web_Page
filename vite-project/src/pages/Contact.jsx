
// import WarrantyBanner from "../components/WarrantyBanner"
// import "../styles/Contact.css"
// import * as yup from "yup" //library for validation
// import { useState } from "react"



// function Contact() {
//   const [formData, setFormData] = useState({
//     yourname: "",
  
//     email: "",
//     subject:"",
//     message: "",
  
//   });

//   const [error, setError] = useState({});
//   const [toastVisible, setToastVisible] = useState(false);

//   const userSchema = yup.object().shape({
//     yourname: yup.string().required("This field is required"),
//     email: yup
//     .string()
//     .email("Please enter a valid email address")
//     .required("This field is required"),
//     subject: yup.string().required("This field is required"),
//   message: yup.string().required("This field is required"),
//   })

//   async function formValidation() {
//     try {
//       const res = await userSchema.validate(formData, { abortEarly: false });
//       setError({});
//       return true;
//     } catch (e) {
//       const newErrors = {};
//       e.inner.forEach((error) => {
//         newErrors[error.path] = error.message;
//       });
//       setError(newErrors);
//       return false;
//     }
//   }

//   async function handleOnsubmitForm(event) {
//     event.preventDefault();
//     const isValid = await formValidation();
//     if (isValid) {
//       setToastVisible(true);
//       setTimeout(() => {
//         setToastVisible(false);
//       }, 3000);
//       setFormData({
//         yourname: "",
       
//         email: "",
//         subject: "",
//         message: "",
       
//       });
//     }}


//     function handleOnChange(event) {
//       const keyName = event.target.name;
//       let keyValue = event.target.value;
//       const type = event.target.type;
//       if (type === "checkbox") {
//         keyValue = event.target.checked;
//       }
//       setFormData({
//         ...formData,
//         [keyName]: keyValue,
//       });
//     }






//   return (
// <>



//     <div>



//       <div className="contactBanner">
//         <h2>Contact</h2>
//         <p>
//           <span>Home {">"} </span>
//           Contact
//         </p>
//       </div>
//       <div className="contactTitles">
//         <h2>Get In Touch With Us</h2>
//         <p>
//           For more informations about our products & services. Please feel free
//           to drop us an email. Our staff will always be there to help you out.
//           Do not hesitate !
//         </p>
//       </div>

  
//       <div className="contactFormContainer">

     

//         <form className="contactForm" onSubmit={handleOnsubmitForm}  >
//           <label>
//             Your name
//             <input type="text" name="yourname" placeholder="Your Name"   value={formData.yourname}
//                 onChange={handleOnChange}  />

//                {error.yourname && (<span className="error">{error.yourname}</span>
//               )}
//           </label>
//           <label htmlFor="email">
//             Email address
//             <input type="email" name="email" placeholder="Your Email"   value={formData.email}
//               onChange={handleOnChange}  />
//               {error.email && <span className="error">{error.email}</span>}
//           </label>
//           <label>
//             Subject
//             <input type="text" name="subject" placeholder="Subject"   value={formData.subject}
//               onChange={handleOnChange}  />
//             {error.subject && <span className="error">{error.subject}</span>}
//           </label>
//           <label  htmlFor="message" >
//             Message
//             <textarea name="message" placeholder="Your Message"  value={formData.message}
//               onChange={handleOnChange}   ></textarea>

// {error.message && <span className="error">{error.message}</span>}
//           </label>
//           <div className="contactSubmitButton">
//             <button type="submit">Submit</button>
//           </div>
//         </form>
//       </div>
//       <WarrantyBanner />
//     </div>
//     </>
//   );
// }

// export default Contact;





















import Location from '../../public/location.png';
import Phone from '../../public/phone.png';
import Clock from '../../public/clock.png';
import WarrantyBanner from "../components/WarrantyBanner";
import "../styles/Contact.css";
import * as yup from "yup"; // library for validation
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    yourname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState({});
  const [toastVisible, setToastVisible] = useState(false);

  const userSchema = yup.object().shape({
    yourname: yup.string().required("This field is required"),
    email: yup
      .string()
      .email("Please enter a valid email address")
      .required("This field is required"),
    subject: yup.string().required("This field is required"),
    message: yup.string().required("This field is required"),
  });

  async function formValidation() {
    try {
      const res = await userSchema.validate(formData, { abortEarly: false });
      setError({});
      return true;
    } catch (e) {
      const newErrors = {};
      e.inner.forEach((error) => {
        newErrors[error.path] = error.message;
      });
      setError(newErrors);
      return false;
    }
  }

  async function handleOnsubmitForm(event) {
    event.preventDefault();
    const isValid = await formValidation();
    if (isValid) {
      setToastVisible(true);
      setTimeout(() => {
        setToastVisible(false);
      }, 3000);
      setFormData({
        yourname: "",
        email: "",
        subject: "",
        message: "",
      });
    }
  }

  function handleOnChange(event) {
    const keyName = event.target.name;
    let keyValue = event.target.value;
    const type = event.target.type;
    if (type === "checkbox") {
      keyValue = event.target.checked;
    }
    setFormData({
      ...formData,
      [keyName]: keyValue,
    });
  }

  return (
    <>
      <div>
        {/* Banner */}
        <div className="contactBanner">
          <h2>Contact</h2>
          <p>
            <span>Home {">"} </span>
            Contact
          </p>
        </div>

  

        {/* Contact Titles */}
        <div className="contactTitles">
          <h2>Get In Touch With Us</h2>
          <p>
            For more information about our products & services, feel free to
            drop us an email. Our staff will always be there to help you out.
          </p>
        </div>


              <section className="moreContact container">
          <ul className="infoContact">
            <li>
              <img src={Location} alt="Location" />
              <div>
                <h2>Address</h2>
                <p>236 5th SE Avenue, New York NY10000, United States</p>
              </div>
            </li>
            <li>
              <img src={Phone} alt="Phone" />
              <div>
                <h2>Phone</h2>
                <p>Mobile: +(84) 546-6789</p>
                <p>Hotline: +(84) 456-6789</p>
              </div>
            </li>
            <li>
              <img src={Clock} alt="Working Time" />
              <div>
                <h2>Working Time</h2>
                <p>Monday-Friday: 9:00 - 22:00</p>
                <p>Saturday-Sunday: 9:00 - 21:00</p>
              </div>
            </li>
          </ul>
       

        {/* Contact Form Section */}
        <div className="contactFormContainer">
          <form className="contactForm" onSubmit={handleOnsubmitForm}>
            <label>
              Your name
              <input
                type="text"
                name="yourname"
                placeholder="Your Name"
                value={formData.yourname}
                onChange={handleOnChange}
              />
              {error.yourname && <span className="error">{error.yourname}</span>}
            </label>

            <label>
              Email address
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleOnChange}
              />
              {error.email && <span className="error">{error.email}</span>}
            </label>

            <label>
              Subject
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleOnChange}
              />
              {error.subject && <span className="error">{error.subject}</span>}
            </label>

            <label>
              Message
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleOnChange}
              ></textarea>
              {error.message && <span className="error">{error.message}</span>}
            </label>

            <div className="contactSubmitButton">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
        </section>
        {/* Warranty Banner */}
        <WarrantyBanner />
      </div>
    </>
  );
}

export default Contact;