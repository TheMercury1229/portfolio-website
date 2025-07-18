import SocialLinks from "./SocialLinks";

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch ">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 reveal-up">
            Let’s Connect – Collaborate or Just Say Hello to a Growing
            Developer!
          </h2>
          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[40ch] reveal-up">
            Let’s team up to bring your project ideas to life! Reach out today
            and let’s create something amazing together!
          </p>
          <SocialLinks />
        </div>
        <form
          action="https://getform.io/f/bwnnkgka"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder="John Doe"
                className="text-field reveal-up"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder="johndoe@me.com"
                className="text-field reveal-up"
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
              placeholder="Hi!"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
