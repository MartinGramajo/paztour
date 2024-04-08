import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

export default function FormContactCel() {
  const [validated, setValidated] = useState(false);
  const form = useRef();

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
        title: "Mensaje enviado exitosamente. ",
        showConfirmButton: false,
        timer: 2000,
      });
      form.reset();
      setValidated(false); //
    } else {
      setValidated(true);
      Swal.fire({
        icon: "error",
        title: "Por favor verifica los datos.",
      });
    }
  };

  return (
    <div className="my-5">
      <div className="text-white text-center mt-5 mb-1">
        <h1 className="pt-4" style={{ fontSize: "14px", fontWeight: "bold" }}>
          TE GUSTARÍA UNA ATENCIÓN PERSONALIZADA
        </h1>
      </div>
      <div>
        <Form
          className="form-responsive px-4 mt-5"
          style={{ backgroundColor: "#181818" }}
          ref={form}
          noValidate
          validated={validated}
          onSubmit={sendEmail}
        >
          <div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label className="text-white">
                  Nombre completo <span className="color-error">*</span>
                </Form.Label>
                <Form.Control
                  className="shorts-inputs border-0 text-white"
                  required
                  type="text"
                  name="name"
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Por favor verifique sus datos.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </div>
          <div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom01">
                <Form.Label className="text-white">
                  Número de móvil<span className="color-error">*</span>
                </Form.Label>
                <Form.Control
                  className="length-inputs border-0"
                  type="tel"
                  name="cel"
                  pattern="[0-9]*" // Expresión regular que permite solo números
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Por favor verifique sus datos.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </div>
          <div>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="validationCustom03">
                <Form.Label className="text-white">
                  Email <span className="color-error">*</span>{" "}
                </Form.Label>
                <Form.Control
                  className="shorts-inputs border-0 text-white"
                  type="email"
                  name="email"
                  required
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                  Por favor verifique sus datos.
                </Form.Control.Feedback>
              </Form.Group>
            </Row>
          </div>

          <div className="px-4">
            <Button className="get-Whitelsted border-0 mt-2 mb-3" type="submit">
              ENVIAR
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
