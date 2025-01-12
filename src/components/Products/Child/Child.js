
import { useState } from "react"
import Shopcard from "../../Shop/Shoplist/Shopcard/Shopcard"


const Child =()=>{

    const [card, setcard] = useState({
        data: [
            ["سویشرت بچگانه مادر مدل داینی", "550,000", "500,000", "https://dkstatics-public.digikala.com/digikala-products/1b4806b644462000f96bf447c6cfedc17a135d03_1735022518.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["سویشرت بچگانه ایزی دو مدل 367", "520,000", "500,000", "https://dkstatics-public.digikala.com/digikala-products/3039e264901a168722d1253377167bcdc7b63328_1700297962.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["سرهمی نوزادی فسقلیمون مدل 2027", "480,000", "450,000", "https://dkstatics-public.digikala.com/digikala-products/dd3e5cff91b9697b179fc73b313ca7e564a6c5bd_1702760046.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["پالتو نوزادی ایندیگو مدل 231791", "760,000", "700,000", "https://dkstatics-public.digikala.com/digikala-products/0ef8e890b8ad2d1931da7d8cdfa2ab1a30258b7b_1733122418.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["پالتو نوزادی ایندیگو مدل 231801", "660,000", "590,000", "https://dkstatics-public.digikala.com/digikala-products/8cb647c16a998d23f8265f11e3e3dc16a7d60932_1733899708.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["کفش راحتی پسرانه شیما مدل 4300630332-01", "540,000", "490,000", "https://dkstatics-public.digikala.com/digikala-products/553329ec6a4442e73cece3d1f8a929864a48fbc9_1665411616.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["کفش کوهنوردی بچگانه نسیم مدل زاگرس ", "580,000", "540,000", "https://dkstatics-public.digikala.com/digikala-products/1e827b59b250023308eeb6ac87fd05320be4cfb9_1635768960.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["جوراب پسرانه نیوشا کد 1503 مجموعه 3 عددی", "220,000", "190,000", "https://dkstatics-public.digikala.com/digikala-products/b2c8b939e9f5a1239259decdc923b1afd00ac069_1596050402.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["جوراب پسرانه تن پوش هنگامه", "75,000", "60,000", "https://dkstatics-public.digikala.com/digikala-products/5d0120c610e8e18fa9f66e3c7b9dbbcde65184b2_1635200246.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["تی شرت آستین بلند پسرانه لوپیلو", "470,000", "420,000", "https://dkstatics-public.digikala.com/digikala-products/48778b8fbaa253f91322ddc31bd0c6c784e5e08d_1693381299.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
        ]
    })

    return(
        <div className="grid grid-cols-1 mt-4 md:mt-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {card.data.map((item) => (
                <Shopcard title={item[0]} oldprice={item[1]} newprice={item[2]} img={item[3]} />

            ))}
        </div>
    )
}


export default Child