import { useState } from 'react'

export default function Picture() {
    const [backgroundClass, setBgClass] = useState("background23 background--active23");
    const [picClass, setPcClass] = useState("picture23");

    function handleImgClick(e) {
        // e.preventDefault();              // adding this didnt let my code work as expected
        e.stopPropagation();                // it seems, I had to use stopPropagation() instead
        setPcClass("picture23 picture--active23")
        setBgClass("background23")
    }

    function handleBgClick(e) {
        // e.preventDefault();
        setPcClass("picture23");
        setBgClass("background23 background--active23");
    }

    return (
        <div className={backgroundClass} onClick={handleBgClick}>
            <img onClick={handleImgClick}
                className={picClass}
                alt="Rainbow houses in Kampung Pelangi, Indonesia"
                src="https://i.imgur.com/5qwVYb1.jpeg"
            />
        </div>
    );
}
