import { Routes, Route, useNavigate, useLocation } from "react-router-dom-v6";


import H2Element23 from './H2Element23';

export default function JingChak() {

    const location = useLocation();
    const { hash, pathname, search } = location;

    const navigate = useNavigate();
    const handleHome = () => { navigate('/'); }
    return (
        <>
            {pathname != '/' ? 
                <button onClick={handleHome}>home ki pora</button> : 
                <button>home lo unnav ra</button> 
            }
            <div className="border23">
                Pathname: <b>{pathname}</b><br />
                Search params: <b>{search}</b><br />
            </div>
            <Routes>
                <Route path="/" element={<HomePath23 />} />
                <Route path="/h2" element={<H2Element23 />} />
                <Route path="/button23" element={<Button23 />} />
                <Route path="/button24" element={<PeddaButton11 />} />
            </Routes>
        </>
    )
}

function HomePath23() {
    const navigate = useNavigate();
    const handleH2 = () => { navigate('/h2'); }
    const handle = (path23) => { navigate(path23) }
    return (
        <>
            <h4>idi home path abbaayi</h4>
            <button onClick={handleH2}>h2 </button>
            <button onClick={() => handle('button23')}>ChinnaBtn </button>
            <button onClick={() => handle('button24')}>PeddaBtn </button>
        </>
    )
}

function Button23() {
    return <button>chinnaBtn</button>
}

function PeddaButton11() {
    return <button style={{fontSize: "30px"}}>PeddaBtn</button>
}