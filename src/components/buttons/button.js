import Button from "react-bootstrap/Button";
import "./button.css";

function Buttons() {
  return (
    <>
      <div className="Aclass">
        <div className="Bclass">
          <Button variant="primary" size="lg">
            Primary
          </Button>{" "}
          <Button variant="secondary" size="lg">
            Secondary
          </Button>{" "}
        </div>
        <div class="Bclass">
          <Button variant="success" size="lg">
            Success
          </Button>{" "}
          <Button variant="warning" size="lg">
            Warning
          </Button>{" "}
        </div>
        <div class="Bclass">
          <Button variant="danger" size="lg">
            Danger
          </Button>{" "}
          <Button variant="info" size="lg">
            Info
          </Button>{" "}
          <div />
          <div class="Bclass">
            <Button variant="light" size="lg">
              Light
            </Button>{" "}
            <Button variant="dark" size="lg">
              Dark
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

export default Buttons;
