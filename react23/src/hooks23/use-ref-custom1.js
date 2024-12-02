import { useState } from "react";

function useRef(value) {
    const [ref] = useState({ current: value })
    ref.current = value
    return ref
}

// https://stackoverflow.com/questions/64079396/how-would-you-implement-usecallback-using-usestate-from-scratch