import { Link } from "react-router-dom";
import "./Topcontainer.css"
import { Breadcrumbs } from "@material-tailwind/react";
import { RxSlash } from "react-icons/rx";


const Topcontainer = (props) => {
    return (
        <div style={{ backgroundImage: `url(${props.img})` }} className={props.className}>
            <div className="relative -top-[60%] text-white flex flex-col flex-wrap content-center text-center ">
                <h4 className="text-[40px] font-bold">{props.title}</h4>
                <Breadcrumbs separator={<RxSlash className="text-white text-[18px] -mx-1"/>} className="text-white " style={{background:"none"}}>
                    <Link to={props.firsturl} className="opacity-60 text-white text-[16px] ">
                        {props.firsttitle}
                    </Link>
                    <Link className="text-white text-[16px] " to={props.securl} >
                        {props.sectitle}
                    </Link>
                </Breadcrumbs>

            </div>
        </div>
    )
}

export default Topcontainer