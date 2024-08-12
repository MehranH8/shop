import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";



const Newscard = (props) => {
    return (
        <Card className={props.className}>
            <CardHeader color="blue-gray" className="relative h-56">
                <img
                    className="h-full w-full"
                    src={props.img}
                    alt="blog-img"
                />
            </CardHeader>
            <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 text-[16px]">
                    {props.title}
                </Typography>
                <Typography className="text-[14px]">
                    {props.details}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0">
                <Link to="/blog/blogdetail">
                    <Button className="bg-[#eb3e32] text-white hover:bg-[#ff4f33] transition-colors duration-300">خواندن</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default Newscard