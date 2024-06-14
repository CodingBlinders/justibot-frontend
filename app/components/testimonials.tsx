import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/react";
import {FaStar} from "react-icons/fa";
import {User} from "@nextui-org/user";
import Link from "next/link";
import React from "react";
import {MdOutlineStar} from "react-icons/md";

// @ts-ignore
function Testimonials(props){
    const stars = [];
    for (let i = 0; i < props.count; i++) {
        stars.push(<MdOutlineStar key={i} className="text-yellow-300 w-6 h-6" />);
    }

    return (
        <Card className=" h-[250px] w-[300px] light"  >
            <CardHeader className="flex w-full flex-row  justify-end">
                {stars}
            </CardHeader>
            <CardBody>
                <p className="text-[12px]">{props.description}</p>
            </CardBody>
            <CardFooter>
                <User
                    name={props.name}
                    description={(
                        <p>Law Student</p>
                    )}
                    avatarProps={{
                        src: props.url,
                    }}
                />
            </CardFooter>
        </Card>
    );
}
export default Testimonials;