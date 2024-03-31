import { Image } from "react-bootstrap";
import timeline from "../assets/img/timelinecel.png";

export default function RoadMapCel() {
  return (
    <div className="text-center text-white container py-5" id="roadmap">
      <h1 className="mb-4">Roadmap</h1>
      <p>
        Our main goal at Garage Hub is to put together the highest quality
        standards of the classic automotive industry with the latest VR, AR and
        Blockchain technology. As a result, we aim to create professional
        digital vehicles that users are pleased to own, collect and
      </p>
      <div className="text-center">
        <Image className="my-2 py-4" src={timeline} alt="timeline" fluid />
      </div>
    </div>
  );
}
