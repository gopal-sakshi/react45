export default function Button() {

    function handleMouseEnter() {
        console.log("naa meedaki mouse vachindi");
    }
    function handleMouseLeave() { 
        console.log("mouse nannu vadili vellipoiyndi");
    } 
    function handleClick() {
        console.log("nannu click chessarroi");
    }
    return (
        <div>
            <button onClick={handleClick}> na onnume pannillee </button>
            <button onClick={() => console.log("direct Fn ikkade raasa")}> inline function roi </button>
            <div style={{width: '150px', height: '150px', border: '1px solid'}} 
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>
                    hover cheyyi ra
            </div>
        </div>
        
    );
}