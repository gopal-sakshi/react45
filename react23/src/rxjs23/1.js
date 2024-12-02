import { bind } from "@react-rxjs/core"     // bind = used to connect a stream to a hook.
import { createSignal } from "@react-rxjs/utils"        // signal == an entry point to react-rxjs.

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
// const [textChange$, setText] = createSignal<string>();
// const [useText, text$] = bind(textChange$, "")

export default function TextInput() {
    // const text = useText()

    // return (
    //     <div>
    //         <input type="text" value={text} placeholder="Type something..." onChange={(e) => setText(e.target.value)}/>
    //         <br />
    //         Echo: {text}
    //     </div>
    // )
    return <h3>edo error vastundi, later</h3>
}