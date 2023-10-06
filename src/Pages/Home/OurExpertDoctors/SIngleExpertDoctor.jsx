import { useLoaderData } from "react-router-dom";
import Cover from "../../SharedComponent/Cover";
import { Rating } from "@smastrom/react-rating";
import { GoLocation } from "react-icons/go";
import "./SingleExpoert.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
import { useEffect, useState } from "react";
import ScrolltoTop from "../../Shared/ScrolltoTop";
const SIngleExpertDoctor = () => {
  const data = useLoaderData();
  console.log(data);
  const [image, setImage] = useState(data.image_url);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <ScrolltoTop></ScrolltoTop>
      <Cover coverTitle={"Doctors Profile"} path={"View Profile"}></Cover>

      {/* banner with image */}
      <div className="lg:mt-[100px] mt-4">
        <div className="hero  px-2 lg:h-[350px]  w-11/12 mx-auto bg-[#FFF]">
          <div className="hero-content flex-col  w-full justify-start lg:flex-row">
            <div className="w-[300px] rounded-lg h-[300px] ">
              <img
                src={image}
                className="w-full duration-500 transform h-full object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="flex justify-between lg:w-1/2 w-full lg:h-[290px] flex-col">
              <div>
                <h1 className="text-4xl font-KaushanScript text-[#07332F] font-bold">
                  {data.name}
                </h1>
                <p className="text-[#6C6B6B] mt-1">
                  {data.position} ,{data.type}
                </p>
                <div className="mt-2 mb-2 items-center flex gap-2 text-gray-500">
                  {" "}
                  <Rating
                    style={{ maxWidth: 100 }}
                    value={data.rating}
                    readOnly
                  />
                  ({data.rating})
                </div>
                <div className="my-3 grid grid-cols-3 lg:grid-cols-4 gap-2">
                  <div
                    onClick={() => setImage(data.image_url)}
                    className="w-[90px]  rounded-lg h-[90px] "
                  >
                    <img
                      src={data.image_url}
                      className="w-full  h-full object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                  <div
                    onClick={() =>
                      setImage(
                        "https://i.ibb.co/DKWdS9D/pexels-andrea-piacquadio-3779698.jpg"
                      )
                    }
                    className="w-[90px] rounded-lg h-[90px] "
                  >
                    <img
                      src="https://i.ibb.co/DKWdS9D/pexels-andrea-piacquadio-3779698.jpg"
                      className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                  <div
                    onClick={() =>
                      setImage(
                        "https://i.ibb.co/z84qKpB/pexels-anna-shvets-3845625.jpg"
                      )
                    }
                    className="w-[90px] rounded-lg h-[90px] "
                  >
                    <img
                      src="https://i.ibb.co/z84qKpB/pexels-anna-shvets-3845625.jpg"
                      className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                  <div
                    onClick={() =>
                      setImage(
                        "https://i.ibb.co/FDMnnxn/pexels-pixabay-52527.jpg"
                      )
                    }
                    className="w-[90px] rounded-lg h-[90px] "
                  >
                    <img
                      src="https://i.ibb.co/FDMnnxn/pexels-pixabay-52527.jpg"
                      className="w-full h-full object-cover rounded-lg shadow-2xl"
                    />
                  </div>
                </div>
                <div className="flex gap-x-4  items-center text-[#6C6B6B]">
                  <GoLocation className="text-2xl" />
                  {data.location}
                </div>
              </div>

              <div className="gap-x-2 flex lg:flex-row flex-col justify-start w-9/12 gap-y-2 mt-4 ">
                <button className="btn btn-outline rounded-md px-5 outline-[#07332F] text-[#07332F]">
                  Dental Filling
                </button>
                <button className="btn btn-outline rounded-md px-5 outline-[#07332F] text-[#07332F]">
                  Teeth Whitneing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* tab section */}
      <div className="lg:w-11/12 mx-2 lg:mx-auto">
        <Tabs>
          <TabList className="flex justify-center bg-black items-center">
            <Tab>Over View</Tab>
            <Tab>Location</Tab>
          </TabList>

          <TabPanel className="mx-3 my-10">
            <div className=" mt-6">
              <h1 className="mb-3 text-2xl font-bold text-[#07332F]">
                About Me :
              </h1>
              <h1>{data.about_me}</h1>
            </div>
            <div className="grid lg:grid-cols-2">
              <div>
                <h1 className="text-2xl font-bold text-[#07332F] mt-5">
                  Education :
                </h1>
                <div>
                  {data.education.map((x) => (
                    <>
                      <div className="my-1 flex ms-2  mt-1">
                        <li></li>
                        <div>
                          <h1 className=" my-1  font-bold text-[#07332F]">
                            {x.university}
                          </h1>
                          <h1 className=" ">
                            <span className="font-bold">Degree:</span>{" "}
                            {x.degree}
                          </h1>
                          <h1>
                            <span className="font-bold">Passed :</span>{" "}
                            {x.passing_year}
                          </h1>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#07332F] mt-5">
                    Work Experience:
                  </h1>
                  <h1 className="ms-6">{data.work_experience}</h1>
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#07332F] mt-5">
                    specializations :
                  </h1>
                  {data.specializations.map((x) => (
                    <>
                      <div className="my-1 flex ms-2  mt-1">
                        <li>{x}</li>
                      </div>
                    </>
                  ))}
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#07332F] mt-5">
                  Awards :
                </h1>
                <div>
                  {data.awards.map((x) => (
                    <>
                      <div className="my-1 flex ms-2  mt-1">
                        <li></li>
                        <div>
                          <h1 className=" my-1  font-bold text-[#07332F]">
                            {x.name}
                          </h1>
                          <h1 className=" ">
                            <span className="font-bold">Year:</span> {x.year}
                          </h1>
                          <h1>
                            <span className="font-bold">Description :</span>{" "}
                            {x.description}
                          </h1>
                        </div>
                      </div>
                    </>
                  ))}
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#07332F] mt-5">
                    Services :
                  </h1>
                  {data.services.map((x) => (
                    <>
                      <div className="my-1 flex ms-2  mt-1">
                        <li>{x}</li>
                      </div>
                    </>
                  ))}
                </div>

                <button className="btn rounded-md mt-4 bg-[#F7A582] text-white">
                  Take Appoinment
                </button>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <h2>COMING SOON</h2>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default SIngleExpertDoctor;
