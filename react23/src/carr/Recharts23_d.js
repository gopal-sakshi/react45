import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text, ReferenceArea } from 'recharts';

function YAxisTick23 (props23) {
    // idi work autundi... just UI lo kanapadu... bcoz "hi" ---> 0,20000 madhyalo ledu gaa
    const { payload } = props23;    
    console.log("props23 ===> ", props23, payload.value);
    return (
        <>
            { (payload.value > 10000) ? 
                <Text> hib </Text> : <Text>hic</Text>  }
        </>
    )
}

export default function amrica23 () {
    const data = [
        { name: 'FY_2019', uv: 4000, pv: 2400, amt23: 19900, },
        { name: 'FY_2020', uv: 3000, pv: 1398, amt23: 2210, },
        { name: 'FY_2021', uv: 2000, amt23: 2290, },
        { name: 'FY_2022', uv: 2780, pv: 3908, amt23: 2000, },
        { name: 'FY_2023', uv: 1890, pv: 3988, amt23: 2181, },
        { name: 'FY_2024', uv: 2390, pv: 3800, amt23: 2500, },
        { name: 'FY_2025', uv: 3490, amt23: 2100, },
    ];
    const margin23 = { top: 5, right: 30, left: 20, bottom: 5, };
    return (
        <LineChart width={800} height={600} data={data} margin={margin23}>
            <CartesianGrid strokeDasharray="40 4" />        { /* line length = 40;      dash length = 4 */ }
            <XAxis dataKey="name" />
            <YAxis 
                width={40} 
                tick={ <YAxisTick23 /> } 
                // tick={ <Text> hi </Text> }           
                domain={["haa","hzzz"]}
            />
            <Tooltip />
            <ReferenceArea x1 = {'FY_2022'} x2 = {'FY_2024'} y1 = {3300} y2 = {5400} />
            <Legend />
            <Line type="monotone" name = "legend23" dataKey="pv" strokeDasharray="2 2" stroke="#8884d8" activeDot={{ r: 10 }} />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" dot={false}/>
            <Line type="monotone" dataKey="amt23" stroke="#ddca9d" dot={false}/>
        </LineChart>
    )
}

/*
    ResponsiveContainer             container component to make charts adapt to the size of parent container.
    Legend                          name of Line, Bar, Area,
    ToolTip                         specify extra info when user moves the mouse pointer over an element.
    Cell                            used by Pie, Bar, RadialBar
    strokeDasharray                 pattern of dash-gap-dash-gap ---> border/line/dotted_line;

    Tick                            sets the value of x-axis (or) y-axis
                                    https://recharts.org/en-US/api/YAxis#tickFormatter
                                    tick={false}        
                                    tick={{stroke: 'red', strokeWidth: 2}}
                                    tick={<CustomizedTick />}

    ReferenceArea                   highlight some part of the graph --> x1, x2, y1, y2
    ActiveDot                       activeDot={false}; when you hover on line ---> dot becomes bigger
*/
