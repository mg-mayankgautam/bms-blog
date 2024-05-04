// import React from 'react'
import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import { AreaChart, Area} from 'recharts';

const data = [
  {
    name: 'JAN',
    pv: 4,
    
  },
  {
    name: 'FEB',
    pv: 1,
    
  },
  {
    name: 'MAR',
    pv: 3,
   
  },
  {
    name: 'APR',
    pv: 3,
    
  },
  {
    name: 'JUN',
    pv: 5,
    
  },
  {
    name: 'JUL',
    pv: 3,
   
  },
  {
    name: 'AUG',
    pv: 1,
   
  },
  {
    name: 'SEPT',
    pv: 10,
   
  },
  {
    name: 'OCT',
    pv: 1,
   
  },
  {
    name: 'NOV',
    pv: 13,
    
  },
  {
    name: 'DEC',
    pv: 13,
   
  },
];


const data2 = [
    {
      name: '1',
      uv: 4,
      
      
    },
    {
      name: '2',
      uv: 3000,
     
    
    },
    {
      name: '3',
      uv: 2000,
    
    },
    {
      name: '4',
      uv: 2780,
    
    },
    {
      name: '5',
      uv: 1890,
      
    },
    {
      name: '6',
      uv: 2390,
      
    },
    {
      name: '7',
      uv: 2390,
      
    },
   
  ];

const Charts = () => {
    // export default class Example extends PureComponent {

        // render() {
          return (
            // <ResponsiveContainer width="100%" height="100%">
            <div>
              <BarChart
                width={300}
                height={250}
                data={data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
                // style={{height:'500px'}}
                className='reCharts dashboardCard'
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="rgb(255, 175, 175, 0.5)" activeBar={<Rectangle fill="pink" stroke="blue" />} />
              </BarChart>

              <AreaChart
                width={300}
                height={250}
                data={data2}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0,
                }}
                className='reCharts dashboardCard'
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                </AreaChart>
       
     {/* } */}
      </div>
    );
}

export default Charts