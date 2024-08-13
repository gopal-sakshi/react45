import { useState } from 'react';

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>El Clascio</h2>
            <Panel title="RMA" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)} >
                Real Madrid is most successful club in UCL
            </Panel>
            <br></br>
            <Panel title="Barca" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)}>
                The match between RMA & Barca is called El Clasico
            </Panel>
        </>
    );
}

function Panel({ title, children, isActive, onShow}) {
    let content = `<p>${children}</p>`;
    let showBtn = `<button onClick=${onShow}>Show </button>`
    return (
        <section className="panel">
            <h3>{title}</h3>
            {/* { isActive ? ( content ) : ( showBtn) } */}
            { isActive ? ( <p>{children}</p>) : (<button onClick={onShow}> Show </button>) }
        </section>
    );
}
