import { LiaHandPointLeftSolid } from "react-icons/lia";
import Background from "./counter-bc.jpg"
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdThumbUp } from "react-icons/md";
import { FaCar } from "react-icons/fa6";
import { IoMdCodeDownload } from "react-icons/io";
import { FaTrophy } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaTruck } from "react-icons/fa";
import Topcontainer from "../Ui/Topcontainer/Topcontainer";
import "./Aboutus.css"


const Aboutus = () => {
    return (
        <div>
            <div className="mx-10 md:mx-20 xl:mx-28 mt-14 ">
                <Topcontainer className="-mx-10 md:-mx-20 xl:-mx-28 top-container h-[380px] bg-cover mb-20 -mt-14" firsturl="/" securl="/about" firsttitle="خانه" sectitle="درباره ما" img={require("../../img/aboutusbread.jpg")} title="درباره ما" />
                <div className="grid grid-cols-1 xl:grid-cols-2 mb-10">
                    <div className="m-auto mb-8">
                        <img src={require("../../img/aboutus.jpg")} alt="aboutus-img" />
                    </div>
                    <div className="my-auto mr-4">
                        <p className="mb-8 text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
                        </p>
                        <p className="mb-8 text-justify">
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
                        </p>

                        <ul>
                            <li className="flex  mb-2">
                                <span className="my-auto ml-2 text-white bg-[#eb3e32] p-1 rounded-[50%] text-[23px]">
                                    <LiaHandPointLeftSolid />
                                </span>
                                قیمت مناسب
                            </li>
                            <li className="flex  mb-2">
                                <span className="my-auto ml-2 text-white bg-[#eb3e32] p-1 rounded-[50%] text-[23px]">
                                    <LiaHandPointLeftSolid />
                                </span>
                                ارسال رایگان
                            </li>
                            <li className="flex  mb-2">
                                <span className="my-auto ml-2 text-white bg-[#eb3e32] p-1 rounded-[50%] text-[23px]">
                                    <LiaHandPointLeftSolid />
                                </span>
                                دارای نشان اعتماد
                            </li>
                        </ul>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${require("../../img/aboutus2.jpg")})` }} className="grid grid-cols-3 h-[200px] customers -mx-10 md:-mx-20 xl:-mx-32">
                    <div className=" text-white relative my-auto mx-auto text-center w-[83px]">
                        <div className="text-[28px] mb-1 font-bold">202</div>
                        <div>
                            <div className="border-b-2 mb-2"></div>
                            <p className="text-[16px]">مشتری راضی</p>
                        </div>
                    </div>
                    <div className=" text-white relative my-auto mx-auto text-center w-[83px]">
                        <div className="text-[28px] mb-1 font-bold">15</div>
                        <div>
                            <div className="border-b-2 mb-2"></div>
                            <p className="text-[16px]">شعبه</p>
                        </div>
                    </div>
                    <div className="relative top-[-175%] right-0 text-white mx-auto text-center w-[83px]">
                        <div className="text-[28px] mb-1 font-bold">215</div>
                        <div>
                            <div className="border-b-2 mb-2"></div>
                            <p className="text-[16px]">برند</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 xl:gap-16 lg:grid-cols-3 mt-20 mb-20">
                    <div className="text-center group mb-8">
                        <div className="mb-6">
                            <span className="flex justify-center">
                                <MdThumbUp className="text-white text-[50px] p-2 outline outline-2 outline-[#363f4d] outline-offset-2 group-hover:bg-white group-hover:text-[#363f4d] transition-colors duration-500 bg-[#363f4d] rounded-[50%]" />
                            </span>
                        </div>
                        <div className="mb-3">
                            <h4 className="text-[16px] font-semibold">یک انتخاب مطمعن</h4>
                        </div>
                        <div>
                            <p className="text-[14px] w-[95%] max-w-[500px] m-auto">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </div>
                    <div className="text-center group mb-8">
                        <div className="mb-6">
                            <span className="flex justify-center">
                                <FaCar className="text-white text-[50px] p-2 outline outline-2 outline-[#363f4d] outline-offset-2 group-hover:bg-white group-hover:text-[#363f4d] transition-colors duration-500 bg-[#363f4d] rounded-[50%]" />
                            </span>
                        </div>
                        <div className="mb-3">
                            <h4 className="text-[16px] font-semibold">یک انتخاب مطمعن</h4>
                        </div>
                        <div>
                            <p className="text-[14px] w-[95%] max-w-[500px] m-auto">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </div>
                    <div className="text-center group mb-8">
                        <div className="mb-6">
                            <span className="flex justify-center">
                                <IoMdCodeDownload className="text-white text-[50px] p-2 outline outline-2 outline-[#363f4d] outline-offset-2 group-hover:bg-white group-hover:text-[#363f4d] transition-colors duration-500 bg-[#363f4d] rounded-[50%]" />
                            </span>
                        </div>
                        <div className="mb-3">
                            <h4 className="text-[16px] font-semibold">یک انتخاب مطمعن</h4>
                        </div>
                        <div>
                            <p className="text-[14px] w-[95%] max-w-[500px] m-auto">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 lg:gap-y-0 gap-y-8 my-20 ">
                    <div className="flex lg:border-l-[2px] lg:border-gray-400 justify-center">
                        <div className="my-auto text-[50px] text-[#363f4d] ml-4 -mr-2 sm:-mr-6">
                            <FaTrophy />
                        </div>
                        <div>
                            <h4 className="text-[16px] font-semibold mb-1">اعتماد</h4>
                            <p className="text-[14px]">محصولات اصل</p>
                        </div>
                    </div>
                    <div className="flex lg:border-l-[2px] lg:border-gray-400 justify-center">
                        <div className="my-auto text-[50px] text-[#363f4d] ml-4">
                            <MdPayment />
                        </div>
                        <div>
                            <h4 className="text-[16px] font-semibold mb-1">پرداخت</h4>
                            <p className="text-[14px]">پرداخت امن</p>
                        </div>
                    </div>
                    <div className="flex lg:border-l-[2px] lg:border-gray-400 justify-center">
                        <div className="my-auto text-[50px] text-[#363f4d] ml-4">
                            <BiSupport />
                        </div>
                        <div>
                            <h4 className="text-[16px] font-semibold mb-1">پشتیبانی</h4>
                            <p className="text-[14px]">پشتیبانی 24 ساعته</p>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="my-auto text-[50px] text-[#363f4d] ml-4">
                            <FaTruck />
                        </div>
                        <div>
                            <h4 className="text-[16px] font-semibold mb-1">ارسال</h4>
                            <p className="text-[14px]">ارسال رایگان</p>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ textAlignLast: "center" }} className="bg-[#fbfafa] pt-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4  -mb-14">
                <div className="pb-20 xl:pb-0 xl:my-0 ml-8 mr-8 my-auto">
                    <h4 className="text-[16px] font-bold mb-2">درباره ما</h4>
                    <p className="text-[14px] text-justify">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،</p>
                </div>
                <div className="md:mb-10 mb-12">
                    <h4 className="text-[16px] font-bold mb-2 ">
                        محصولات
                    </h4>
                    <dvi>
                        <ul>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        مد و پوشاک
                                    </span>
                                </li>
                            </a>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        وسایل دیجیتال
                                    </span>
                                </li>
                            </a>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        لوازم التحریر
                                    </span>
                                </li>
                            </a>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        آرایشی بهداشتی
                                    </span>
                                </li>
                            </a>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        لوازم خانگی
                                    </span>
                                </li>
                            </a>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        تجهیزات
                                    </span>
                                </li>
                            </a>
                        </ul>
                    </dvi>
                </div>
                <div className="md:mb-0 mb-12">
                    <h4 className="text-[16px] font-bold mb-2 ">
                        حساب کاربری
                    </h4>
                    <dvi>
                        <ul>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1 ">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        سفارش ها
                                    </span>
                                </li>
                            </a>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        مورد علاقه ها
                                    </span>
                                </li>
                            </a>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        ورود
                                    </span>
                                </li>
                            </a>
                            <a className="cursor-default" href="#">
                                <li className="text-[14px] mb-1">
                                    <span className="hover:text-[#eb3e32] transition-colors duration-300 cursor-pointer">
                                        ثبت نام
                                    </span>
                                </li>
                            </a>
                        </ul>
                    </dvi>
                </div>
                <div className="md:mb-0 mb-12 flex flex-col justify-self-center">
                    <h4 className="text-[16px] font-bold mb-2 ">
                        اطلاعات
                    </h4>
                    <dvi>
                        <ul>
                            <li className="text-[14px] mb-2 flex">
                                <span className="text-[20px] text-[#eb3e32] ml-3"><IoLocationOutline /></span>
                                تهران، شهرک غرب، مجتمع ایرانیان
                            </li>
                            <li className="text-[14px] mb-2 flex">
                                <span className="text-[18px] text-[#eb3e32] ml-3"><BsTelephone /></span>
                                +025 2155 3255
                            </li>
                            <li className="text-[14px] mb-2 flex">
                                <span className="text-[20px] text-[#eb3e32] ml-3"><MdOutlineMailOutline /></span>
                                info@gmail.com
                            </li>
                        </ul>
                    </dvi>
                </div>
            </div>
        </div>
    )
}

export default Aboutus