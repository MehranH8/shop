import { Carousel, Typography, Button } from "@material-tailwind/react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Directions } from "@mui/icons-material";
import "./home.css";
import { Rating } from "@material-tailwind/react";
import { FiShoppingCart } from "react-icons/fi";
import Newscard from "./Newscard/Newscard";
import { FaTruck } from "react-icons/fa6";
import { MdPayment } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineMailOutline } from "react-icons/md";




const Home = (props) => {
    var options = {
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    }

    return (
        <div className="container m-auto mt-10 mb-24">
            <div className=" mx-6">
                <div className="grid gap-6  mr-1 mb-[-13rem] justify-items-center">
                    {/*carousel */}
                    <div className="col-start-1 grid col-end-12 lg:col-start-1 lg:col-end-8 overflow-y-hidden mb-[-33%] lg:mb-0">

                        <Carousel className="h-[70.5%] overflow-y-hidden carousel">
                            <div className="relative">
                                <img
                                    src={require("../../img/slider-img-6.jpg")}
                                    alt="carousel-img"
                                    className="h-[100vh] w-full object-cover"
                                />
                                <div className="absolute inset-0 grid w-full place-items-center h-[100vh] bg-black/35">
                                    <div className="w-3/4 text-center mb-24 lg:mb-8 md:w-2/4">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-xl md:text-2xl "
                                        >
                                            50 درصد تخفیف برای همه محصولات
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-6 text-[16px]"

                                        >
                                            فقط تا فردا 50 درصد تخفیف روی همه ی اجناس بگیرید
                                        </Typography>
                                        <div className="flex justify-center">
                                            <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white text-[16px] rounded-3xl py-2 px-10" type="button">
                                                سفارش
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={require("../../img/slider-img-6.jpg")}
                                    alt="carousel-img"
                                    className="h-[100vh] w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/35">
                                    <div className="w-3/4 text-center md:w-2/4">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-xl md:text-2xl "
                                        >
                                            50 درصد تخفیف برای همه محصولات
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-6 text-[16px]"
                                        >
                                            فقط تا فردا 50 درصد تخفیف روی همه ی اجناس بگیرید
                                        </Typography>
                                        <div className="flex justify-center">
                                            <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white text-[16px] rounded-3xl py-2 px-10" type="button">
                                                سفارش
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src={require("../../img/slider-img-6.jpg")}
                                    alt="carousel-img"
                                    className="h-[100vh] w-full object-cover"
                                />
                                <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/35">
                                    <div className="w-3/4 text-center md:w-2/4">
                                        <Typography
                                            variant="h1"
                                            color="white"
                                            className="mb-4 text-xl md:text-2xl "
                                        >
                                            50 درصد تخفیف برای همه محصولات
                                        </Typography>
                                        <Typography
                                            variant="lead"
                                            color="white"
                                            className="mb-6 text-[16px]"
                                        >
                                            فقط تا فردا 50 درصد تخفیف روی همه ی اجناس بگیرید
                                        </Typography>
                                        <div className="flex justify-center">
                                            <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white text-[16px] rounded-3xl py-2 px-10" type="button">
                                                سفارش
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Carousel>



                    </div>
                    {/*carousel */}
                    <div className="-ml-2 col-start-1 grid col-end-12 min-w-full lg:col-start-8 lg:col-end-12 group">
                        <img className="w-[99.5%] h-[120vh] lg:w-full lg:h-[98.5%] xl:h-[93.5%]" src={require("../../img/banner1.jpg")} alt="fashion-img" />
                        <div className="bg-white opacity-0 group-hover:opacity-100 bg-opacity-85 transition-opacity duration-500 ease-in-out py-9 mx-8 relative -top-[348%] lg:-top-[256%] xl:-top-[306%] flex flex-col items-center h-[314%] lg:h-[230%] xl:h-[258%] mt-[9%] justify-center">
                            <h3 className="mb-4 text-[18px] font-semibold">
                                پوشاک زنانه
                            </h3>
                            <p className="mb-4 text-[16px] mx-4 text-center">
                                تا 25 درصد تخفیف برای لباس های جدید
                            </p>
                            <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white rounded-3xl py-2 px-8" type="button">
                                سفارش
                            </button>
                        </div>
                    </div>

                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-items-center w-[101%]">
                    <div className="group w-full h-[233px] mb-6 -mt-6 lg:mt-0">
                        <img className="w-full h-[233px]" src={require("../../img/banner2.jpg")} alt="men-fashion" />
                        <div className="bg-white opacity-0 group-hover:opacity-100 bg-opacity-85 transition-opacity duration-500 ease-in-out py-9 ml-8 mr-8 relative -top-[90%] flex flex-col items-center">
                            <h3 className="mb-4 text-[18px] font-semibold">
                                پوشاک مردانه
                            </h3>
                            <p className="mb-4 text-[16px]">
                                تا 25 درصد تخفیف برای پوشاک مردانه
                            </p>
                            <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white rounded-3xl py-2 px-8" type="button">
                                سفارش
                            </button>
                        </div>
                    </div>
                    <div className="group w-full h-[233px]">
                        <img className="w-full h-[233px]" src={require("../../img/banner3.jpg")} alt="women-fashion" />
                        <div className="bg-white  opacity-0 group-hover:opacity-100 bg-opacity-85 transition-opacity duration-500 ease-in-out py-9 ml-8 mr-8 relative -top-[90%] flex flex-col items-center">
                            <h3 className="mb-4 text-[18px] font-semibold">
                                پوشاک زنانه
                            </h3>
                            <p className="mb-4 text-[16px]">
                                تا 25 درصد تخفیف برای پوشاک زنانه
                            </p>
                            <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white rounded-3xl py-2 px-8" type="button">
                                سفارش
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="mt-12 mb-8 mx-6">
                    <h2 className="border-b-[3px] text-[20px] pb-2 border-[#eb3e32] max-w-fit font-bold">
                        محصولات پر فروش
                    </h2>
                </div>
                <OwlCarousel className="owl-container " dragClass margin={10} loop nav {...options}>

                    <div key={1} class="w-full lg:w-[70%] border-[1px] border-gray-300 pb-4 group border-b-white">
                        <div className="items-center flex flex-col">
                            <img style={{ width: "85%" }} className="max-w-[250px] mt-[22px]" src={require("../../img/product1.jpg")} alt="product-img" />
                            <h4 className="text-[16px] mt-6  mb-3 ">
                                لباس زنانه
                            </h4>
                            <div className="flex xl:gap-10 xl:flex-row flex-col">
                                <Rating className="mb-4 text-[10px]" value={4} />
                                <p className=" text-[16px] text-center mb-4">
                                    650,000
                                </p>
                            </div>
                            <Button className="text-white bg-[#363f4d] px-8 py-3 rounded-2xl hover:bg-[#eb3e32] transition-colors duration-300">سفارش</Button>

                        </div>
                    </div>
                    <div key={2} class="w-full lg:w-[70%] border-[1px] border-gray-300 pb-4 group border-b-white">
                        <div className="items-center flex flex-col">
                            <img style={{ width: "85%" }} className="max-w-[250px] mt-[22px]" src={require("../../img/product2.jpg")} alt="product-img" />
                            <h4 className="text-[16px] mt-6  mb-3 ">
                                لباس زنانه
                            </h4>
                            <div className="flex xl:gap-10 xl:flex-row flex-col">
                                <Rating className="mb-4 text-[10px]" value={4} />
                                <p className=" text-[16px] text-center mb-4">
                                    650,000
                                </p>
                            </div>
                            <Button className="text-white bg-[#363f4d] px-8 py-3 rounded-2xl hover:bg-[#eb3e32] transition-colors duration-300">سفارش</Button>

                        </div>
                    </div>
                    <div key={3} class="w-full lg:w-[70%] border-[1px] border-gray-300 pb-4 group border-b-white">
                        <div className="items-center flex flex-col">
                            <img style={{ width: "85%" }} className="max-w-[250px] mt-[22px]" src={require("../../img/product3.jpg")} alt="product-img" />
                            <h4 className="text-[16px] mt-6  mb-3 ">
                                لباس مردانه
                            </h4>
                            <div className="flex xl:gap-10 xl:flex-row flex-col">
                                <Rating className="mb-4 text-[10px]" value={4} />
                                <p className=" text-[16px] text-center mb-4">
                                    650,000
                                </p>
                            </div>
                            <Button className="text-white bg-[#363f4d] px-8 py-3 rounded-2xl hover:bg-[#eb3e32] transition-colors duration-300">سفارش</Button>

                        </div>
                    </div>
                    <div key={4} class="w-full lg:w-[70%] border-[1px] border-gray-300 pb-4 group border-b-white">
                        <div className="items-center flex flex-col">
                            <img style={{ width: "85%" }} className="max-w-[250px] mt-[22px]" src={require("../../img/product4.jpg")} alt="product-img" />
                            <h4 className="text-[16px] mt-6  mb-3 ">
                                لباس زنانه
                            </h4>
                            <div className="flex xl:gap-10 xl:flex-row flex-col">
                                <Rating className="mb-4 text-[10px]" value={4} />
                                <p className=" text-[16px] text-center mb-4">
                                    650,000
                                </p>
                            </div>
                            <Button className="text-white bg-[#363f4d] px-8 py-3 rounded-2xl hover:bg-[#eb3e32] transition-colors duration-300">سفارش</Button>

                        </div>
                    </div>
                    <div key={5} class="w-full lg:w-[70%] border-[1px] border-gray-300 pb-4 group border-b-white">
                        <div className="items-center flex flex-col">
                            <img style={{ width: "85%" }} className="max-w-[250px] mt-[22px]" src={require("../../img/product1.jpg")} alt="product-img" />
                            <h4 className="text-[16px] mt-6  mb-3 ">
                                لباس زنانه
                            </h4>
                            <div className="flex xl:gap-10 xl:flex-row flex-col">
                                <Rating className="mb-4 text-[10px]" value={4} />
                                <p className=" text-[16px] text-center mb-4">
                                    650,000
                                </p>
                            </div>
                            <Button className="text-white bg-[#363f4d] px-8 py-3 rounded-2xl hover:bg-[#eb3e32] transition-colors duration-300">سفارش</Button>

                        </div>
                    </div>
                    <div key={6} class="w-full lg:w-[70%] border-[1px] border-gray-300 pb-4 group border-b-white">
                        <div className="items-center flex flex-col">
                            <img style={{ width: "85%" }} className="max-w-[250px] mt-[22px]" src={require("../../img/product2.jpg")} alt="product-img" />
                            <h4 className="text-[16px] mt-6  mb-3 ">
                                لباس زنانه
                            </h4>
                            <div className="flex xl:gap-10 xl:flex-row flex-col">
                                <Rating className="mb-4 text-[10px]" value={4} />
                                <p className=" text-[16px] text-center mb-4">
                                    650,000
                                </p>
                            </div>
                            <Button className="text-white bg-[#363f4d] px-8 py-3 rounded-2xl hover:bg-[#eb3e32] transition-colors duration-300">سفارش</Button>

                        </div>
                    </div>

                </OwlCarousel>
            </div>
            <div>
                <div className="mt-12 mb-8 mx-6 md:mx-0 lg:mx-6">
                    <h2 className="border-b-[3px] text-[20px] pb-2 border-[#eb3e32] max-w-fit font-bold mb-10">
                        آخرین خبر ها
                    </h2>
                    <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
                        <Newscard className="mt-6 w-[95%] border-[1px] border-gray-300 mb-10" img={require("../../img/blog1.jpg")} title="نکات مهم برای خرید" details="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد" />
                        <Newscard className="mt-6 w-[95%] border-[1px] border-gray-300 mb-10" img={require("../../img/blog3.jpg")} title="نکات مهم برای خرید" details="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد" />
                        <Newscard className="mt-6 w-[95%] border-[1px] border-gray-300 mb-10 md:col-span-2 xl:col-span-1 md:max-w-[50%] md:m-auto xl:max-w-none xl:mt-6" img={require("../../img/blog2.jpg")} title="نکات مهم برای خرید" details="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد" />
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 py-6 mr-8 md:mr-16 lg:mr-0 lg:justify-items-center ">
                <div className="flex group mb-4 lg:mb-0">
                    <div className="group-hover:border-x-2 group-hover:border-[#eb3e32] group-hover:px-3 transition-all duration-300  ">
                        <FaTruck className="p-3 text-[75px] text-[#eb3e32] border-2 border-[#eb3e32]" />
                    </div>
                    <div>
                        <h4 className="items-center h-full text-[16px] font-bold flex mr-3">پرداخت درب محل</h4>
                    </div>
                </div>
                <div className="flex group mb-4 lg:mb-0 sm:mr-12 md:mr-16 lg:mr-0">
                    <div className="group-hover:border-x-2 group-hover:border-[#eb3e32] group-hover:px-3 transition-all duration-300  ">
                        <MdPayment className="p-3 text-[75px] text-[#eb3e32] border-2 border-[#eb3e32]" />
                    </div>
                    <div>
                        <h4 className="items-center h-full text-[16px] font-bold flex mr-3">پرداخت امن</h4>
                    </div>
                </div>
                <div className="flex group mb-4 lg:mb-0">
                    <div className="group-hover:border-x-2 group-hover:border-[#eb3e32] group-hover:px-3 transition-all duration-300  ">
                        <BiSupport className="p-3 text-[75px] text-[#eb3e32] border-2 border-[#eb3e32]" />
                    </div>
                    <div>
                        <h4 className="w-[150%] items-center h-full text-[16px] font-bold flex mr-3">پشتیبانی 24 ساعته</h4>
                    </div>
                </div>
                <div className="flex group mb-4 lg:mb-0 sm:mr-12 md:mr-16 lg:mr-0">
                    <div className="group-hover:border-x-2 group-hover:border-[#eb3e32] group-hover:px-3 transition-all duration-300  ">
                        <FaTruck className="p-3 text-[75px] text-[#eb3e32] border-2 border-[#eb3e32]" />
                    </div>
                    <div>
                        <h4 className="items-center h-full text-[16px] font-bold flex mr-3">ارسال رایگان</h4>
                    </div>
                </div>
            </div>
            <div className="border-t-[1px] border-gray-400 mr-[-10%] w-[200%] mt-5 mb-12"></div>
            <div style={{ textAlignLast: "center" }} className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 xl:mr-6 -mb-14">
                <div className="md:mb-10 mb-12">
                    <div>
                        <h4 className="text-[16px] font-bold mb-4 ">
                            جستوجو در محصولات
                        </h4>
                        <div>
                            <input className="border-[1px] border-gray-400 rounded-3xl pr-3 h-10 border-l-0 relative z-10" type="text" placeholder="نام کالا" />
                            <button className="bg-[#eb3e32] rounded-3xl hover:bg-[#ff4f33] transition-colors duration-300 text-white h-10 px-5 -mr-10 relative z-20">جستوجو</button>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-[16px] font-bold mb-4 mt-4 ">
                            درگاه های پرداخت
                        </h4>
                        <img className="w-[50%] m-auto" src={require("../../img/payment.png")} alt="payment-img" />
                    </div>
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

export default Home