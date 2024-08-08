import React from "react";
import { useState } from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Topcontainer from "../Ui/Topcontainer/Topcontainer";



const Account = () => {

    const [open, setOpen] = React.useState(1);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);
    const first = open == 1
    const second = open == 2
    const third = open == 3

    const [order, setorder] = useState({
        data: [
            ["موبایل سامسونگ", "2000000", "1", "2000000"],
            ["تیشرت مردانه ", "800000", "2", "1600000"],
            ["لباسشویی ال جی", "30000000", "1", "30000000"],
        ],
        title: ["نام محصول", "قیمت", "تعداد", "قیمت کل"]
    })


    return (
        <div className="ml-10 mr-8 md:ml-16 md:mr-14 lg:ml-24 lg:mr-[5.5rem] xl:ml-36 xl:mr-[8.5rem] mt-12  mb-24">
                <Topcontainer className="-ml-10 -mr-8 md:-ml-16 md:-mr-14 lg:-ml-24 lg:mr-[-5.5rem] xl:-ml-36 xl:mr-[-8.5rem] -mt-12 top-container h-[380px] bg-cover mb-20 " firsturl="/" securl="/account" firsttitle="خانه" sectitle="حساب کاربری" img={require("../../img/account.jpg")} title="حساب کاربری" />
            <Accordion open={open === 1}>
                <AccordionHeader className="border-none mb-[-1rem] mr-2" onClick={() => handleOpen(1)}>
                    <div className="flex justify-between w-[80%] mx-auto border-[1px] border-[#cdcdcd] py-2 px-3">
                        <div className="flex">
                            <span className="bg-[#eb3e32] text-[16px] text-white -mr-3 ml-3 p-3 -my-2">
                                01
                            </span>
                            <h5 className="my-auto text-[16px] text-black">
                                اطلاعات اکانت کاربری
                            </h5>
                        </div>
                        <div className="my-auto">
                            <span className="text-[18px]">
                                {first ? <FaMinus /> : <FaPlus />}

                            </span>
                        </div>
                    </div>
                </AccordionHeader>
                <AccordionBody className="w-[80%] mx-auto border-[1px] border-[#cdcdcd] px-5 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 ">
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="firstname" className="text-black text-[16px] mb-2 mr-1">نام :</label>
                            <input name="firstname" id="firstname" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="نام خود را وارد کنید" value="مهران" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="lastname" className="text-black text-[16px] mb-2 mr-1">نام خانوادگی :</label>
                            <input name="lastname" id="lastname" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="نام خانوادگی خود را وارد کنید" value="حسنی نیا" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="email" className="text-black text-[16px] mb-2 mr-1">ایمیل :</label>
                            <input name="email" id="email" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="email" placeholder="ایمیل خود را وارد کنید" value="mehran@gmail.com" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="phone" className="text-black text-[16px] mb-2 mr-1">شماره موبایل :</label>
                            <input name="phone" id="phone" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="شماره موبایل خود را وارد کنید" value="09112325222" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="address" className="text-black text-[16px] mb-2 mr-1">آدرس :</label>
                            <input name="address" id="address" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="آدرس خود را وارد کنید" value="تهران، تهرانپارس، کوچه ی 1" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="province" className="text-black text-[16px] mb-2 mr-1">استان :</label>
                            <input name="province" id="province" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="نام استان خود را وارد کنید" value="تهران" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="city" className="text-black text-[16px] mb-2 mr-1">شهر :</label>
                            <input name="city" id="city" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="نام شهر خود را وارد کنید" value="تهران" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="zipcode" className="text-black text-[16px] mb-2 mr-1">کد پستی :</label>
                            <input name="zipcode" id="zipcode" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="کد پستی خود را وارد کنید" value="2658813499" />
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
                <AccordionHeader className="border-none mb-[-1rem] mr-2" onClick={() => handleOpen(2)}>
                    <div className="flex justify-between w-[80%] mx-auto border-[1px] border-[#cdcdcd] py-2 px-3">
                        <div className="flex">
                            <span className="bg-[#eb3e32] text-[16px] text-white -mr-3 ml-3 p-3 -my-2">
                                02
                            </span>
                            <h5 className="my-auto text-[16px] text-black">
                                اطلاعات ارسال محصول
                            </h5>
                        </div>
                        <div className="my-auto">
                            <span className="text-[18px]">
                                {second ? <FaMinus /> : <FaPlus />}

                            </span>
                        </div>
                    </div>
                </AccordionHeader>
                <AccordionBody className="w-[80%] mx-auto border-[1px] border-[#cdcdcd] px-5 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 ">
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="firstname" className="text-black text-[16px] mb-2 mr-1">نام :</label>
                            <input name="firstname" id="firstname" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="نام خود را وارد کنید" value="مهران" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="lastname" className="text-black text-[16px] mb-2 mr-1">نام خانوادگی :</label>
                            <input name="lastname" id="lastname" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="نام خانوادگی خود را وارد کنید" value="حسنی نیا" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="email" className="text-black text-[16px] mb-2 mr-1">ایمیل :</label>
                            <input name="email" id="email" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="email" placeholder="ایمیل خود را وارد کنید" value="mehran@gmail.com" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="phone" className="text-black text-[16px] mb-2 mr-1">شماره موبایل :</label>
                            <input name="phone" id="phone" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="شماره موبایل خود را وارد کنید" value="09112325222" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="address" className="text-black text-[16px] mb-2 mr-1">آدرس :</label>
                            <input name="address" id="address" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="آدرس خود را وارد کنید" value="تهران، تهرانپارس، کوچه ی 1" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="province" className="text-black text-[16px] mb-2 mr-1">استان :</label>
                            <input name="province" id="province" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="نام استان خود را وارد کنید" value="تهران" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="city" className="text-black text-[16px] mb-2 mr-1">شهر :</label>
                            <input name="city" id="city" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="نام شهر خود را وارد کنید" value="تهران" />
                        </div>
                        <div className="flex flex-col w-[90%] mb-6 mx-auto md:mx-0">
                            <label for="zipcode" className="text-black text-[16px] mb-2 mr-1">کد پستی :</label>
                            <input name="zipcode" id="zipcode" className="border-[1px] border-[#cdcdcd] px-2 py-3 text-[14px] text-black" type="text" placeholder="کد پستی خود را وارد کنید" value="2658813499" />
                        </div>
                    </div>
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
                <AccordionHeader className="border-none mb-[-1rem] mr-2" onClick={() => handleOpen(3)}>
                    <div className="flex justify-between w-[80%] mx-auto border-[1px] border-[#cdcdcd] py-2 px-3">
                        <div className="flex">
                            <span className="bg-[#eb3e32] text-[16px] text-white -mr-3 ml-3 p-3 -my-2">
                                03
                            </span>
                            <h5 className="my-auto text-[16px] text-black">
                                خلاصه سفارش ها
                            </h5>
                        </div>
                        <div className="my-auto">
                            <span className="text-[18px]">
                                {third ? <FaMinus /> : <FaPlus />}

                            </span>
                        </div>
                    </div>
                </AccordionHeader>
                <AccordionBody className="w-[80%] mx-auto border-[1px] border-[#cdcdcd] px-5 ">
                    <div className="overflow-x-auto">
                        <table className="bg-white w-full ">
                            <thead>
                                <tr className="border-[1px] border-gray-300">
                                    {order.title.map((item, index) => (
                                        <th key={index} className="font-semibold px-6 py-5">
                                            {item}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="text-base">
                                {order.data.map((row, rowIndex) => (
                                    <tr key={rowIndex} className="border-[1px] border-gray-300">
                                        {row.map((cell, cellIndex) => {
                                            if (cellIndex === row.length - 3) {
                                                return (
                                                    <td className="px-10 py-4 text-[14px] font-normal text-center text-blue " key={cellIndex}>
                                                        <span className="text-[#eb3e32] py-[6px] px-7 rounded-[999px] bg-Primary-500 bg-opacity-25 text-Primary-500 ">
                                                            {cell}
                                                        </span>
                                                    </td>
                                                );
                                            }
                                            if (cellIndex === row.length - 1) {
                                                return (
                                                    <td className="text-[#eb3e32] text-[14px] py-4 font-normal text-center pl-2" key={cellIndex}>
                                                        {cell}
                                                    </td>
                                                );
                                            }
                                            return <td className="px-10 py-4 font-normal text-[14px] text-center text-black" key={cellIndex}>{cell}</td>;
                                        })}
                                    </tr>

                                ))}
                                <tr className="border-[1px] border-gray-300">
                                    <td className="px-10 py-4 font-normal text-[14px] text-center text-black ">بهای تمام شده</td>
                                    <td className="px-10 py-4 font-normal text-center text-black"></td>
                                    <td className="px-10 py-4 font-normal text-center text-black"></td>
                                    <td className="px-10 py-4 font-normal text-[14px] text-center text-[#eb3e32] border-x-[1px] border-gray-300">33600000</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AccordionBody>
            </Accordion>
        </div>
    )
}

export default Account