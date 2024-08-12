const Footer = () => {
    const link = "https://google.com";
    const target = "_blank";

    return (
        <div className="container">
            Copyright © <small>{new Date().getFullYear()}</small> Dev23{" "}
            <a href={link} target={target}>Google23</a>
        </div>
    );
};

export default Footer;