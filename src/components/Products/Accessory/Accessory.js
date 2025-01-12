
import { useState } from "react"
import Shopcard from "../../Shop/Shoplist/Shopcard/Shopcard"


const Accessory =()=>{

    const [card, setcard] = useState({
        data: [
            ["ساعت مچی عقربه ای زنانه", "850,000", "800,000", "https://dkstatics-public.digikala.com/digikala-products/fc8ecd8c77d4ef5e9c37318ab93cd0f28b95cd23_1696530765.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["ساعت مچی عقربه ای زنانه مدل دستبندی", "970,000", "900,000", "https://dkstatics-public.digikala.com/digikala-products/b3b55ae15b06adcd97d0ad3a2b9c3130aba7617d_1686155203.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["ساعت هوشمند اپل مدل SE Aluminum Case 40mm", "1,400,000", "1,200,000", "https://dkstatics-public.digikala.com/digikala-products/cf2f3cffef40a01b8cdff5114faecb6499ed0c64_1696945557.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["ساعت هوشمند سامسونگ مدل Galaxy Watch6 Classic 47mm", "1,850,000", "1,750,000", "https://dkstatics-public.digikala.com/digikala-products/a88b419f47b74c34086751c0f44ffbb2225230f1_1690715344.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["عینک آفتابی اسپای مدل تاشو 0041kn", "780,000", "700,000", "https://dkstatics-public.digikala.com/digikala-products/ac6d41c624c14e5dfd552d1d3c22e8316cace239_1628347465.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["عینک آفتابی مدل روبو M300", "670,000", "600,000", "https://dkstatics-public.digikala.com/digikala-products/51c9632df57cbd92238bfffab84301d5249b0eca_1653908159.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["ساعت مچی دیجیتال مدل AWS", "550,000", "500,000", "https://dkstatics-public.digikala.com/digikala-products/1c948b3b4d852feb95c61e66c6fef11471246885_1664214066.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["عینک آفتابی مردانه مدل Ri 6465", "720,000", "650,000", "https://dkstatics-public.digikala.com/digikala-products/60ca6e4ab5ec44ce71deb120e6e8fa10b7a2a9b6_1672493654.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["کمربند مردانه چرم عطارد مدل B23", "450,000", "420,000", "https://dkstatics-public.digikala.com/digikala-products/294bd4c0e2225155f0fada3e994115db03327719_1661957409.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
            ["کیف دوشی زنانه کد 2687", "970,000", "900,000", "https://dkstatics-public.digikala.com/digikala-products/112689814.jpg?x-oss-process=image/resize,w_1600/quality,q_80"],
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


export default Accessory