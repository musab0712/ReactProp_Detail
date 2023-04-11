import Avatar from "./Avatar";
import Detail from "./Detail";
export default function Card(prop) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{prop.name}</h2>
        <Avatar img={prop.imgURL} />
      </div>
      <div className="bottom">
        <Detail detail={prop.phone} />
        <Detail detail={prop.email} />
      </div>
    </div>
  );
}
