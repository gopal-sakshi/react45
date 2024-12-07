import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Text } from 'recharts';
import data23 from "./chartData23.json";
var count = 1;
function Xaxis_tick23(props23) {
    const { x = 0, payload, data23 } = props23;
    console.log("payload ====> ", payload);
    return (
        <Text width={50}>{count++}</Text>
    )
}

export default function amrica23 () {

    const margin23 = { top: 5, right: 30, left: 20, bottom: 5, };
    return (
        <LineChart width={800} height={600} data={data23} margin={margin23}>
            <CartesianGrid strokeDasharray="40 4" />
            <XAxis 
                dataKey="timestamp" 
                // height={35} 
                // domain={["2024-12-04T02:55:11.121Z", "2024-12-05T02:54:48.269Z"]}
                tick={<Xaxis_tick23 input23 = { "empty" } />}
            />
            <YAxis width={40} />
            <Tooltip />
            <Legend />
            <Line type="monotone" stroke="#8884d8" dataKey="f_gaali_temp"  activeDot={{ r: 10 }} />
            {/* <Line type="monotone" stroke="#82ca9d" dataKey="uv"  dot={false}/> */}
            {/* <Line type="monotone" stroke="#ddca9d" dataKey="amt23"  dot={false}/> */}
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
