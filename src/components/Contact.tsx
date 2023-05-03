import Footer from "./Footer";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-div">
      <h2>Contact us</h2>
        <tbody>
            <tr>
                <td>
                    <p>Name</p>
                </td>
                <td>
                    <input name="myEmail" type="text" />
                </td>
            </tr>
            <tr>
                <td>
                    <p>Email</p>
                </td>
                <td>
                   <input name="myEmail" type="text" />
                </td>
            </tr>

            <tr>
                <td>
                    <p>Phone</p>
                </td>
                <td>
                    <input name="myPhone" type="text" />
                </td>
            </tr>

            <tr>
                <td>
                    <p>Subject</p>
                </td>
                <td>
                    <input name="mySubject" type="text" />
                </td>
            </tr>

            <tr>
                <td>
                    <input type="submit" value="Send" />
                </td>
            </tr>
        </tbody>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
