import React,{useRef} from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_vwkcvir', 'template_yl5atrm', form.current, 'kBAtOFLYeMojqYZFR')
        .then((result) => {
            console.log(result.text);
            console.log('mesage sent');
        }, (error) => {
            console.log(error.text);
        });
    };
  
  
  const contact_info = [
    { logo: "mail", text: "smithobi220@gmail.com" },
    { logo: "logo-whatsapp", text: "09079957977"},
    {
      logo: "location",
      text: "Lagos State",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={sendEmail}  className="text-gray-900 flex flex-col flex-1 gap-5">
            <input className="text-gray-900" type="text" placeholder="Your Name" name="user_name"/>
            <input className="text-gray-900"  type="Email" placeholder="Your Email Address"  name="user_email"/>
            <textarea  name="message" placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
