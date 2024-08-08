import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import Topcontainer from "../Ui/Topcontainer/Topcontainer";


const Support = () => {


    return (
        <div>
            <Topcontainer className="top-container h-[380px] bg-cover mb-20" firsturl="/" securl="/support" firsttitle="خانه" sectitle="پشتیبانی" img={require("../../img/contactbread.jpg")} title="پشتیبانی" />
            <div className="mx-10 md:mx-16 lg:mx-24 xl:mx-36 mt-12 mb-24 gap-x-12 grid lg:grid-cols-3">
                <div className="">
                    <h2 className="border-b-[3px] text-[20px] pb-2 border-[#eb3e32] max-w-fit font-bold mb-10">
                        اطلاعات ما
                    </h2>
                    <div>
                        <p className="mb-10 text-justify text-[14px]">
                            از آنجا که لورم ایپسوم، شباهت زیادی به متن های واقعی دارد، طراحان معمولا از لورم ایپسوم استفاده میکنند تا فقط به مشتری یا کار فرما نشان دهند که قالب طراحی شده بعد از اینکه متن در آن قرار میگرد چگونه خواهد بود و فونت ها و اندازه ها چگونه در نظر گرفته شده است.
                        </p>
                        <div className="flex gap-4 mb-4">
                            <span className="bg-[#363f4d] text-[16px] text-white rounded-[50%] p-3">
                                <IoLocationSharp />
                            </span>
                            <p className="my-auto">
                                تهران، شهرک غرب، مجتمع ایرانیان
                            </p>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <span className="bg-[#363f4d] text-[16px] text-white rounded-[50%] p-3">
                                <FaPhone />
                            </span>
                            <p className="my-auto">
                                0252255654+
                            </p>
                        </div>
                        <div className="flex gap-4 mb-4">
                            <span className="bg-[#363f4d] text-[16px] text-white rounded-[50%] p-3">
                                <MdOutlineMailOutline />
                            </span>
                            <p className="my-auto">
                                info@gmail.com
                            </p>
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <h2 className="border-b-[3px] text-[20px] pb-2 border-[#eb3e32] max-w-fit font-bold mb-10">
                        ارسال پیام
                    </h2>
                    <form className="sm:grid  grid-cols-2 gap-8" method='post'>
                        <div className="flex flex-col">
                            <label for="firstname" className="text-[14px] font-bold">نام شما</label>
                            <input id="firstname" name="firstname" className="border-[1px] border-[#cdcdcd] pr-3 py-2 w-full mt-2 placeholder-[#6c757d]" type="text" placeholder="نام خود را وارد کنید" />
                        </div>
                        <div className="flex flex-col mt-3 sm:mt-0">
                            <label for="email" className="text-[14px] font-bold">ایمیل شما</label>
                            <input id="email" name="email" className="border-[1px] border-[#cdcdcd] pr-3 py-2 w-full mt-2 placeholder-[#6c757d]" type="email" placeholder="ایمیل خود را وار کنید" />
                        </div>
                        <div className="flex flex-col mt-3 sm:mt-0">
                            <label for="phone" className="text-[14px] font-bold">تلفن شما</label>
                            <input id="phone" name="phone" className="border-[1px] border-[#cdcdcd] pr-3 py-2 w-full mt-2 placeholder-[#6c757d]" type="tel" placeholder="شماره تلفن خود را وارد کنید" />
                        </div>
                        <div className="flex flex-col mt-3 sm:mt-0">
                            <label for="title" className="text-[14px] font-bold">موضوع</label>
                            <input id="title" name="title" className="border-[1px] border-[#cdcdcd] pr-3 py-2 w-full mt-2 placeholder-[#6c757d]" type="text" placeholder="موضوع را وارد کنید" />
                        </div>
                        <div className="flex flex-col col-span-2 mt-3 sm:mt-0">
                            <label for="description" className="text-[14px] font-bold">پیام شما</label>
                            <textarea id="description" name="description" className="border-[1px] border-[#cdcdcd] pr-3 py-2 w-full mt-2 placeholder-[#6c757d] resize-none pb-14" type="" placeholder="پیام خود را وارد کنید" />
                        </div>
                    </form>
                    <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white rounded-3xl py-2 px-10  mt-6" type="submit">ارسال</button>

                </div>
            </div>
        </div>

    )
}

export default Support