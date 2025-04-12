import React, { InputHTMLAttributes } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';

function ContactForm() {
  const observerRef = React.useRef<IntersectionObserver | null>(null);

  React.useEffect(() => {
    observerRef.current = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.scroll-reveal, .scroll-reveal-right, .scroll-reveal-left').forEach(element => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    description: ''
  });
  const HandleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  const HandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert('Form has been submited');
    setForm({
      name: '',
      email: '',
      description: ''
    });
  };
  return (
    <>
      <form onSubmit={HandleSubmit}>
        <div className="space-y-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="NameInput" className="font-inter font-medium text-base text-primary">
              {' '}
              Your Name
            </label>
            <input id="NameInput" className="py-4 px-5 rounded-md bg-background1 text-primary border-1" type="text" placeholder="Enter your name" name="name" value={form.name} onChange={HandleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="EmailInput" className="font-inter font-medium text-base text-primary">
              {' '}
              Your E-mail
            </label>
            <input id="EmailInput" name="email" className="py-4 px-5 rounded-md bg-background1 text-primary border-1" type="email" placeholder="Enter your e-mail" value={form.email} onChange={HandleChange} />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="NameInput" className="font-inter font-medium text-base text-primary">
              {' '}
              Tell me a bit more what you are looking for?
            </label>
            <textarea id="NameInput" className="py-4 px-5 rounded-md bg-background1 text-primary border-1" type="text" rows="4" cols="50" placeholder="" name="description" value={form.description} onChange={HandleChange}></textarea>
          </div>
          <button type="submit" className="bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D] rounded-full md:px-7 text-xl font-medium md:py-3 px-4 py-1">
            SUBMIT NOW
          </button>
        </div>
      </form>
    </>
  );
}

const InformationContact = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-raleway font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">Get in touch</span>
        </h1>
      </div>
      <div>
        <p className="text-primary">Have a project in mind? Looking to partner or work together? Reach out through the form and i'll get back to you in the next 48 hours.</p>
      </div>
      <div className="flex flex-row gap-5  items-center">
        <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
          <i className="fas fa-envelope"></i>
        </span>
        <p className="font-inter font-medium text-primary">Alfianr792@gmail.com</p>
      </div>
      <div className="flex flex-row gap-5  items-center">
        <span className="text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#B16CEA] to-[#FF7B5D]">
          <i className="fas fa-phone"></i>
        </span>
        <p className="font-inter font-medium text-primary">+62 895-3418-13016</p>
      </div>
    </>
  );
};

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className=" bg-background1 text-white py-20 ">
        <section className='scroll-reveal'>
          <div className="  px-7 md:px-14 py-24 space-y-8 xl:w-[40%]">
            <InformationContact />
          </div>
        </section>
        <section className='scroll-reveal'>
          <div className=" px-7 md:px-14 ">
            <ContactForm />
          </div>
        </section>
        <section className='scroll-reveal-left'>
          <div className="px-7 md:px-14 py-20 md:py-28 lg:py-40   space-y-10">
            <FAQ />
          </div>
        </section>
        <section>
          <div className=" px-7 md:px-14 ">
            <Footer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
