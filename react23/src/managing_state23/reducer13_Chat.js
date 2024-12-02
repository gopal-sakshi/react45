export default function Chat({ contact, message, dispatch }) {
    return (
        <section className="chat">
            <textarea value={message} placeholder={'Chat to ' + contact.name} onChange={(e) => {
                    dispatch({
                        type: 'edited_message',
                        message: e.target.value,
                    });
                }}
            />
            <br />
            <button onClick={(e) => {
                console.log("oka click to 2 Fns - oka console & oka dispatch ", contact.email)
                dispatch({
                    type: 'show_alert_clear_input',
                    message: "ikkada_em_pedite_adi_vastundi"
                })
            }}>
                Send to {contact.email}
            </button>
        </section>
    );
}
