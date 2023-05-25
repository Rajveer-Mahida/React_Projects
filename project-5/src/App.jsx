import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { getApp } from "firebase/app";
import { db } from "./config/firebase";
import NotFoundContact from "./components/NotFoundContact";
import ContactCard from "./components/ContactCard";
import Model from "./components/Model";
import useDisclouse from "./hooks/useDisclouse";

function App() {
  const [contacts, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclouse();

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactsRef = collection(db, "contacts");

        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          console.log(contactLists);
          return contactLists;
        });
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <Navbar />
      <Search />
      <div className="mt-4 flex flex-col gap-3">
          {contacts.length <= 0 ? (
            <NotFoundContact />
          ) : (
            contacts.map((contact) => (
              <ContactCard key={contact.id} contact={contact} />
            ))
          )}
        </div>
      
     
     
    </>
  );
}

export default App;
