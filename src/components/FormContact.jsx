import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function FormContact() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

  /*funcion para mandar msj al gmail*/
  const sendEmail = (e) => {
    const form = e.currentTarget;
    e.preventDefault();

    if (form.checkValidity() === true) {
      e.stopPropagation();
      emailjs
        .sendForm(
          "service_rg18144",
          "template_httqo6d",
          e.target,
          "user_Stg5159fb3qxm0lYluqAN"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      Swal.fire({
        icon: "success",
        title: "Mensaje enviado exitosamente.",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "Por favor verifica los datos enviados.",
      });
    }
  };

  return (
    <div>
      <div className="text-white text-center mt-5 mb-2">
        <h6 className="py-4" style={{ fontWeight: "bold", fontSize: "26px" }}>
          TE GUSTARÍA UNA ATENCIÓN PERSONALIZADA
        </h6>
      </div>
      <Form
        className=" mx-auto card p-5  form-responsive"
        style={{ backgroundColor: "#181818" }}
        s
        ref={form}
        noValidate
        validated={validated}
        onSubmit={sendEmail}
      >
        <div className="d-flex justify-content-center">
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label className="text-white">
                Nombre completo <span className="color-error">*</span>
              </Form.Label>
              <Form.Control
                className="length-inputs border-0"
                required
                type="text"
                name="name"
              />

              <Form.Control.Feedback type="invalid">
                Por favor verifique sus datos.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>

        <div className="mx-auto">
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label className="text-white">
                Número de móvil <span className="color-error">*</span>{" "}
              </Form.Label>
              <Form.Control
                className="length-inputs border-0"
                type="tel"
                name="cel"
                pattern="[0-9]*" // Expresión regular que permite solo números
                required
              />

              <Form.Control.Feedback type="invalid">
                Por favor verifique sus datos.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>
        <div className="mx-auto">
          <Row className="mb-3">
            <Form.Group as={Col} md="12" controlId="validationCustom03">
              <Form.Label className="text-white">
                Email <span className="color-error">*</span>{" "}
              </Form.Label>
              <Form.Control
                className="length-inputs border-0"
                type="email"
                name="email"
                required
              />

              <Form.Control.Feedback type="invalid">
                Por favor verifique sus datos.
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>

        <div className="d-flex justify-content-center">
          <Button
            className="get-Whitelsted border-0 mt-5 "
            type="submit"
            value="Send"
          >
            ENVIAR
          </Button>
        </div>
      </Form>
    </div>
  );
}
