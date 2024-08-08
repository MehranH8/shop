import Blogcard from "./Blogcard/Blogcard"
import Topcontainer from "../Ui/Topcontainer/Topcontainer";


const Blog = () => {
    return (
        <div>
                <Topcontainer className="top-container h-[380px] bg-cover mb-20" firsturl="/" securl="/blog" firsttitle="خانه" sectitle="بلاگ" img="https://bestwebcreator.com/ATZShop/demo/image/blog-breadcrumbs-img.jpg" title="بلاگ" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-12 mx-10 md:mx-20 xl:mx-32 mt-14">
                <Blogcard img="https://bestwebcreator.com/ATZShop/demo/image/news-img-1.jpg" />
                <Blogcard img="https://bestwebcreator.com/ATZShop/demo/image/news-img-2.jpg" />
                <Blogcard img="https://bestwebcreator.com/ATZShop/demo/image/news-img-3.jpg" />
                <Blogcard img="https://bestwebcreator.com/ATZShop/demo/image/news-img-4.jpg" />
                <Blogcard img="https://bestwebcreator.com/ATZShop/demo/image/news-img-5.jpg" />
                <Blogcard img="https://bestwebcreator.com/ATZShop/demo/image/news-img-6.jpg" />
                <Blogcard img="https://bestwebcreator.com/ATZShop/demo/image/news-img-7.jpg" />
                <Blogcard img="https://bestwebcreator.com/ATZShop/demo/image/news-img-8.jpg" />
            </div>
        </div>
    )
}
export default Blog