
import { useState } from "react"
import Shopcard from "../../Shop/Shoplist/Shopcard/Shopcard"


const Makeup =()=>{

    const [card, setcard] = useState({
        data: [
            ["لاک ناخن والانسی شماره AB21", "350,000", "250,000", "https://dkstatics-public.digikala.com/digikala-products/091ad1f6e2ec166631d714138ab0a15e97ce3734_1605890024.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["لاک ناخن مای شماره 305", "650,000 $", "580,000", "https://dkstatics-private.digikala.com/digikala-products/00138640754c10d9bf91ffb0f547461e91820b07_1609083877.jpg?OSSAccessKeyId=LTAIPClJziKGRUZJ&Expires=1920123877&Signature=Uc7NWxAOkECeRsWMJll1DsK4W1c%3D"],
            ["ریمل حجم دهنده کالیستا", "370,000", "320,000", "https://dkstatics-public.digikala.com/digikala-products/6e9fc5f500d4cbe714825b963cb0305d291b73c3_1635866190.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["ریمل حجم دهنده کالیستا ", "370,000", "300,000", "https://dkstatics-public.digikala.com/digikala-products/c723c765c82740541edd6dac2955a566be168983_1635865536.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["خط چشم ضدآب ماژیکی مای", "450,000", "400,000", "https://dkstatics-public.digikala.com/digikala-products/c79d377d4cb53a1d4092e31091eded48bda14a88_1643097846.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["خط چشم مویی مای", "510,000", "450,000", "https://dkstatics-public.digikala.com/digikala-products/436baf71d2efd1ef6a84f10721ad8419f959fe5a_1654064199.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["رژ لب جامد مای مدل سیلکی شاین", "740,000", "650,000", "https://dkstatics-public.digikala.com/digikala-products/9a6af615c470bc86e4ea658d60daf68067b12b0f_1643021718.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["خط چشم کالیستا مدل Dip Liner", "370,000 $", "350,000", "https://dkstatics-public.digikala.com/digikala-products/b4b842dae7a120daf220e01b01be9ecf981f89a9_1635865733.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["بالم لب بیول مدل توت فرنگی", "150,000", "120,000", "https://dkstatics-public.digikala.com/digikala-products/ef49ac776581d5c61601794ef22d22623a50d5ed_1676459974.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["بالم لب آکوالیپ مدل شکلاتی", "230,000", "190,000", "https://dkstatics-public.digikala.com/digikala-products/9bf897caa46019f416b65e8f8f4ceeb71609fb81_1704275059.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
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


export default Makeup