import Image from "next/image";
import React from "react";

const FirstStripSection: React.FC = () => {
  return (
    <>
    <section className="bg-green-400 py-16" >
      <div className="container mx-auto px-6 md:px-10 lg:px-20 flex flex-col-reverse lg:flex-row-reverse items-center " >
        {/* Left Content */}
        <div className="text-center lg:text-left lg:w-3/4">
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
            Our online tutoring service is tailored for students preparing for
            the IB, IGCSE, SAT, GMAT, and GRE. We don’t just teach strategies—we
            ignite critical thinking, sharpen problem-solving skills, and build
            confidence to tackle these competitive exams head-on.
          </p>
          <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8">
            With personalized, flexible learning led by expert tutors, we focus
            on equipping you with the tools to master complex concepts and ace
            challenging questions. Our approach ensures that preparation
            inspires, not overwhelms, by addressing each student’s unique
            strengths and areas for improvement.
          </p>
        </div>

        {/* Right Illustration */}
        <div className="lg:w-1/4 mb-10 lg:mb-0 mr-12">
          <Image
            src="/images/Online-Learning-1--Streamline-Milano.svg"
            alt="Illustration"
            className="max-w-full mx-auto lg:mx-0 float-left"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
    </>
  );
};

export default FirstStripSection;