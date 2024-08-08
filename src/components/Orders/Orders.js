import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import Topcontainer from "../Ui/Topcontainer/Topcontainer";


const Orders = () => {

    const [order, setorder] = useState({
        data: [
            ["../../img/order-img.jpg", "لباس زنانه مدل 4", "2000000", "1", "2000000", <button type="button"><IoMdClose className="bg-[#eb3e32] text-white rounded-sm mx-auto" /></button>],
            ["../../img/order-img.jpg", "لباس زنانه مدل 2 ", "8000000", "2", "1600000", <button type="button"> <IoMdClose className="bg-[#eb3e32] text-white rounded-sm mx-auto" /></button>],
            ["../../img/order-img.jpg", "لباس زنانه مدل 4 ", "2000000", "1", "2000000", <button type="button"> <IoMdClose className="bg-[#eb3e32] text-white rounded-sm mx-auto" /></button>],
        ],
        title: ["محصول", "نام محصول", "قیمت", "تعداد", "قیمت کل", ""]
    })



    return (
        <div className="mx-10 md:mx-20 xl:mx-32 mt-14">
                <Topcontainer className="-mx-10 md:-mx-20 xl:-mx-32 -mt-14 top-container h-[380px] bg-cover mb-20" firsturl="/" securl="/shoplist" firsttitle="خانه" sectitle="سبد خرید" img={require("../../img/cartbread.jpg")} title="سبد خرید" />

            <div className="overflow-x-auto">
                <table className="bg-white w-full mb-8 ">
                    <thead>
                        <tr className="border-[1px] border-gray-300">
                            {order.title.map((item, index) => (
                                <th key={index} className="border-[1px] border-gray-300 font-semibold px-6 py-5">
                                    {item}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-base">
                        {order.data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-[1px] border-gray-300">
                                {row.map((cell, cellIndex) => {
                                    if (cellIndex === row.length - 4) {
                                        return (
                                            <td className="border-[1px] border-gray-300 py-4 font-normal text-center text-blue " key={cellIndex}>
                                                <span className="text-[#eb3e32] py-[6px] px-7 rounded-[999px] bg-Primary-500 bg-opacity-25 text-Primary-500 ">
                                                    {cell}
                                                </span>
                                            </td>
                                        );
                                    }
                                    if (cellIndex === row.length - 2) {
                                        return (
                                            <td className="border-[1px] border-gray-300 text-[#eb3e32] py-4 font-normal text-center pl-2" key={cellIndex}>
                                                {cell}
                                            </td>
                                        );
                                    }
                                    if (cellIndex == row.length - 6) {
                                        return (
                                            <td className="border-[1px] border-gray-300">
                                                <img className="mx-auto my-2" src={require("../../img/order-img.jpg")} alt="product" />
                                            </td>
                                        )
                                    }
                                    if (cellIndex == 5 ) {
                                        return (
                                            <td className="w-[8%] text-center">
                                               {cell}
                                            </td>
                                        )
                                    }


                                    return <td className="px-10 py-4 font-normal text-center text-black" key={cellIndex}>{cell}</td>;
                                })}
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>

            <div className="md:flex justify-between mb-16">
                <div className="border-[1px] mb-6 md:mb-0 border-[#cacaca] text-center md:w-[40%] xl:w-[35%]">
                    <h4 className="border-b-[1px] border-[#cacaca] py-3 text-[16px] font-semibold">
                        کد تخفیف
                    </h4>
                    <p className="my-5 mx-auto w-[90%] text-[15px]">
                        در صورت داشتن کد تخفیف را وارد کنید
                    </p>
                    <input className="border-[1px] border-[#cdcdcd]  w-[90%] px-2 py-2 mb-5" type="text" placeholder="کد تخفیف" />
                    <div>
                        <button className="mb-6 mt-4 text-white bg-[#363f4d] hover:bg-[#464f5d] w-[90%] py-2 transition-colors duration-300">اعمال کد</button>
                    </div>
                </div>
                <div className="border-[1px] border-[#cacaca] text-center md:w-[40%] xl:w-[35%]">
                    <h4 className="border-b-[1px] border-[#cacaca] py-3 text-[16px] font-semibold">
                        کل خرید
                    </h4>
                    <div className="flex justify-between w-[90%] mx-auto mb-6 text-[15px] mt-6">
                        <p>مبلغ کل</p>
                        <p>230.00 $</p>
                    </div>
                    <div className="border-b-[3px] border-[#cacaca] border-dotted w-[90%] mx-auto">

                    </div>
                    <div className="flex justify-between text-[15px] w-[90%] mx-auto mt-6">
                        <p>کل</p>
                        <p>230.00 $</p>
                    </div>
                    <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white mt-5 mb-8 py-2 w-[90%]" type="button">
                        تکمیل خرید
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Orders