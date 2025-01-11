import React, { useState } from "react";
import Link from "next/link";


const IGCSEDropdown: React.FC = () => {
    const [isSATOpen, setIsSATOpen] = useState(false);


    const toggleTestPrep = () => {
        setIsSATOpen((prev) => !prev);
    };
    const handleDropdownClick = (e: React.MouseEvent<HTMLDivElement>) => {
        // Close dropdown when any child element (like a link) is clicked
        if ((e.target as HTMLElement).tagName === "A") {
            setIsSATOpen(false);
        }
    };

    return (
        <div
            className="relative"

        >
            {/* Trigger Button */}
            <span onClick={toggleTestPrep}
                className=" text-lg  font-medium transition-colors hover:text-black/80 flex justify-center  cursor-pointer">
                IGCSE{isSATOpen ? "▲" : "▼"}
            </span>

            {/* Dropdown Content */}
            {isSATOpen && (
                <div onClick={handleDropdownClick} // Handle clicks inside the dropdown
                    className="absolute left-1/2 transform -translate-x-1/2 mt-2  w-[200px] bg-white shadow-lg border rounded-lg p-4 z-50 transition-all ease-in-out duration-300 text-gray-600"
                >
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-2">
                        {/* IGCSE Section */}
                        <div>

                            <ul className="space-y-2">
                                <li><Link href="/igcse" className="hover:text-black">a) IGCSE </Link></li>
                                {/* <li><Link href="/gre-practice-test">GRE Practice Test</Link></li>
                                <li><Link href="/gre-online-prep">GRE Online Prep</Link></li>
                                <li><Link href="/gre-overview">GRE Overview</Link></li>
                                <li><Link href="/gre-wordsapp">GRE WordsApp</Link></li>
                                <li><Link href="/gre-syllabus">GRE Syllabus</Link></li>
                                <li><Link href="/gre-eligibility">GRE Eligibility 2024</Link></li>
                                <li><Link href="/gre-test-series">GRE Test Series</Link></li> */}
                            </ul>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default IGCSEDropdown;