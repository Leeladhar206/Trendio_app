import React, { useEffect } from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } 
 from 'recharts';
import { getAdminData, getCustomersData, getOrdersData } from '../../Redux/productReducer/action';
import { useNavigate } from 'react-router-dom';

function Home() {

  const products = useSelector((store) => store.productReducer.adminData);
  const dispatch = useDispatch();
  const customerData = useSelector((store) => store.productReducer.customers);
  const orders = useSelector((store) => store.productReducer.orders);
  
  const navigate = useNavigate()

  useEffect(() => {
    // Dispatch the action to get data
    dispatch(getAdminData());
    dispatch(getCustomersData());
    dispatch(getOrdersData())
  }, [dispatch]);

  console.log(orders)

    const data = [
        {
          name: 'Mon',
          Women: 4000,
          Men: 2400,
          amt: 2400,
        },
        {
          name: 'Tue',
          Women: 3000,
          Men: 1398,
          amt: 2210,
        },
        {
          name: 'Wed',
          Women: 2000,
          Men: 2800,
          amt: 2290,
        },
        {
          name: 'Thurs',
          Women: 2780,
          Men: 3908,
          amt: 2000,
        },
        {
          name: 'Fri',
          Women: 1890,
          Men: 4800,
          amt: 2181,
        },
        {
          name: 'Sat',
          Women: 6980,
          Men: 5200,
          amt: 2500,
        },
        {
          name: 'Sun',
          Women: 9490,
          Men: 7300,
          amt: 2100,
        },
      ];
     

  return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
        <div className='card card-zoom' onClick={() => { navigate('/admin/editProduct') }}>

                <div  className='card-inner'>
                    <h3 >PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>{products.length}</h1>
            </div>
            <div className='card card-zoom'>
                <div className='card-inner'>
                    <h3>CATEGORIES</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>{Math.floor(products.length/5)}</h1>
            </div>
            <div className='card card-zoom'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>{customerData.length}</h1>
            </div>
            <div className='card card-zoom' >
                <div className='card-inner'>
                    <h3>ORDERS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>{orders.length}</h1>
            </div>
        </div>

        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Men" fill="#8884d8" />
                <Bar dataKey="Women" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>

            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
                >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Men" stroke="#8884d8" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Women" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>

        </div>
    </main>
  )
}

export default Home