import React, { useEffect, useState } from "react";
import ResultPage from "../result/ResultPage";
import { useTestContext } from "@/context/TestContext";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import LandoltCChart from "@/components/LandoltCChart";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import VisualAcuityResult from "./VisualAcuityResult";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import Link from "next/link";
import AstigmatismResult from "./AstigmatismResult";
import ColorVisionResult from "./ColorVisionResult";
import ContrastVisionResult from "./ContrastVisionResult";

const CummulativeResult: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const { testsTaken, resetContext } = useTestContext();
  const router = useRouter();
  const [quitComfirmation, setQuitConfirmation] = useState<boolean>(false);

  const handleExit = () => {
    resetContext();
    window.location.href = "http://localhost:3000";
  };

  return (
    <>
      {loading && (
        <div className="flex flex-col items-center sm:items-center justify-start min-h-screen">
          {quitComfirmation ? (
            <div className="flex gap-3 flex-col items-center justify-center mt-32">
              <h1 className="w-[20rem] sm:w-[30rem] text-2xl sm:text-4xl font-bold text-gray-700">
                Are you sure you want to quit?
              </h1>
              <h3 className="w-[20rem] sm:w-[30rem] md:text-lg text-md text-gray-500 mb-8">
                All progress will be lost
              </h3>
              <button
                onClick={handleExit}
                className="w-[20rem] sm:w-[30rem] text-lg md:text-xl bg-gray-900 hover:bg-gray-700 text-white border-2 border-black p-2 md:p-4 rounded"
              >
                Yes
              </button>
              <button
                className="w-[20rem] sm:w-[30rem] text-lg md:text-xl bg-transparent hover:bg-gray-900 text-black hover:text-white border-2 border-black p-2 md:p-4 rounded"
                onClick={() => setQuitConfirmation(false)}
              >
                No
              </button>
            </div>
          ) : (
            <>
              <div className="w-full flex justify-between">
                <div className="w-5"></div>
                <h3 className="self-center text-center text-sm font-bold text-gray-700 mt-2">
                  How do your eyes look
                </h3>
                <div
                  className="p-4 hover:cursor-pointer"
                  onClick={() => setQuitConfirmation(true)}
                >
                  <CloseIcon style={{ fontSize: "20px", color: "black" }} />
                </div>
              </div>
              <div className="flex flex-wrap items-start justify-center sm:justify-start mt-16 gap-8">
                <div className="flex flex-col w-[25rem] bg-white items-center shadow-lg rounded-2xl">
                  <h2 className="text-center text-3xl font-semibold text-black my-10">
                    See your results.
                  </h2>
                  {testsTaken["visual acuity"] && (
                    <div className="w-[25rem] border-t-2">
                      <Accordion sx={{ p: 2, boxShadow: "none" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          sx={{ alignItems: "center" }}
                        >
                          <LandoltCChart rotation={0} width={40} />
                          <h3 className="w-full pl-8 text-2xl font-bold text-gray-700">
                            Visual Acuity
                          </h3>
                        </AccordionSummary>
                        <AccordionDetails>
                          <VisualAcuityResult />
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )}
                  {testsTaken["contrast vision"] && (
                    <div className="w-[25rem] border-t-2">
                      <Accordion sx={{ p: 2, boxShadow: "none" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          sx={{ alignItems: "center" }}
                        >
                          <LandoltCChart
                            rotation={120}
                            width={40}
                            opacity={0.5}
                          />
                          <h3 className="w-full pl-8 text-2xl font-bold text-gray-700">
                            Contrast Vision
                          </h3>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ContrastVisionResult />
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )}
                  {testsTaken["color vision"] && (
                    <div className="w-[25rem] border-t-2">
                      <Accordion sx={{ p: 2, boxShadow: "none" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          sx={{ alignItems: "center" }}
                        >
                          <img
                            className="h-[40px]"
                            src="/test_images/Ishihara_9.svg"
                            alt="Test_image"
                          />
                          <h3 className="w-full pl-8 text-2xl font-bold text-gray-700">
                            Color Vision
                          </h3>
                        </AccordionSummary>
                        <AccordionDetails>
                          <ColorVisionResult />
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )}
                  {testsTaken["astigmatism"] && (
                    <div className="w-[25rem] border-t-2">
                      <Accordion sx={{ p: 2, boxShadow: "none" }}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1-content"
                          id="panel1-header"
                          sx={{ alignItems: "center" }}
                        >
                          <img
                            className="w-[40px]"
                            src="/test_images/astigmatism-chart.jpg"
                            alt="Test_image"
                          />
                          <h3 className="w-full pl-8 text-2xl font-bold text-gray-700">
                            Astigmatism
                          </h3>
                        </AccordionSummary>
                        <AccordionDetails>
                          <AstigmatismResult />
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  )}
                </div>
                <div className="flex flex-col gap-4 bg-white rounded-2xl justify-around px-3 py-8 items-center shadow-lg">
                  <SearchIcon
                    className="text-cyan-600"
                    style={{ fontSize: "70px" }}
                  />
                  <h1 className="w-[20rem] text-center text-md text-gray-700">
                    <strong>Don&apos;t delay!</strong>
                    <br />
                    Book your complete eye test with Dear Eyes today. Our
                    skilled team will thoroughly examine your vision, uncovering
                    any issues.
                  </h1>
                  <a className="w-3/4" target="_blank">
                    <button className="w-full mt-4 text-md bg-transparent hover:bg-gray-900 text-black hover:text-white border-2 border-black px-4 py-4 rounded">
                      Book eye test
                    </button>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default CummulativeResult;
