import Footer from "./Footer";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="contact">
      <div className="contact-div">
        <h2>Contact us</h2>
        <form onSubmit={handleSubmit}>
            <tbody>
              <tr>
                <td>
                  <p>Name</p>
                </td>
                <td>
                  <input name="myEmail" type="text" />
                </td>
              </tr>
              <tr className="table-line">
            </tr>
              <tr>
                <td>
                  <p>Email</p>
                </td>
                <td>
                  <input name="myEmail" type="text" />
                </td>
              </tr>
              <tr className="table-line">
            </tr>
              <tr>
                <td>
                  <p>Phone</p>
                </td>
                <td>
                  <input name="myPhone" type="text" />
                </td>
              </tr>
              <tr className="table-line">
            </tr>
              <tr>
                <td>
                  <p>Subject</p>
                </td>
                <td>
                  <input name="mySubject" type="text" />
                </td>
              </tr>
              <tr className="table-line">
            </tr>
              <tr>
                <td>
                  <p>Inquiry</p>
                </td>
                <td>
                  <textarea name="mySubject" style={{ height: "150px", width: "99%" }}/>
                </td>
              </tr>
              <tr className="table-line">
            </tr>
            </tbody>
            <button>Send</button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
