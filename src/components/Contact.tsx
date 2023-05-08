import Footer from "./Footer";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact">
      <div className="contact-div">
        <h2>CONTACT US</h2>
        <form onSubmit={handleSubmit}>
          <tbody>
            <tr>
              <td className="input-td">
                <p>Name</p>
              </td>
              <td>
                <input name="myEmail" type="text" />
              </td>
            </tr>
            <tr className="table-line"></tr>
            <tr>
              <td style={{ height: "40px"}}>
                <p>Email</p>
              </td>
              <td>
                <input name="myEmail" type="text" />
              </td>
            </tr>
            <tr className="table-line"></tr>
            <tr>
              <td className="input-td">
                <p>Phone</p>
              </td>
              <td>
                <input name="myPhone" type="text" />
              </td>
            </tr>
            <tr className="table-line"></tr>
            <tr>
              <td className="input-td">
                <p>Subject</p>
              </td>
              <td>
                <input name="mySubject" type="text" />
              </td>
            </tr>
            <tr className="table-line"></tr>
            <tr>
              <td>
                <p>Inquiry</p>
              </td>
              <td className="textarea-td">
                <textarea
                  name="mySubject"
                  style={{ height: "180px", width: "98%"}}
                />
              </td>
            </tr>
            <tr className="table-line"></tr>
          </tbody>
          <button>Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
