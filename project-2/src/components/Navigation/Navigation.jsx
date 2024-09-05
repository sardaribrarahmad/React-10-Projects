import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
    <nav className={`${styles.navigation} contanier`}>
        <div className="logo">
         <img src="./images/Frame 2 1.png" alt="logo" />
        </div>

        <div className="Menu">
            <ul>
                <li href="#">Home</li>
                <li href="#">ABOUT</li>
                <li href="#">CONTACT</li>
            </ul>
        </div>
    </nav>
  );
};

export default Navigation;