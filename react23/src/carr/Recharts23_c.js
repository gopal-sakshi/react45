import { Bar, BarChart, Tooltip, XAxis, YAxis, ResponsiveContainer, Cell, LabelList } from "recharts";

const margin23 = { top: 6, right: 50, left: 0, bottom: 0 };
const colors = [
    "#138185", "#26a0a7", "#65d3da", "#79d69f", "#cbe989", 
    "#ebf898", "#f9ec86", "#fad144", "#ec983d", "#d76c6c"
];

const data = [
    { name: "Page A", pv: 2400, amt: 2400 },
    { name: "Page B", pv: 1398, amt: 2210 },
    { name: "Page C", pv: 9800, amt: 2290 },
    { name: "Page D", pv: 3908, amt: 2000 },
    { name: "Page E", pv: 4800, amt: 2181 },
    // { name: "Page F", pv: 3800, amt: 2500 },
    // { name: "Page G", pv: 4300, amt: 2100 },
    // { name: "Page H", pv: 4300, amt: 2100 },
    // { name: "Page I", pv: 4300, amt: 2100 },
    // { name: "Page J", pv: 4300, amt: 2100 }
];

const jingChak = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" height={800} aspect={12.0 / 6.0}>
                <BarChart data={data} layout="vertical" margin={margin23} >
                    <Tooltip />
                    <XAxis type="number" className="xaxies" dy={1} />
                    <YAxis type="category" />
                    <Bar dataKey="pv" fill="#8884d8" maxBarSize={10}>
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={colors[index]} />
                        ))}
                        <LabelList dataKey="pv" position="right" />
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}


export default jingChak;