import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";

const userGrowthData = [
	{ month: "Jan", users: 1000 },
	{ month: "Feb", users: 1500 },
	{ month: "Mar", users: 2000 },
	{ month: "Apr", users: 3000 },
	{ month: "May", users: 4000 },
	{ month: "Jun", users: 5000 },
];

const UserGrowthChart = () => {
  return (
    <motion.div>
        <h2>User Growth</h2>
        <div className="h-[320px]">
             <ResponsiveContainer width='100%' height='100%'>
                <LineChart data={UserGrowthChart}>
                    <CartesianGrid strokeDasharray='3 3 ' stroke='#374151'/>
                    <XAxis dataKey='month' stroke='#9CA3AF'/>
                    <YAxis stroke="#9CA3AF"/>

                    <Tooltip 
                       constentStyle={{
                         backgroundColor:"rgba(31,41,55,0.8)",
                         borderColor:'4B5563',
                       }}
                        itemStyle={{color:'#E5E7EB'}}
                        />
                 <Line 
                    type='monotone'
                    dataKey='users'
                    stroke="#8B5CF6"
                    strokeWidth={2}
                    dot={{fill:"8B5CFG",strokeWidth:2,r:4}}
                    activeDot={{r:8}}/>       
                 
                </LineChart>

             </ResponsiveContainer>
        </div>
    </motion.div>
  )
}

export default UserGrowthChart