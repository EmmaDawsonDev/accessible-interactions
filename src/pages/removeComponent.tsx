import { Header } from "@/components/Header/Header";
import { FormEvent, useRef, useState } from "react";

export default function RemoveComponent() {
  const [reg, setReg] = useState("");
  const [registration, setRegistration] = useState("");
  const [reg2, setReg2] = useState("");
  const [registration2, setRegistration2] = useState("");

  const handleSubmitForm = (e: FormEvent) => {
    e.preventDefault();
    setRegistration(reg);
  };

  const handleSubmitForm2 = (e: FormEvent) => {
    e.preventDefault();
    setRegistration2(reg2);
    setTimeout(() => {
      title?.current?.focus();
    }, 500);
  };

  const title = useRef<HTMLParagraphElement>(null);

  return (
    <>
      <Header />
      <main className="main">
        <h1>Removing or Replacing Components</h1>
        {!registration && (
          <form
            onSubmit={(e) => handleSubmitForm(e)}
            className="removeContainer"
          >
            <label htmlFor="reg">What is your registration?</label>
            <div>
              <input
                type="text"
                id="reg"
                name="reg"
                onChange={(e) => setReg(e.target.value)}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
        {registration && (
          <div className="removeContainer">
            <p>
              <strong>Is this your car?</strong>
            </p>
            <p>
              <strong>Registration: </strong>
              {registration}
            </p>
            <p>
              <strong>Make: </strong>Skoda
            </p>
            <p>
              <strong>Model: </strong>Fabia
            </p>
            <button>Yes</button>
            <button
              onClick={() => {
                setRegistration("");
                setReg("");
              }}
            >
              No
            </button>
          </div>
        )}
        {!registration2 && (
          <form
            onSubmit={(e) => handleSubmitForm2(e)}
            className="removeContainer"
          >
            <label htmlFor="reg2">What is your registration?</label>
            <div>
              <input
                type="text"
                id="reg2"
                name="reg2"
                onChange={(e) => setReg2(e.target.value)}
              />
              <button type="submit">Submit</button>
            </div>
          </form>
        )}
        {registration2 && (
          <div className="removeContainer">
            <p ref={title} tabIndex={-1}>
              <strong>Is this your car?</strong>
            </p>
            <p>
              <strong>Registration: </strong>
              {registration}
            </p>
            <p>
              <strong>Make: </strong>Skoda
            </p>
            <p>
              <strong>Model: </strong>Fabia
            </p>
            <button>Yes</button>
            <button
              onClick={() => {
                setRegistration2("");
                setReg2("");
              }}
            >
              No
            </button>
          </div>
        )}
      </main>
    </>
  );
}
