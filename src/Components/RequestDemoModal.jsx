import { React, useState } from "react";
import { Modal } from "react-bootstrap";
import Swal from "sweetalert2";
import { FiX } from "react-icons/fi";

function RequestDemoModal({ show, onClose, onOpen }) {
  const [demoShow, setDemoShow] = useState(false);
  const handleDemo = () => setDemoShow(false);

  const handleDemoRequest = () => {
    onClose();
    setDemoShow(false);

    Swal.fire({
      customClass: {
        title: "title-class",
        icon: "icon-class",
      },

      icon: "success",
      title: "We have received your request, you will be contacted shortly",
      showConfirmButton: false,
      timer: 3000,
    });
  };

  return (
    <div>
      <div>
        <Modal
          size="lg"
          show={show}
          onHide={onClose}
          backdrop="static"
          aria-labelledby="example-modal-sizes-title-lg"
          keyboard={false}
          animation={true}
          centered
        >
          <Modal.Body>
            <div className="Solera__Cont">
              <FiX className="Solera__Close" onClick={onClose} />
            </div>
            <div className="Log__Cont">
              <img
                src="/assets/solera/ss.png"
                alt=""
                className="Log__Img__Modal"
              />
            </div>

            <div className="Solera__ModalHeadings"></div>
            <div className="Solera-Modal-Container">
              <div className="Solera__Headings">
                <div className="Solera__Headings__Note">
                  <div className="Solera-Settings-Header">Request a demo</div>
                  <div className="Solera-Settings-Note">
                    Kindly fill the form provided, we will contact you
                    immediately.
                  </div>
                </div>
              </div>
              <br />
              <br />
              <div className="FormSect-Contianer">
                <div>
                  <div className="ContactUsInput">
                    <div className="container overflow-hidden">
                      <div className="row gy-2">
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control textInputForm"
                            id="exampleFormControlInput1"
                            placeholder="First Name"
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="text"
                            className="form-control textInputForm"
                            id="exampleFormControlInput1"
                            placeholder="Last Name"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="container overflow-hidden">
                      <div className="row gy-2">
                        <div className="col-lg-6">
                          <input
                            type="email"
                            className="form-control textInputForm"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                          />
                        </div>
                        <div className="col-lg-6">
                          <input
                            type="number"
                            className="form-control textInputForm"
                            id="exampleFormControlInput1"
                            placeholder="Phonenumber"
                          />
                        </div>
                      </div>
                    </div>
                    <br />
                    <div className="container overflow-hidden">
                      <div className="row gx-5">
                        <div className="col">
                          <textarea
                            type="text"
                            placeholder="Comment"
                            className="form-control "
                            id="exampleFormControlTextarea1"
                            rows="6"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <div className="DemoRequest2">
                      <button className="DemoBTN2" onClick={handleDemoRequest}>
                        Request for a demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <br /> */}
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </div>
  );
}

export default RequestDemoModal;
