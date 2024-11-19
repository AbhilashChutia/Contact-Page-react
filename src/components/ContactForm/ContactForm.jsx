import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
    let name;
    let email;
    let text;

    const onSubmit = (event) => {
        event.preventDefault();

        name = event.target[0].value;
        email = event.target[1].value;
        text = event.target[2].value;

        console.log("name", event.target[0].value);
        console.log("email", event.target[1].value);
        console.log("text", event.target[2].value);
    };

    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <div className={styles.top_btn}>
                    <Button
                        text="VIA SUPPORT CHAT"
                        icon={<MdMessage fontSize="24px" />}
                    />
                    <Button
                        text="VIA CALL"
                        icon={<FaPhoneAlt fontSize="24px" />}
                    />
                </div>

                <Button
                    isOutline={true}
                    text="VIA EMAIL FORM"
                    icon={<HiMail fontSize="24px" />}
                />

                <form onSubmit={onSubmit}>
                    <div className={styles.form_control}>
                        <label htmlFor="name">Name</label>
                        <input type="name" name="name" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" />
                    </div>
                    <div className={styles.form_control}>
                        <label htmlFor="text">Text</label>
                        <textarea name="text" rows={8} />
                    </div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "center",
                        }}
                    >
                        <Button text="Submit" />
                    </div>
                </form>
            </div>
            <div className={styles.contact_Image}>
                <img src="./images/contact.svg" alt="contagt image" />
            </div>
        </section>
    );
};

export default ContactForm;
