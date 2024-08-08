import Shopcard from "./Shopcard/Shopcard"
import { useState } from "react"




const Shoplist = () => {
    const [card, setcard] = useState({
        data: [
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
            ["گوشواره زنانه", "95.50 $", "79.99 $", "https://docs.material-tailwind.com/img/team-3.jpg"],
        ]
    })




    return (
        <div className="grid grid-cols-1 mt-4 md:mt-0 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {card.data.map((item) => (
                <Shopcard title={item[0]} oldprice={item[1]} newprice={item[2]} img={item[3]} />

            ))}
        </div>
    )
}

export default Shoplist