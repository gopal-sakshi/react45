// Passing event handlers as props 
// MEANING ===> parent component will specify a child’s event handler

function Button({ onClickFromParent23, children }) {
    // see, ikkada eventHandler ===> parent nunchi vachindi... as a prop... so, parent decide chestundi
    return (
        <button onClick={onClickFromParent23}>
            {children}
        </button>
    );
}

function PlayButton({ movieName }) {
    function handlePlayClick() {
        console.log(`Playing ${movieName}!`);
    }

    return (
        <Button onClickFromParent23={handlePlayClick}>
            Play "{movieName}"
        </Button>
    );
}

function UploadButton() {
    return (
        <Button onClickFromParent23={() => console.log('chumma upload cheyyi ra!')}>
            Upload Image
        </Button>
    );
}

export default function Toolbar() {
    return (
        <div>
            <PlayButton movieName="chetha cinema" />
            <UploadButton />
        </div>
    );
}
