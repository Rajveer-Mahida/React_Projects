import styles from "./Navigation.module.css";
// import '../App.css'
const Navigation = () => {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="images/codewithRajeer.png" alt="DoSomeCoding Icon" />
      </div>
      <ul>
        <li>Home</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default Navigation;
