import "./styles.css";
import contacts from "./Contact.js";
import Card from "./Card";
import Avatar from "./Avatar";
export default function App() {
  function createCard(contact) {
    return (
      <Card
        key={contact.id}
        name={contact.name}
        imgURL={contact.imgURL}
        phone={contact.phone}
        email={contact.email}
      />
    );
  }
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="https://media.licdn.com/dms/image/C5603AQGeeuDEPsUuaw/profile-displayphoto-shrink_800_800/0/1643652634549?e=2147483647&v=beta&t=wMOUJpZ0lB-eWDKwa5fPvK5q8LkVSy42TVu2f_fmUms" />
      {contacts.map(createCard)}
    </div>
  );
}
