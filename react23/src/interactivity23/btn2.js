function AlertButton({ message, children }) {
    console.log("what is children here ===> ", children)
    // AlertButton ni evadu pilichina ---> adi alert() ane eventHandler ni execute chestundi
    // adi fixed... ala kaakunda, parentComponent nunchi event handler ni provide cheste ==> see btn3.js
    return (
        <button onClick={() => alert(message)}>
            {children}
        </button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <AlertButton message="Play chesta undu!"> Play Movie23 </AlertButton>
            <AlertButton message="Upload cheyyanu, po ra"> Upload Image11 </AlertButton>
        </div>
    );
}
