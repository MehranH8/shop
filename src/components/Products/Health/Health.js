
import { useState } from "react"
import Shopcard from "../../Shop/Shoplist/Shopcard/Shopcard"


const Health =()=>{

    const [card, setcard] = useState({
        data: [
            ["ژل مو رد وان کد i10", "120,000", "95,000", "https://dkstatics-public.digikala.com/digikala-products/97af95c4d71625fce7d04db897492faaa2219f44_1600687120.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["فلوئید ضدآفتاب بدون ‌رنگ مای", "170,000", "120,000", "https://dkstatics-public.digikala.com/digikala-products/71caa840492104dbddd2b74d744542fd5990aa4b_1625997515.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["کرم ضد آفتاب بدون رنگ لافارر", "110,000", "80,000", "https://dkstatics-public.digikala.com/digikala-products/b813c6c0f16731e400ee1362ce103accf246bfce_1669110838.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["ژل مو فولیکا مدل Freeze", "95,000", "75,000", "https://dkstatics-public.digikala.com/digikala-products/7c43d207dab43022823656ce987b290fa554fecb_1630408599.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["ژل مو فولیکا مدل Wet Shine", "145,000", "110,000", "https://dkstatics-public.digikala.com/digikala-products/474382.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["محلول تقویت کننده مو لامینین", "230,000", "200,000", "https://dkstatics-public.digikala.com/digikala-products/3a0c1dfff3cadb7cc1d395d1e206694dcdbfba95_1603816675.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["تونیک تقویت ریش سریتا", "160,000", "120,000", "https://dkstatics-public.digikala.com/digikala-products/b6529b7b060148f925ca89b56f8ccdf20e1e493f_1713255325.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["کرم ترمیم کننده بدون آبکشی مو لافارر", "90,000", "65,000", "https://dkstatics-public.digikala.com/digikala-products/6bd82c2c04526886fbd4360496d0ce052eb0037c_1673095343.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["سرم پوست ویتالیر مدل هیالورونیک", "100,000", "80,000", "https://dkstatics-public.digikala.com/digikala-products/eb568173036d883595b85a2609cf07f71ce01d84_1697558288.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["ماسک بینی لنبنا مدل سر سیاه ", "110,000", "90,000", "https://dkstatics-public.digikala.com/digikala-products/a2ecf19b95fcf4e3a1f5c49051bc3cb8746a579c_1682191610.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
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


export default Health