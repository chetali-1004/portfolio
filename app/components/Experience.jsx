import React from "react";
import Image from "next/image";

const Experience = () => {
  return (
    <section
      className="mt-[50px] bg-[#313131] rounded-xl md:py-10 py-7 md:w-3/4 w-full mx-auto"
      id="experience"
    >
      <div className="text-center text-[#ADB7BE]">
        <span className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Experiences
        </span>
        {/* bg-[#484747] */}

        <div className="mt-9 w-3/4 mx-auto px-0 py-5">
          <div className="flex justify-between">
            <div className="text-left">
              <h4 className="font-bold italic">
                Software Development Engineer Intern
              </h4>
              <h6 className="text-sm mt-1 text-[#5f69cc] font-bold">
                Microsoft India R&D Pvt. Ltd.
              </h6>
            </div>
            <div className="flex flex-col text-right">
              <div className="flex">
                <div>
                  <Image
                    src="/images/schedule.png"
                    height={20}
                    width={20}
                    className="mx-1"
                  ></Image>
                </div>
                <div className="italic text-sm">May 2024 - July 2024</div>
              </div>

              <div className="flex my-2 items-center justify-end">
                <div>
                  <Image
                    src="/images/placeholder.png"
                    height={20}
                    width={20}
                    className="mx-1"
                  ></Image>
                </div>
                <div className="text-sm">Hyderabad</div>
              </div>
            </div>
          </div>
          <div className="mt-2 text-left text-sm">
            <p>
              Worked as part of Experiences and Devices Team in the M-365
              organization with primary focus to enrich the user experience and
              help users get all the personal information at their fingertips
            </p>
            <ul className="mt-5 ml-9 list-disc space-y-2">
              <li>
                <span className="font-bold underline">
                  Source Attribution Implementation:
                </span>{" "}
                Developed and integrated APIs to display the source of inferred
                PIM data on the Live Persona Card (LPC) in M365 products.
              </li>
              <li>
                <span className="font-bold underline">UI Enhancement:</span>{" "}
                Added a source button next to inferred data, enabling users to
                view the originating email or document with a link to the full
                context.
              </li>
              <li>
                <span className="font-bold underline">
                  Privacy, Security, and Reduced Latency:
                </span>{" "}
                Ensured secure API exposure with minimal latency, maintaining
                user privacy and preventing data breaches.
              </li>
              <li>
                <span className="font-bold underline">Technologies Used:</span>{" "}
                Utilized React.js, TypeScript, C#, and .NET for frontend and
                backend development, and leveraged Git for version control.
              </li>
              <li>
                <span className="font-bold underline">
                  Debugging and Testing:
                </span>
                Gained experience with debugging techniques, and implemented
                end-to-end (E2E) and unit tests, using Storybook for isolated UI
                testing, ensuring a seamless user experience.
              </li>
            </ul>
          </div>
          <div className="text-left">
            <button className="group">
              <a
                href="/microsoft_internship_certificate.pdf"
                target="_blank"
                className="flex px-2 py-1 rounded hover:bg-[#313131] text-sm items-center mt-3 text-white w-25"
              >
                <span className="text-[#ADB7BE] group-hover:underline">View certificate</span>
                <Image
                  src="/images/maximize.png"
                  width={15}
                  height={15}
                  className="ml-2"
                ></Image>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
