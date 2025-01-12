import React from "react";
import { Link } from "react-router-dom";
import {
    Drawer,
    Button,
    Typography,
    IconButton,
    MobileNav,
    Card,
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Navbar,
    Popover,
    PopoverHandler,
    PopoverContent,
    Tooltip

} from "@material-tailwind/react";
import { FaCartShopping } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { BiLogOutCircle } from "react-icons/bi";
import { IoSearchSharp } from "react-icons/io5";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { FaHome } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { FaRegNewspaper } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";
import { MdMenuOpen } from "react-icons/md";
import { render } from "@testing-library/react";




{/*top navbar */ }
export function Topnavbar() {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);



    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);




    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    {/*drawer */ }
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    {/*drawer */ }




    return (
        <Navbar className="mx-auto shadow-none max-w-screen-xl px-4 py-2 relative z-20  lg:px-2 lg:py-4">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3  md:flex md:items-center md:justify-between text-blue-gray-900">
                <div className="md:hidden flex ">
                    <div className="my-auto flex gap-2 ">
                        <button className="hover:bg-[#ff4f33] transition-colors duration-300 px-[8px] justify-center mr-2  py-[9px] bg-[#eb3e32] text-white text-[18px] flex" onClick={openDrawerRight}>
                            <span className="text-[25px] ml-1 mt-[1px]"><MdMenuOpen /></span>
                        </button>
                        <Drawer
                            placement="right"
                            open={openRight}
                            onClose={closeDrawerRight}
                            className="p-4"
                        >
                            <div className="mb-6 flex justify-end ">
                                <IconButton
                                    variant="text"
                                    onClick={closeDrawerRight}
                                    className="bg-[#eb3e32] text-white hover:bg-[#eb3e32] hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={2}
                                        stroke="currentColor"
                                        className="h-5 w-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </IconButton>
                            </div>

                            <Card className=" h-[100vh] w-[112%] mt-[-22px] mr-[-16px] rounded-none max-w-[20rem] p-4 pt-0 shadow-none">
                                <List className="mt-[22px]">
                                    {/* */}
                                    <Accordion
                                        open={open === 1}
                                        icon={
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`mx-auto h-4 w-4 transition-transform  ${open === 1 ? "rotate-180" : ""}`}
                                            />
                                        }
                                        className="w-[115%] -mr-5"
                                    >
                                        <ListItem className="p-0" selected={open === 1}>
                                            <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                                <Typography color="blue-gray" className="ml-auto text-[16px]  font-normal">
                                                    لوازم آرایشی
                                                </Typography>
                                            </AccordionHeader>
                                        </ListItem>
                                        <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                            <List className="p-0 ">
                                                <Link to="/products/makeup">
                                                    <div className="hover:bg-white text-[14px] w-full min-w-max my-2 mt-4  hover:text-[#eb3e32] transition-colors duration-300">
                                                        ریمل
                                                    </div>
                                                </Link>
                                                <Link to="/products/makeup">
                                                    <div className="hover:bg-white text-[14px] min-w-w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        خط چشم
                                                    </div>
                                                </Link>
                                                <Link to="/products/makeup">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        رژ لب
                                                    </div>
                                                </Link>
                                                <Link to="/products/makeup">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        لاک ناخن
                                                    </div>
                                                </Link>
                                            </List>
                                        </AccordionBody>
                                    </Accordion>
                                    {/* */}
                                    {/* */}
                                    <Accordion
                                        open={open === 2}
                                        icon={
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`mx-auto h-4 w-4 transition-transform  ${open === 2 ? "rotate-180" : ""}`}
                                            />
                                        }
                                        className="w-[115%] -mr-5"
                                    >
                                        <ListItem className="p-0" selected={open === 2}>
                                            <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                                <Typography color="blue-gray" className="ml-auto text-[16px]  font-normal">
                                                    لوازم بهداشتی
                                                </Typography>
                                            </AccordionHeader>
                                        </ListItem>
                                        <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                            <List className="p-0 ">
                                                <Link to="/products/health">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 mt-4 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        کرم ضد آفتاب
                                                    </div>
                                                </Link>
                                                <Link to="/products/health">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                    ماسک صورت
                                                    </div>
                                                </Link>
                                                <Link to="/products/health">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
ژل مو
                                                    </div>
                                                </Link>
                                                <Link to="/products/health">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                       تقویت کننده مو 
                                                    </div>
                                                </Link>
                                                <Link to="/products/health">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                      سرم پوست
                                                    </div>
                                                </Link>
                                            </List>
                                        </AccordionBody>
                                    </Accordion>
                                    {/* */}
                                    {/* */}
                                    <Accordion
                                        open={open === 3}
                                        icon={
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`mx-auto h-4 w-4 transition-transform  ${open === 3 ? "rotate-180" : ""}`}
                                            />
                                        }
                                        className="w-[115%] -mr-5"
                                    >
                                        <ListItem className="p-0" selected={open === 3}>
                                            <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                                                <Typography color="blue-gray" className="ml-auto text-[16px]  font-normal">
                                                    مدو پوشاک
                                                </Typography>
                                            </AccordionHeader>
                                        </ListItem>
                                        <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                            <List className="p-0 ">
                                                <Link to="/products/fashion">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 mt-4 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        پیراهن
                                                    </div>
                                                </Link>
                                                <Link to="/products/fashion">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        تیشرت
                                                    </div>
                                                </Link>
                                                <Link to="/products/fashion">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        کت و شلوار
                                                    </div>
                                                </Link>
                                                <Link to="/products/fashion">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        کفش
                                                    </div>
                                                </Link>
                                                <Link to="/products/fashion">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        مانتو
                                                    </div>
                                                </Link>
                                                <Link to="/products/fashion">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        پالتو
                                                    </div>
                                                </Link>
                                                <Link to="/products/fashion">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        جوراب
                                                    </div>
                                                </Link>
                                            </List>
                                        </AccordionBody>
                                    </Accordion>
                                    {/* */}
                                    {/* */}
                                    <Accordion
                                        open={open === 4}
                                        icon={
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`mx-auto h-4 w-4 transition-transform  ${open === 4 ? "rotate-180" : ""}`}
                                            />
                                        }
                                        className="w-[115%] -mr-5"
                                    >
                                        <ListItem className="p-0" selected={open === 4}>
                                            <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
                                                <Typography color="blue-gray" className="ml-auto text-[16px]  font-normal">
                                                    اکسسوری
                                                </Typography>
                                            </AccordionHeader>
                                        </ListItem>
                                        <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                            <List className="p-0 ">
                                                <Link to="/products/accessory">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 mt-4 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                       ساعت و دستبند
                                                    </div>
                                                </Link>
                                                <Link to="/products/accessory">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                       عینک آفتابی
                                                    </div>
                                                </Link>
                                                <Link to="/products/accessory">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                       کیف
                                                    </div>
                                                </Link>
                                                <Link to="/products/accessory">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                      کمربند
                                                    </div>
                                                </Link>
                                            </List>
                                        </AccordionBody>
                                    </Accordion>
                                    {/* */}
                                    {/* */}
                                    <Accordion
                                        open={open === 5}
                                        icon={
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`mx-auto h-4 w-4 transition-transform  ${open === 5 ? "rotate-180" : ""}`}
                                            />
                                        }
                                        className="w-[115%] -mr-5"
                                    >
                                        <ListItem className="p-0" selected={open === 5}>
                                            <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3">
                                                <Typography color="blue-gray" className="ml-auto text-[16px]  font-normal">
                                                    بچگانه
                                                </Typography>
                                            </AccordionHeader>
                                        </ListItem>
                                        <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                            <List className="p-0 ">
                                                <Link to="/products/child">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                       لباس گرم
                                                    </div>
                                                </Link>
                                                <Link to="/products/child">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 mt-4 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                       کاپشن
                                                    </div>
                                                </Link>
                                                <Link to="/products/child">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                       جوراب
                                                    </div>
                                                </Link>
                                                <Link to="/products/child">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        کفش
                                                    </div>
                                                </Link>
                                                <Link to="/products/child">
                                                    <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                      هودی
                                                    </div>
                                                </Link>
                                            </List>
                                        </AccordionBody>
                                    </Accordion>
                                    {/* */}
                                    {/* */}
                                    <Accordion
                                        open={open === 6}
                                        icon={
                                            <ChevronDownIcon
                                                strokeWidth={2.5}
                                                className={`mx-auto h-4 w-4 transition-transform  ${open === 6 ? "rotate-180" : ""}`}
                                            />
                                        }
                                        className="w-[115%] -mr-5"
                                    >
                                        <ListItem className="p-0" selected={open === 6}>
                                            <AccordionHeader onClick={() => handleOpen(6)} className="border-b-0 p-3">
                                                <Typography color="blue-gray" className="ml-auto text-[16px]  font-normal">
                                                    ورزشی
                                                </Typography>
                                            </AccordionHeader>
                                        </ListItem>
                                        <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                            <List className="p-0 ">
                                                <Link to="/products/sport">
                                                    <div className="hover:bg-white text-[14px] my-2 mt-4 w-full min-w-max hover:text-[#eb3e32] transition-colors duration-300">
                                                       کوله ورزشی
                                                    </div>
                                                </Link>
                                                <Link to="/products/sport">
                                                    <div className="hover:bg-white text-[14px] my-2 w-full min-w-max hover:text-[#eb3e32] transition-colors duration-300">
                                                       لباس ورزشی
                                                    </div>
                                                </Link>
                                                <Link to="/products/sport">
                                                    <div className="hover:bg-white text-[14px] my-2 w-full min-w-max hover:text-[#eb3e32] transition-colors duration-300">
                                                       کفش ورزشی
                                                    </div>
                                                </Link>
                                            </List>
                                        </AccordionBody>
                                    </Accordion>
                                    {/* */}

                                </List>
                            </Card>
                        </Drawer>
                        <Popover className="block md:hidden">
                            <PopoverHandler>
                                <Button className="bg-white text-[20px] text-[#eb3e32] shadow-none rounded-none px-[12px] py-[9px] border-[1px] border-[#eb3e32]">
                                    <IoSearchSharp />
                                </Button>
                            </PopoverHandler>
                            <PopoverContent className="w-full ">
                                <div className="flex m-auto w-[88%] sm:w-[80%] ">
                                    <input className=" w-full h-[40px] sm:h-[50px] border-[1px] border-[#cacaca] pr-4 " type="text" placeholder="جستوجو" />
                                    <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white px-[20px] sm:h-[50px] h-[40px]  md:py-[5px] md:px-[22px] lg:py-[10px] lg:px-[32px]" type="submit">
                                        جستوجو
                                    </button>
                                </div>
                            </PopoverContent>
                        </Popover>
                    </div>
                </div>
                <div className="md:block hidden">
                    <Link to="/">
                        <img className="max-w-[170px]" src={require("../../img/logo.png")} alt="logo" />
                    </Link>
                </div>
                <div className="max-w-[305px] hidden md:flex lg:max-w-[404px] w-full   ">
                    <input className=" w-full h-[40px] md:h-[55px] border-[1px] border-[#cacaca] pr-4" type="text" placeholder="جستوجو" />
                    <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] text-white px-[20px] h-[40px] md:h-[55px]  md:py-[5px] md:px-[22px] lg:py-[10px] lg:px-[32px]" type="submit">
                        <div className="md:block hidden">جستوجو</div>
                        <div className="md:hidden block text-white"><IoSearchSharp /></div>
                    </button>
                </div>
                <div className="flex items-center justify-end gap-x-3">
                    <button className="text-xl border-l-[1px] pl-2 border-[#cacaca] hover:text-[#eb3e32] transition-colors duration-300">
                        <Link to="/shoplist">
                            <Tooltip className="text-[12px]" content="سبد خرید" placement="bottom">
                                <span><FaCartShopping /></span>
                            </Tooltip>
                        </Link>
                    </button>
                    <button className="text-2xl border-l-[1px] pl-2 border-[#cacaca] hover:text-[#eb3e32] transition-colors duration-300">
                        <Link to="/account">
                            <Tooltip className="text-[12px]" content="حساب کاربری" placement="bottom">
                                <span><MdAccountCircle /></span>
                            </Tooltip>
                        </Link>
                    </button>
                    <button className="text-2xl pl-2 hover:text-[#eb3e32] transition-colors duration-300">
                        <Tooltip className="text-[12px]" content="خروج" placement="bottom">
                            <span><BiLogOutCircle /></span>
                        </Tooltip>
                    </button>
                </div>

            </div>
            <MobileNav open={openNav}>
                <div className="container mx-auto">
                    <div className="flex items-center gap-x-1">
                        <Button fullWidth variant="text" size="sm" className="">
                            <span><FaCartShopping /></span>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <Link to="account">
                                <span><MdAccountCircle /></span>
                            </Link>
                        </Button>
                        <Button fullWidth variant="gradient" size="sm" className="">
                            <span><BiLogOutCircle /></span>
                        </Button>
                    </div>
                </div>
            </MobileNav>
        </Navbar>
    );
}
{/*top navbar */ }













{/*bottom navbar */ }
export function Bottomnavbar() {
    const [openRight, setOpenRight] = React.useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);


    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);

    {/*drawer */ }
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    {/*drawer */ }

    const navList = (
        <ul className="mt-2 mb-4 flex gap-4 sm:gap-8 justify-center lg:mb-0 lg:mt-[5px] lg:items-center lg:gap-8 ">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 text-[16px] hover:text-[#eb3e32] transition-colors duration-400"
            >
                <Link to="/" className="flex items-center gap-2">

                    <FaHome className="text-[20px] hidden sm:block" />
                    خانه
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 text-[16px] hover:text-[#eb3e32] transition-colors duration-400"
            >
                <Link to="/blog" className="flex items-center gap-2">
                    <FaRegNewspaper className="text-[20px] hidden sm:block" />
                    بلاگ
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 min-w-fit p-1 text-[16px] hover:text-[#eb3e32] transition-colors duration-400"
            >
                <Link to="/about" className="flex items-center gap-2">

                    <BsPeopleFill className="text-[20px] hidden sm:block" />
                    درباره ما
                </Link>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="flex items-center gap-x-2 p-1 text-[16px] hover:text-[#eb3e32] transition-colors duration-400"
            >
                <Link to="/support" className="flex items-center gap-2 ">

                    <BiSupport className="text-[20px] hidden sm:block" />
                    پشتیبانی
                </Link>
            </Typography>
        </ul>
    );
    return (
        <div className="bg-[#f8f7f7] h-[70px]">
            <navbar className="w-full max-w-screen-xl mx-auto px-4 py-2 lg:px-4 lg:py-4 block h-[60px]">
                <div className="container mx-auto w-full flex justify-center md:justify-between">
                    <div className=" hidden md:block">
                        <div>
                            <button className="hover:bg-[#ff4f33] transition-colors duration-300 px-[20px] -mr-3 -mt-2 lg:-mt-4 py-[21px] bg-[#eb3e32] text-white text-[18px] flex" onClick={openDrawerRight}>
                                <span className="text-[22px] ml-3 mt-[1px]"><MdMenuOpen /></span>
                                محصولات ما
                            </button>
                            <Drawer
                                placement="right"
                                open={openRight}
                                onClose={closeDrawerRight}
                                className="p-4 "
                            >
                                <div className="mb-6 flex justify-end">
                                    <IconButton
                                        variant="text"
                                        onClick={closeDrawerRight}
                                        className="bg-[#eb3e32] text-white hover:bg-[#eb3e32] hover:text-white"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </IconButton>
                                </div>

                                <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 pt-0 shadow-none">
                                    <List>
                                        {/* */}
                                        <Accordion
                                            open={open === 1}
                                            icon={
                                                <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`mx-auto h-4 w-4 transition-transform  ${open === 1 ? "rotate-180" : ""}`}
                                                />
                                            }
                                            className="w-[120%] -mr-5"
                                        >
                                            <ListItem className="p-0" selected={open === 1}>
                                                <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                                    <Typography color="blue-gray" className="ml-auto  font-normal">
                                                        لوازم آرایشی
                                                    </Typography>
                                                </AccordionHeader>
                                            </ListItem>
                                            <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                                <List className="p-0 ">
                                                    <Link to="/products/makeup">
                                                        <div className="hover:bg-white text-[14px] w-full min-w-max my-2 mt-4  hover:text-[#eb3e32] transition-colors duration-300">
                                                        ریمل

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/makeup">
                                                        <div className="hover:bg-white text-[14px] min-w-w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        خط چشم
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/makeup">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        رژ لب

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/makeup">
                                                        <div className="hover:bg-white text-[14px] min-w-max mb-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        لاک ناخن
                                                        </div>
                                                    </Link>
                                                </List>
                                            </AccordionBody>
                                        </Accordion>
                                        {/* */}
                                        {/* */}
                                        <Accordion
                                            open={open === 2}
                                            icon={
                                                <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`mx-auto h-4 w-4 transition-transform  ${open === 2 ? "rotate-180" : ""}`}
                                                />
                                            }
                                            className="w-[120%] -mr-5"
                                        >
                                            <ListItem className="p-0" selected={open === 2}>
                                                <AccordionHeader onClick={() => handleOpen(2)} className="border-b-0 p-3">
                                                    <Typography color="blue-gray" className="ml-auto  font-normal">
                                                        لوازم بهداشتی
                                                    </Typography>
                                                </AccordionHeader>
                                            </ListItem>
                                            <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                                <List className="p-0 ">
                                                    <Link to="/products/health">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 mt-4 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        کرم ضد آفتاب

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/health">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        ماسک صورت

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/health">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        ژل مو

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/health">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        تقویت کننده مو 

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/health">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        سرم پوست

                                                        </div>
                                                    </Link>
                                                </List>
                                            </AccordionBody>
                                        </Accordion>
                                        {/* */}
                                        {/* */}
                                        <Accordion
                                            open={open === 3}
                                            icon={
                                                <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`mx-auto h-4 w-4 transition-transform  ${open === 3 ? "rotate-180" : ""}`}
                                                />
                                            }
                                            className="w-[120%] -mr-5"
                                        >
                                            <ListItem className="p-0" selected={open === 3}>
                                                <AccordionHeader onClick={() => handleOpen(3)} className="border-b-0 p-3">
                                                    <Typography color="blue-gray" className="ml-auto  font-normal">
                                                        مدو پوشاک
                                                    </Typography>
                                                </AccordionHeader>
                                            </ListItem>
                                            <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                                <List className="p-0 ">
                                                    <Link to="/products/fashion">
                                                        <div className="hover:bg-white min-w-max my-2 mt-4 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            پیراهن
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/fashion">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            تیشرت
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/fashion">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            کت و شلوار
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/fashion">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            کفش
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/fashion">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            مانتو
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/fashion">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            پالتو
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/fashion">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            جوراب
                                                        </div>
                                                    </Link>
                                                </List>
                                            </AccordionBody>
                                        </Accordion>
                                        {/* */}
                                        {/* */}
                                        <Accordion
                                            open={open === 4}
                                            icon={
                                                <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`mx-auto h-4 w-4 transition-transform  ${open === 4 ? "rotate-180" : ""}`}
                                                />
                                            }
                                            className="w-[120%] -mr-5"
                                        >
                                            <ListItem className="p-0" selected={open === 4}>
                                                <AccordionHeader onClick={() => handleOpen(4)} className="border-b-0 p-3">
                                                    <Typography color="blue-gray" className="ml-auto  font-normal">
                                                       اکسسوری
                                                    </Typography>
                                                </AccordionHeader>
                                            </ListItem>
                                            <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                                <List className="p-0 ">
                                                    <Link to="/products/accessory">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 mt-4 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        ساعت و دستبند

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/accessory">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        عینک آفتابی

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/accessory">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        کیف
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/accessory">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        کمربند
                                                        </div>
                                                    </Link>
                                                </List>
                                            </AccordionBody>
                                        </Accordion>
                                        {/* */}
                                        {/* */}
                                        <Accordion
                                            open={open === 5}
                                            icon={
                                                <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`mx-auto h-4 w-4 transition-transform  ${open === 5 ? "rotate-180" : ""}`}
                                                />
                                            }
                                            className="w-[120%] -mr-5"
                                        >
                                            <ListItem className="p-0" selected={open === 5}>
                                                <AccordionHeader onClick={() => handleOpen(5)} className="border-b-0 p-3">
                                                    <Typography color="blue-gray" className="ml-auto  font-normal">
                                                    بچگانه
                                                    </Typography>
                                                </AccordionHeader>
                                            </ListItem>
                                            <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                                <List className="p-0 ">
                                                    <Link to="/products/child">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        لباس گرم

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/child">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 mt-4 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        کاپشن
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/child">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                        جوراب
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/child">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            کفش
                                                        </div>
                                                    </Link>
                                                    <Link to="/products/child">
                                                        <div className="hover:bg-white text-[14px] min-w-max my-2 w-full hover:text-[#eb3e32] transition-colors duration-300">
                                                            هودی
                                                        </div>
                                                    </Link>
                                                </List>
                                            </AccordionBody>
                                        </Accordion>
                                        {/* */}
                                        {/* */}
                                        <Accordion
                                            open={open === 6}
                                            icon={
                                                <ChevronDownIcon
                                                    strokeWidth={2.5}
                                                    className={`mx-auto h-4 w-4 transition-transform  ${open === 6 ? "rotate-180" : ""}`}
                                                />
                                            }
                                            className="w-[120%] -mr-5"
                                        >
                                            <ListItem className="p-0" selected={open === 6}>
                                                <AccordionHeader onClick={() => handleOpen(6)} className="border-b-0 p-3">
                                                    <Typography color="blue-gray" className="ml-auto  font-normal">
                                                      ورزشی
                                                    </Typography>
                                                </AccordionHeader>
                                            </ListItem>
                                            <AccordionBody className="py-1 mr-6 max-w-[300px]">
                                                <List className="p-0 ">
                                                    <Link to="/products/sport">
                                                        <div className="hover:bg-white text-[14px] my-2 mt-4 w-full min-w-max hover:text-[#eb3e32] transition-colors duration-300">
                                                        کوله ورزشی

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/sport">
                                                        <div className="hover:bg-white text-[14px] my-2 w-full min-w-max hover:text-[#eb3e32] transition-colors duration-300">
                                                        لباس ورزشی

                                                        </div>
                                                    </Link>
                                                    <Link to="/products/sport">
                                                        <div className="hover:bg-white text-[14px] my-2 w-full min-w-max hover:text-[#eb3e32] transition-colors duration-300">
                                                        کفش ورزشی

                                                        </div>
                                                    </Link>
                                                </List>
                                                
                                            </AccordionBody>
                                        </Accordion>
                                        {/* */}

                                    </List>
                                </Card>
                            </Drawer>
                        </div>
                    </div>
                    <div>
                        <div className="">
                            {navList}
                        </div>

                    </div>
                </div>
            </navbar>

        </div>
    )
}
{/*bottom navbar */ }

