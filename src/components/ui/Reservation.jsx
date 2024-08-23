"use client"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState, useEffect } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css'



export default function Reservation() {


    useEffect(() => {
        AOS.init({ duration: 1000 })
    })

    const [formData, setFormData] = useState({ firstName: '', LastName: '', email: '', phone: '', date: '', time: '' })

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
            <ToastContainer />
            <div className='md:w-1/2 w-full  flex flex-col items-center justify-center px-8  border-l-[10px] border-red'>
                <p className='text-black'>
                    At FOODIE, we believe that your dining experience should be exceptional from the moment you decide to join us. That’s why we’ve made it incredibly easy for you to reserve a table through our website.
                </p>
            </div>
            <div className='md:w-1/2 w-full bg-white rounded-xl flex flex-col border  shadow-2xl shadow-black-30  py-12 px-6 bg-transparent' data-aos="flip-left">
                <h2 className="text-3xl text-primary mb-6 text-center bg-transparent">One Click Away</h2>
                <form onSubmit={handleSubmit} className='md:space-y-6 items-center bg-transparent'>
                    <div className='flex md:flex-row  flex-col justify-around gap-2 w-full md:space-x-4 bg-white'>
                        <div className='md:w-1/2 bg-white'>
                            <input
                                type='text'
                                name='firstName'
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder='FIRST NAME'
                                className='bg-transparent  w-full outline-none h-8 border-b border-primary'
                            />
                        </div>
                        <div className='md:w-1/2  bg-white'>
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
                    <div className='flex md:flex-row flex-col justify-around gap-2 w-full bg-transparent md:space-x-4 '>
                        <div className='md:w-1/2  bg-white'>
                            <input
                                type='email'
                                name='email'
                                value={formData.email}
                                placeholder='EMAIL'
                                onChange={handleChange}
                                className='bg-transparent w-full outline-none h-8 border-b border-primary'
                            />
                        </div>
                        <div className='md:w-1/2  bg-white'>
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
                    <div className='flex md:flex-row flex-col md:justify-around gap-2 justify-center w-full bg-transparent md:space-x-4 '>

                        <div className='md:w-1/2  bg-white flex justify-center'>
                            <input
                                type='date'
                                name='date'
                                value={formData.date}
                                placeholder='DATE'
                                onChange={handleChange}
                                className='bg-transparent w-full outline-none h-8 border-b border-primary'
                            />
                        </div>

                        <div className='md:w-1/2  bg-white'>
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
                    <div className='flex justify-center bg-white mt-4'>
                        <button type='submit' className='text-white text-lg px-8 items-center py-2 border bg-black rounded-tr-2xl rounded-br-2xl rounded-tl-2xl'>
                            Submit
                        </button >
                    </div>
                </form>
            </div>
        </div>

    )
}
