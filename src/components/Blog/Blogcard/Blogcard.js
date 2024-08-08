import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { PropaneSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";



const Blogcard = (props) => {
    return (
        <div >
            <Card className="w-[95%]  m-auto border-[1px] border-gray-200">
                <CardHeader shadow={false} floated={false} className="h-96">
                    <img
                        src={props.img}
                        alt="blog-img"
                        className="h-full w-full object-cover"
                    />
                </CardHeader>
                <CardBody>
                    <div className="mb-2 flex items-center justify-center">
                        <Typography color="blue-gray" className="font-bold text-[16px]">
                            چند توصیه مهم
                        </Typography>
                    </div>
                    <Typography
                        variant="small"
                        color="gray"
                        className="font-normal opacity-75 text-[14px]"
                    >
                        چند توصیه مهم برای خرید های اینترنتی به منظور پیشگیری کلاهبرداری های اینترنتی
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <Link to="/blog/blogdetail">
                        <Button
                            ripple={false}
                            fullWidth={true}
                            className="bg-[#eb3e32] text-white text-[14px] shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                        >
                            خواندن
                        </Button>
                    </Link>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Blogcard