"use client"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

export default function Reservation() {

    const [formData, setFormData] = useState({ firstName:'', LastName:'', email:'', phone:'', date:'', time:''})

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post('url', formData)
            toast.success(response.data.msg);
            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                date: '',
                time: '',
            });

        } catch (error) {
            toast.error(error.response?.data?.message || 'Something went wrong!');
        }
    }
  return (
    <div className='w-full flex md:flex-row flex-col md:justify-between justify-center space-y-10'>
        <div className='md:w-1/2 w-full bg-white bg-opacity-20 flex flex-col items-center py-20 px-8 bg-transparent border-l-[10px] border-red'>
        <p className='text-secondary'>
        At FOODIE, we believe that your dining experience should be exceptional from the moment you decide to join us. That’s why we’ve made it incredibly easy for you to reserve a table through our website.
        </p>
        </div>
        <div className='md:w-1/2 w-full bg-white bg-opacity-20 rounded-xl flex flex-col border  shadow-2xl shadow-black-30  py-12 px-6 bg-transparent  '>
         <h2 className="text-3xl text-primary mb-6 text-center bg-transparent">Make a Reservation</h2>
         <form onSubmit={handleSubmit} className='space-y-6 items-center bg-transparent'>
            <div className='flex flex-row  justify-around w-full space-x-4 '>
                <div className='w-1/2'>
                    <input 
                    type='text'
                    name='firstName'
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder='FIRST NAME'
                    className='bg-transparent  w-full outline-none h-8 border-b border-primary'
                    />
                </div>
               <div className='w-1/2'>
                    <input 
                    type='text'
                    name='lastName'
                    value={formData.lastName}
                    placeholder='LAST NAME'
                    onChange={handleChange}
                    className='bg-transparent   w-full outline-none h-8 border-b border-primary'
                    />
               </div>
               

            </div>
            <div className='flex flex-row  justify-around w-full bg-transparent space-x-4 '>
                <div className='w-1/2'>
                    <input 
                    type='email'
                    name='email'
                    value={formData.email}
                    placeholder='EMAIL'
                    onChange={handleChange}
                    className='bg-transparent w-full outline-none h-8 border-b border-primary'
                    />
                </div>
                <div className='w-1/2'>
                    <input 
                    type='tel'
                    name='phone'
                    value={formData.phone}
                    placeholder='MOBILE'
                    onChange={handleChange}
                    className='bg-transparent w-full outline-none h-8 border-b border-primary'
                    />
                </div>
                    
            </div>
            <div className='flex flex-row  justify-around w-full bg-transparent space-x-4 '>

                <div className='w-1/2'>
                    <input 
                    type='date'
                    name='date'
                    value={formData.date}
                    placeholder='DATE'
                    onChange={handleChange}
                    className='bg-transparent w-full outline-none h-8 border-b border-primary'
                    />
                </div>

                <div className='w-1/2'>
                    <input 
                    type='time'
                    name='time'
                    value={formData.time}
                    placeholder='TIME'
                    onChange={handleChange}
                    className='bg-transparent w-full outline-none h-8 border-b border-primary'
                    />
                </div>
                   
                    
            </div>
         </form>
    </div>
    </div>
    
  )
}
