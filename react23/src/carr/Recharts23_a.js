import { LineChart, ReferenceArea, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip, AxisDomain, } from 'recharts';

export default function chart23() {
    const data23 = [
        { veg23: 'onion22', CY2020: 2432, CY2021: 2330, CY2022: 2400, CY2023: 2342, CY2024: 2422 },
        { veg23: 'tomato', CY2020: 1232, CY2021: 1244, CY2022: 1433, CY2023: 1544, CY2024: 1644 },
        { veg23: 'potato', CY2020: 2432, CY2021: 2330, CY2022: 2400, CY2023: 2342, CY2024: 2422 },
        { veg23: 'brinjal', CY2020: 2432, CY2021: 2330, CY2022: 2400, CY2023: 2342, CY2024: 2422 },
        { veg23: 'cabbage', CY2020: 2432, CY2021: 2330, CY2022: 2400, CY2023: 2342, CY2024: 2422 },
    ];
    return (
        <LineChart width={400} height={400} data={data23} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
            <XAxis dataKey="veg23" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="CY2020" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="CY2021" stroke="#387908" yAxisId={1} />
            <Line type="monotone" dataKey="CY2022" stroke="#797908" yAxisId={2} />
            <Line type="monotone" dataKey="CY2023" stroke="#04dbe4" yAxisId={3} />
            <Line type="monotone" dataKey="CY2024" stroke="#908387" yAxisId={4} />
        </LineChart>
    )
}
