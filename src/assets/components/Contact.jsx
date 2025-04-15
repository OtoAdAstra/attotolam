import "../../styles/contact.css";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1>Get in touch:</h1>
      <form action="">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </div>

        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" required />
        </div>

        <div className="form-group last-group">
          <label htmlFor="message">Message:</label>
          <input name="message" required></input>
        </div>

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
