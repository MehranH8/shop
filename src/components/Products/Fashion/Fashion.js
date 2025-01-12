
import { useState } from "react"
import Shopcard from "../../Shop/Shoplist/Shopcard/Shopcard"


const Fashion =()=>{

    const [card, setcard] = useState({
        data: [
            ["تیشرت استین کوتاه مردانه", "190,000", "140,000", "https://dkstatics-public.digikala.com/digikala-products/116698483.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["تیشرت آستین کوتاه مردانه 1991", "230,000", "190,000", "https://dkstatics-public.digikala.com/digikala-products/c4ca55888720ec009a61d040d78d7854d7ad0757_1618653229.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["جلیقه مردانه مدل فوتر", "480,000", "430,000", "https://dkstatics-public.digikala.com/digikala-products/c8c903ab8a864ef13af50a4c499caea2c8e733c0_1697834975.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["جلیقه مردانه مدل فوتر SET", "560,000", "490,000", "https://dkstatics-public.digikala.com/digikala-products/46427781c172fb4442ec9b87a09a12431351a668_1662394883.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["شلوار جین زنانه اسمارا ", "670,000", "600,000", "https://dkstatics-public.digikala.com/digikala-products/0fbb58951b0ddc09d3a57df23a8cfca59c31868c_1672502405.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["شلوار جین زنانه ایزی دو", "540,000", "480,000", "https://dkstatics-public.digikala.com/digikala-products/b229d8cc1e6af81a580bd99ac44bd52e188eb87a_1709445630.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["دامن زنانه سرژه مدل 210199", "390,000 $", "350,000", "https://dkstatics-public.digikala.com/digikala-products/358218b7ce00c316a875ea80c2db5f193e2b5b9a_1693911867.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["جوراب مردانه پالوته", "120,000", "95,000", "https://dkstatics-public.digikala.com/digikala-products/543e622e9e1118efa748dbf865f224f1b8be1105_1628705772.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["بارانی زنانه زی سا", "750,000", "680,000", "https://dkstatics-public.digikala.com/digikala-products/6c25db9b5be16fcd95ad10cdecd983d5bb07248f_1732449305.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["بارانی زنانه زی سا مدل 3009", "840,000", "770,000", "https://dkstatics-public.digikala.com/digikala-products/40c662f617e4f502369e50c65475cbfa8be682ea_1732449465.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
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


export default Fashion