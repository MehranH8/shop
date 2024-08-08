import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";




const Shopcard = (props) => {
    return (
        <Card className="w-full shadow-none border-[1px] max-w-[500px] mx-auto rounded-none border-gray-300">
            <CardHeader floated={false} className="h-80">
                <img className="h-full w-full" src={props.img} alt="product-img" />
            </CardHeader>
            <CardBody className="text-center">
                <Typography variant="h4" color="blue-gray" className="mb-2 text-[16px]">
                    {props.title}
                </Typography>
                <div className="flex justify-center">
                    <Typography color="blue-gray" className="text-[16px] font-medium text-[#eb3e32]" textGradient>
                        {props.newprice}
                    </Typography>
                    <span className="text-[16px] text-[#78909c] mr-3">
                        <s>{props.oldprice}</s>
                    </span>
                </div>
                <Button className="text-white bg-[#363f4d] px-8 py-3 mt-4 rounded-2xl hover:bg-[#eb3e32] transition-colors duration-300">سفارش</Button>

            </CardBody>
        </Card>
    )
}

export default Shopcard