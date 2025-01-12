
import { useState } from "react"
import Shopcard from "../../Shop/Shoplist/Shopcard/Shopcard"


const Sport =()=>{

    const [card, setcard] = useState({
        data: [
            ["تیشرت استین کوتاه مردانه", "190,000", "140,000", "https://dkstatics-public.digikala.com/digikala-products/116698483.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["تیشرت استین کوتاه مردانه", "190,000", "140,000", "https://dkstatics-public.digikala.com/digikala-products/116698483.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["تیشرت آستین کوتاه مردانه 1991", "230,000", "190,000", "https://dkstatics-public.digikala.com/digikala-products/c4ca55888720ec009a61d040d78d7854d7ad0757_1618653229.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["تیشرت آستین کوتاه مردانه 1991", "230,000", "190,000", "https://dkstatics-public.digikala.com/digikala-products/c4ca55888720ec009a61d040d78d7854d7ad0757_1618653229.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["جوراب مردانه پالوته", "120,000", "95,000", "https://dkstatics-public.digikala.com/digikala-products/543e622e9e1118efa748dbf865f224f1b8be1105_1628705772.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["جوراب مردانه پالوته", "120,000", "95,000", "https://dkstatics-public.digikala.com/digikala-products/543e622e9e1118efa748dbf865f224f1b8be1105_1628705772.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["تیشرت استین کوتاه مردانه", "190,000", "140,000", "https://dkstatics-public.digikala.com/digikala-products/116698483.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
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


export default Sport