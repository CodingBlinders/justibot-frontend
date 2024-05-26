import Image from "next/image";
import {Avatar, Divider, Card, CardBody, CardFooter, CardHeader, Spacer} from "@nextui-org/react";
import {Badge} from "@nextui-org/badge";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import {Button} from "@nextui-org/button";
import Link from "next/link";
import React from "react";
import Nav_bar from "@/app/components/nav_bar";
import {IoIosCheckmarkCircleOutline} from "react-icons/io";
import {FaInstagram, FaLinkedin, FaPhone, FaStar, FaTwitter} from "react-icons/fa";
import {User} from "@nextui-org/user";
import Testimonials from "@/app/components/testimonials";
import {CiFacebook} from "react-icons/ci";
import {IoLocation} from "react-icons/io5";
import {AiTwotoneMail} from "react-icons/ai";
import {MdEmail} from "react-icons/md";


export default function Home() {
  return (
    <div className=" dark">
        <Nav_bar  />
        <div className="flex w-full h-[600px] flex-row pl-[130px] items-center">
           <div className="flex flex-col pb-28 ">
               <p className="text-white text-5xl font-normal ">Empower Your Legal Journey <br/> with JustiBot</p>
               <p className="text-xl pt-2 " >Navigate Legal Complexities with Confidence and Ease!</p>
           </div>
            <img className=" h-[800px] w-min absolute right-[0px] pr-[-100px]" src="/images/lawbot.png" />
        </div>
        <div className="flex flex-col h-[450px] items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-5/6 h-5/6 rounded-[40px] border-white border-2  ">
                <p className="text-lg text-customBrown pb-1">About</p>
                <div className="h-2/3 flex-col flex items-center  justify-between">
                    <h2 className="text-3xl">Your Virtual Legal Assistant</h2>
                    <p className="w-7/12 text-center">JustiBot is your AI-powered legal assistant, offering predictive analytics and personalized legal insights. With a user-friendly chatbot interface, users can navigate legal complexities with ease and confidence. Our platform prioritizes data privacy and security, ensuring a trustworthy space for legal guidance. Join us to access expert legal advice and streamline your legal processes effectively. </p>
                    <Button as={Link}  href="#" variant="solid" className="bg-customBrown text-white font-bold w-[150px]">
                        Get Started
                    </Button>
                </div>

            </div>

        </div>
        <div className="flex flex-col h-[270px] items-center justify-center w-full mt-20">
            <div className="flex flex-row items-center justify-around w-5/6 h-5/6 flex-wrap">
                <div className="w-5/12">
                    <img className="h-[250px] " src="/images/handshake.png" />
                </div>
                <div className="w-5/12 h-full flex flex-col items-start justify-around">
                    <p className="text-2xl font-bold ">Your Virtual Legal Assistant</p>
                    <p>JustiBot offers exceptional legal support, empowering users to navigate law confidently. Personalized guidance for professionals and students enhances legal understanding. Join us for unparalleled service today.
                    </p>
                    <Button as={Link}  href="#" variant="solid" className="bg-customBrown text-white  w-[150px]">
                        See More
                    </Button>

                </div>

            </div>

        </div>
        <div className="flex flex-col h-[270px] items-center justify-center w-full mt-10">
            <div className="flex flex-row items-center justify-around w-5/6 h-5/6 flex-wrap ">

                <div className="w-5/12 h-full flex flex-col items-start justify-around">
                    <p className="text-2xl font-bold ">Your Virtual Legal Assistant</p>
                    <p>JustiBot offers exceptional legal support, empowering users to navigate law confidently. Personalized guidance for professionals and students enhances legal understanding. Join us for unparalleled service today.
                    </p>
                    <Button as={Link}  href="#" variant="solid" className="bg-customBrown text-white  w-[150px]">
                        See More
                    </Button>
                </div>
                <div className="w-5/12">
                    <img className="h-[250px] " src="/images/lawbooks.png" />
                </div>

            </div>

        </div>
        <div className="flex flex-col h-[700px] items-center justify-center w-full mt-10">
            <div className="flex flex-row items-center justify-around w-10/12 h-5/6 flex-wrap ">

                <div className="bg-[url('/images/tag.png')] bg-cover backdrop-blur w-[290px] h-[550px] drop-shadow-lg shadow-gray-900 rounded-2xl p-8">
                    <div className="bg-[url('/images/plan_tag.png')]  bg-cover w-[154px] h-[33px] pl-9 flex items-center mt-1">
                        <p className="text-xs">BASIC Plan</p>
                    </div>

                    <p className="text-small  text-white pt-4 pb-5">For General Public</p>
                    <p className="text-4xl text-white pt-2">$0</p>
                    <p className="text-[12px]  text-gray-400 pt-2">Access to general legal information.
                        Common legal scenarios for users.
                        Suitable for occasional legal queries</p>
                    <div className="flex justify-center pt-1">
                        <Button as={Link} href="#" variant="solid" className="bg-amber-800 text-white w-[170px] mt-4">
                            Activated
                        </Button>
                    </div>
                    <div className={"h-[170px] flex flex-col justify-around w-full pt-[20px]"}>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>100 Interactions per month</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>Only for personal usage</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>Connect 3 Free Collection</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>10GB of Storage</p>
                        </div>
                    </div>

                </div>
                <div className="bg-[url('/images/tag.png')] bg-cover backdrop-blur w-[290px] h-[550px] drop-shadow-lg shadow-gray-900 rounded-2xl p-8">
                    <div className="bg-[url('/images/plan_tag.png')]  bg-cover w-[154px] h-[33px] pl-9 flex items-center mt-1">
                        <p className="text-xs">Student Plan</p>
                    </div>
                    <p className="text-small  text-white pt-4">For Law Students & Training Lawyers</p>
                    <p className="text-4xl text-white pt-2">$10</p>
                    <p className="text-[12px]  text-gray-400 pt-2">Access to study materials & past cases
                        Practice debates,simulated courtrooms
                        Affordable subscriptions for students</p>
                    <div className="flex justify-center pt-1">
                        <Button as={Link} href="#" variant="solid" className="bg-customBrown text-white w-[170px] mt-4">
                            Request to Activate
                        </Button>
                    </div>
                    <div className={"h-[170px] flex flex-col justify-around w-full pt-[20px]"}>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>200 Interactions per month</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-start"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>Study materials and practice debates.</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>Priority customer support</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>12GB of Storage</p>
                        </div>
                    </div>

                </div>
                <div className="bg-[url('/images/tag.png')] bg-cover backdrop-blur w-[290px] h-[550px] drop-shadow-lg shadow-gray-900 rounded-2xl p-8">
                    <div className="bg-[url('/images/plan_tag.png')]  bg-cover w-[154px] h-[33px] pl-9 flex items-center mt-1">
                        <p className="text-xs">Pro Plan</p>
                    </div>
                    <p className="text-small  text-white pt-4 pb-5">For Law Lawyers</p>
                    <p className="text-4xl text-white pt-2">$25</p>
                    <p className="text-[12px]  text-gray-400 pt-2">In-depth analyses, case outcome
                        predictions, & real-time updates
                        Enhanced features for Lawyers</p>
                    <div className="flex justify-center pt-1">
                        <Button as={Link} href="#" variant="solid" className="bg-customBrown text-white w-[170px] mt-4">
                            Request to Activate
                        </Button>
                    </div>
                    <div className={"h-[200px] flex flex-col justify-around w-full pt-[20px]"}>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>500 Interactions per month</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-start"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>Usage for professional legal practice</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-start"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light w-9/12"}>Advanced legal analyses, predictive tools, and real-time updates.</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>20GB of Storage</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>Dedicated customer support</p>
                        </div>
                    </div>

                </div>
                <div className="bg-[url('/images/tag.png')] bg-cover backdrop-blur w-[290px] h-[550px] drop-shadow-lg shadow-gray-900 rounded-2xl p-8">
                    <div className="bg-[url('/images/plan_tag.png')]  bg-cover w-[154px] h-[33px] pl-9 flex items-center mt-1">
                        <p className="text-xs">Enterprise Plan</p>
                    </div>
                    <p className="text-small  text-white pt-4 pb-5">For Businesses</p>
                    <p className="text-4xl text-white pt-2">$75</p>
                    <p className="text-[12px]  text-gray-400 pt-2">Data analytics & multiple user access
                        Reduce research cost for businesses
                        Scalable subscription options</p>
                    <div className="flex justify-center pt-1">
                        <Button as={Link} href="#" variant="solid" className="bg-customBrown text-white w-[170px] mt-4">
                            Request to Activate
                        </Button>
                    </div>
                    <div className={"h-[215px] flex flex-col justify-around w-full pt-[20px]"}>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] font-light"}>1000 Interactions per month</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-start"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] w-9/12 font-light"}>Business Usage for corporate legal department.</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-start"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px] w-9/12 font-light"}>Customized licenses, data analytics, and collaborative tools</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-center"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px]  font-light"}>50GB of Storage</p>
                        </div>
                        <div className={"flex flex-row gap-2 items-start"}>
                            <IoIosCheckmarkCircleOutline className={"w-[20px] h-[20px]"} />
                            <p className={"text-[12px]  font-light"}>Premium support for enterprise clients</p>
                        </div>
                    </div>

                </div>


            </div>
        </div>

        <div className="flex flex-col h-[550px] items-center justify-center w-full">
            <div className="flex flex-col items-center justify-center w-5/6 h-5/6 rounded-[40px] border-white border-2  ">
                <p className="text-lg text-customBrown pb-1">Testimonials</p>
                <div className="h-4/5 w-full flex-col flex items-center  justify-between">
                    <h2 className="text-3xl">The voice of our Clients</h2>
                    <div className="flex flex-row w-9/12 justify-around">
                        <Testimonials name="Milan B." description="As a law student, JustiBot has been a game-changer in my academic journey. The platform's comprehensive database of past cases and study materials. The simulated courtroom debates have honed my advocacy skills, preparing me for real-world scenarios." count="4" url="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
                        <Testimonials name="Isuru L." description="As a law student, JustiBot has been a game-changer in my academic journey. The platform's comprehensive database of past cases and study materials. The simulated courtroom debates have honed my advocacy skills, preparing me for real-world scenarios." count="4" url="https://avatars.githubusercontent.com/u/30373425?v=4"/>
                        <Testimonials name="Sineth .D" description="As a law student, JustiBot has been a game-changer in my academic journey. The platform's comprehensive database of past cases and study materials. The simulated courtroom debates have honed my advocacy skills, preparing me for real-world scenarios." count="4" url="https://i.pravatar.cc/150?u=a042581f4e29026704d"/>
                    </div>



                    <Button as={Link}  href="#" variant="solid" className="bg-customBrown text-white font-bold w-[150px]">
                        See More
                    </Button>
                </div>

            </div>

        </div>
        <Spacer y={10} />
        <Divider />
        <div className="flex flex-row h-[300px] items-center justify-center w-full">
            <div className=" w-1/3 pl-20  ">
                <img src="/images/justibot-logo.png" className="w-1/3"/>
                <p className="text-medium pt-4">Your virtual Legal Assistant...</p>
                <p className="text-small pt-1">Effectively deliver valuable legal insights, predictive analytics, and user-friendly solution.</p>
                <div className="flex flex-row gap-1 mt-6">
                    <Button isIconOnly color="danger" variant="bordered" className="border-white text-white" aria-label="Like">
                        <CiFacebook className="w-10"/>
                    </Button>
                    <Button isIconOnly color="danger" variant="bordered" className="border-white text-white"  aria-label="Like">
                        <FaInstagram />
                    </Button>
                    <Button isIconOnly color="danger" variant="bordered" className="border-white text-white"  aria-label="Like">
                        <FaTwitter />
                    </Button>
                    <Button isIconOnly color="danger"  variant="bordered" className="border-white text-white"  aria-label="Like">
                        <FaLinkedin />
                    </Button>
                </div>
            </div>
            <div className=" w-1/3 flex flex-col items-center justify-center ">
                <p className="text-customBrown font-bold text-xl pb-8">Contact</p>

                    <div className={"flex flex-row gap-2 items-center pb-5"}>
                        <IoLocation className={"w-[20px] h-[20px] text-customBrown"} />
                        <p className={"text-[15px] font-light"}>No: 58 A, Colombo 2</p>
                    </div>
                    <div className={"flex flex-row gap-2 items-center pb-5"}>
                        <MdEmail  className={"w-[20px] h-[20px] text-customBrown"} />
                        <p className={"text-[15px] font-light"}>info@justibot.com</p>
                    </div>
                    <div className={"flex flex-row gap-2 items-center pb-5"}>
                        <FaPhone  className={"w-[20px] h-[20px] text-customBrown"} />
                        <p className={"text-[15px] font-light"}>+00 123 456 789</p>
                    </div>


            </div>
            <div className=" w-1/3 flex flex-col items-center justify-center ">
                <p className="text-customBrown font-bold text-xl pb-8">Links</p>

                    <p className={"text-[15px] font-light pb-5" }>Home</p>

                    <p className={"text-[15px] font-light pb-5"}>About Us</p>

                    <p className={"text-[15px] font-light pb-5"}>Contact</p>



            </div>
        </div>
        <Divider/>
        <div className="flex items-center justify-center w-full h-20px p-3">
            <p className="text-xs text-gray-300">
                © 2024 <span className="font-bold text-gray-100">Coding Blinders</span>  All rights reserved.
            </p>

        </div>
    </div>
  );
}
