"use client"
import Link from "next/link";
import {   useState } from "react";
import { Button } from "../ui/button";
import { FreeDemo } from "../free-demo-signup/FreeDemo";


const MobileNav: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [isSATOpen, setIsSATOpen] = useState(false);
    const [isIBOpen, setIsIBOpen] = useState(false);
    const [isGREOpen, setIsGREOpen] = useState(false);
    const [isGMATOpen, setIsGMATOpen] = useState(false);
    const [isIGCSEOpen, setIsIGCSEOpen] = useState(false);
    const [isFreeDemoOpen, setIsFreeDemoOpen] = useState(false);

     

    const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
            // Close dropdown when a link inside is clicked
            if ((e.target as HTMLElement).tagName === "A") {
                setIsSATOpen(false);
                onClose();
            }
        };
         
        
            

    return (
        <div className="flex flex-col space-y-3 p-4">
            {/* SAT Section */}
            <div >
                <span
                    onClick={() => setIsSATOpen(!isSATOpen)}

                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    SAT {isSATOpen ? "▲" : "▼"}
                </span>
                {isSATOpen && (
                    <div onClick={handleDropdownClick}
                     className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        
                        <ul className="space-y-2">
                            <li><Link href="/about-sat" className="hover:text-black"> About SAT</Link></li>
                            <li><Link href="/sat-Digital-Exam-PatternandFAQ " className="hover:text-black"> SAT Pattern</Link></li>
                            <li><Link href="/sat-2024-25-test-dates" className="hover:text-black"> SAT Test Dates</Link></li>
                            <li><Link href="/sat-fees-structure" className="hover:text-black"> Fees Structure</Link></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* IB Section */}
            <div >
                <span
                    onClick={() => setIsIBOpen(!isIBOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    IB {isIBOpen ? "▲" : "▼"}
                </span>
                {isIBOpen && (
                    <div onClick={handleDropdownClick}
                     className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        
                        <ul className="space-y-2">
                            <li><Link href="/ib" className="hover:text-black"> IB</Link></li>
                            <li><Link href="/ib-curriculam" className="hover:text-black"> IB Curriculum</Link></li>
                            <li><Link href="/ib-course-coaching-details" className="hover:text-black"> Course Structure & Coaching Details</Link></li>
                            <li><Link href="/ib-online-coaching-technology" className="hover:text-black"> Remote Tutoring</Link></li>
                            <li><Link href="/ib-fees-scheduling-registration" className="hover:text-black"> Fees,Scheduling & Registration</Link></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* GRE Section */}
            <div >
                <span
                    onClick={() => setIsGREOpen(!isGREOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    GRE {isGREOpen ? "▲" : "▼"}
                </span>
                {isGREOpen && (
                    <div onClick={handleDropdownClick}
                     className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        <ul className="space-y-2">
                            <li>
                                <Link href="/gre" className="hover:text-black">
                                    GRE
                                </Link>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

            {/* GMAT Section */}
            <div>
                <span
                    onClick={() => setIsGMATOpen(!isGMATOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    GMAT {isGMATOpen ? "▲" : "▼"}
                </span>
                {isGMATOpen && (
                    <div onClick={handleDropdownClick}
                      className="mt-2 pl-4 max-h-[300px] overflow-y-auto text-gray-700">
                        <ul className="space-y-2">
                            <li><Link href="/gmat-introduction" className="hover:text-black"> Introduction to GMAT</Link></li>
                            <li><Link href="/gmat-structure" className="hover:text-black"> GMAT Structure</Link></li>
                            <li><Link href="/gmat-sections" className="hover:text-black"> GMAT Sections</Link></li>
                            <li><Link href="/gmat-scoring" className="hover:text-black"> GMAT Scoring</Link></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* IGCSE Section */}
            <div>
                <span
                    onClick={() => setIsIGCSEOpen(!isIGCSEOpen)}
                    className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                >
                    IGCSE {isIGCSEOpen ? "▲" : "▼"}
                </span>
                {isIGCSEOpen && (
                    <div onClick={handleDropdownClick}
                     className="mt-2 pl-4 max-h-[300px] overflow-y-auto">
                        <ul className="space-y-2 text-gray-700">
                            <li><Link href="/igcse-introduction" className="hover:text-black"> Introduction to IGCSE</Link></li>
                            <li><Link href="/igcse-curriculum" className="hover:text-black"> IGCSE Curriculum</Link></li>
                            <li><Link href="/igcse-mathematics" className="hover:text-black"> IGCSE Mathematics</Link></li>
                            <li><Link href="/igcse-sciences" className="hover:text-black"> IGCSE Sciences</Link></li>
                            <li><Link href="/igcse-languages" className="hover:text-black"> IGCSE Languages</Link></li>
                            <li><Link href="/igcse-humanities-social" className="hover:text-black"> IGCSE Humanities &amp; Social Sciences</Link></li>
                            <li><Link href="/igcse-creative-professional" className="hover:text-black"> IGCSE Creative &amp; Professional</Link></li>
                            <li><Link href="/igcse-english-literature" className="hover:text-black"> IGCSE English Language &amp; Literature</Link></li>
                        </ul>
                    </div>
                )}
            </div>

            {/* Free Demo */}
            <span
                className="text-xl text-balance font-medium transition-colors hover:text-black/80 cursor-pointer text-gray-700"
                onClick={() => setIsFreeDemoOpen(true)}
            >
                Free Demo
            </span>
            <Button onClick={() => setIsFreeDemoOpen(true)} className="text-purple-600 bg-white hover:bg-purple-700 hover:text-white rounded-3xl text-xl">
                Sign up for free
            </Button>
            {isFreeDemoOpen && <FreeDemo setIsOpen={setIsFreeDemoOpen} />}
        </div>
    );
};

export default MobileNav;

{/* Test Prep Section */ }
{/* <div>
                        <span
                            onClick={toggleTestPrep}
                            className="w-full text-left text-xl text-gray-700 font-medium transition-colors hover:text-black/80 focus:outline-none cursor-pointer"
                        >
                            Test Prep {isTestPrepOpen ? "▲" : "▼"}
                        </span>
                        {isTestPrepOpen && (
                            <div className="mt-2 pl-4 max-h-[300px] overflow-y-auto ">
                                <div>
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">SAT</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/about-sat">About SAT</Link>
                                        </li>
                                        <li>
                                            <Link href="/sat-Digital-Exam-PatternandFAQ">
                                                SAT Digital Exam Pattern and FAQ
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/sat-2024-25-test-dates">
                                                SAT 2024-25 Test DATES
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/sat-fees-structure">Fees Structure</Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">IB</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/ib">IB</Link>
                                        </li>
                                        <li>
                                            <Link href="/ib-curriculam">IB Curriculum</Link>
                                        </li>
                                        <li>
                                            <Link href="/ib-course-coaching-details">
                                                Course Structure and Coaching Details
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ib-online-coaching-technology">
                                                Online Coaching and Technology Integration
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/ib-fees-scheduling-registration">
                                                Fees, Scheduling, and Registration
                                            </Link>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">GRE</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/gre">GRE </Link>
                                        </li>
                                        {/* <li>
                  <Link href="/gre-online-prep">GRE Online Prep</Link>
                </li>
                <li>
                  <Link href="/gre-overview">GRE Overview</Link>
                </li>
                <li>
                  <Link href="/gre-wordsapp">GRE WordsApp</Link>
                </li>
                <li>
                  <Link href="/gre-syllabus">GRE Syllabus</Link>
                </li>
                <li>
                  <Link href="/gre-eligibility">GRE Eligibility 2024</Link>
                </li>
                <li>
                  <Link href="/gre-test-series">GRE Test Series</Link>
                </li> */}
{/* </ul>
                                </div>

                                <div className="mt-4">
                                    <h3 className="text-lg font-semibold text-red-600 mb-2">GMAT</h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <Link href="/gmat-prep">GMAT Prep</Link>
                                        </li> */}
{/* <li>
                  <Link href="/gmat-practice-test">GMAT Practice Test</Link>
                </li>
                <li>
                  <Link href="/gmat-online-prep">GMAT Online Prep</Link>
                </li>
                <li>
                  <Link href="/gmat-books">GMAT Books</Link>
                </li>
                <li>
                  <Link href="/gmat-exam-dates">GMAT Exam Dates</Link>
                </li>
                <li>
                  <Link href="/gmat-syllabus">GMAT Syllabus</Link>
                </li>
                <li>
                  <Link href="/gmat-eligibility">GMAT Eligibility</Link>
                </li> */}
{/* </ul>
                                </div>
                            </div>
                        )}
                    </div>  */}

