import React from 'react';
import { FaBookOpen, FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { IoIosBookmarks } from "react-icons/io";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

function SubHero() {
  const { ref: coursesRef, inView: coursesInView } = useInView({ triggerOnce: true });
  const { ref: subjectsRef, inView: subjectsInView } = useInView({ triggerOnce: true });
  const { ref: mentorsRef, inView: mentorsInView } = useInView({ triggerOnce: true });
  const { ref: studentsRef, inView: studentsInView } = useInView({ triggerOnce: true });

  return (
    <div className="pb-8">
      <div className="w-4/5 mx-auto font-pop flex flex-wrap justify-between bg-white shadow-slate-400 border rounded-lg p-8">
        <div className="flex items-center gap-4 mb-8 md:mb-0 w-full md:w-auto" ref={coursesRef}>
          <div className="bg-slate-100 p-2 rounded">
            <FaBookOpen size={40} className="text-[#9835ff]" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#404660] font-pop">
              {coursesInView && <CountUp end={2000} duration={3} />}+
            </h1>
            <p className="text-gray-400 font-normal font-pop">Total Courses</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8 md:mb-0 w-full md:w-auto" ref={subjectsRef}>
          <div className="bg-slate-100 p-2 rounded">
            <IoIosBookmarks size={40} className="text-[#9835ff]" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#404660] font-pop">
              {subjectsInView && <CountUp end={310} duration={3} />}+
            </h1>
            <p className="text-gray-400 font-normal font-pop">Trendy Subjects</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mb-8 md:mb-0 w-full md:w-auto" ref={mentorsRef}>
          <div className="bg-slate-100 p-2 rounded">
            <FaChalkboardTeacher size={40} className="text-[#9835ff]" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#404660]">
              {mentorsInView && <CountUp end={500} duration={3} />}+
            </h1>
            <p className="text-gray-400 font-normal font-pop">Mentors & Tutors</p>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full md:w-auto" ref={studentsRef}>
          <div className="bg-slate-100 p-2 rounded">
            <PiStudentFill size={40} className="text-[#9835ff]" />
          </div>
          <div>
            <h1 className="text-2xl font-semibold text-[#404660]">
              {studentsInView && <CountUp end={10000} duration={3} />}+
            </h1>
            <p className="text-gray-400 font-normal font-pop">Happy Students</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubHero;
