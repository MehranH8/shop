import { Link } from "react-router-dom"

const Page404 = () => {
    return (
        <div >
            <img className="mb-12 w-full max-w-[1000px] m-auto" src="https://static.vecteezy.com/system/resources/previews/007/162/540/original/error-404-page-not-found-concept-illustration-web-page-error-creative-design-modern-graphic-element-for-landing-page-infographic-icon-free-vector.jpg" alt="page404" />
            <div className="w-[60%] m-auto text-center ">
                <h3 className="text-[20px] font-bold mb-6">
                    صفحه مورد نظر یافت نشد
                </h3>
                <p className=" hidden lg:block text-[15px] mb-6">
                    صفحه ای که به دنبال آن هستید ممکن است در صورت تغییر نام حذف شده باشد <br /> یا به طور موقت در دسترس نباشد.
                </p>
                <p className="lg:hidden text-[15px] mb-6">
                    صفحه ای که به دنبال آن هستید ممکن است در صورت تغییر نام حذف شده باشد یا به طور موقت در دسترس نباشد.
                </p>
                <Link to="/">
                    <button className="hover:bg-[#ff4f33] transition-colors duration-300 bg-[#eb3e32] mb-24 text-white rounded-3xl py-2 text-[18px] px-8" type="button">
                        بازگشت
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Page404