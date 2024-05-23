import { React, useState } from "react";
import RequestDemoModal from "./RequestDemoModal";
import "../Pages/CleeQ.css";

function DemoBtn() {
  const [demoShow, setDemoShow] = useState(false);
  const handleDemo = () => setDemoShow(false);

  return (
    <div>
      <div className="DemoRequest">
        <button onClick={() => setDemoShow(true)} className="DemoBTN">
          Request for demo
        </button>
      </div>{" "}
      <RequestDemoModal
        show={demoShow}
        onClose={handleDemo}
        onOpen={() => setDemoShow(true)}
      />
    </div>
  );
}

export default DemoBtn;
