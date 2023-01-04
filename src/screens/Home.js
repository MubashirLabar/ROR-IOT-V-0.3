import React from "react";
import { Header, Rightbar } from "../components";

const Home = () => {
  const logs = [
    {
      txt: "Active Cup 1 and Fill it to PH7",
      date: "24/06/1999",
      time: "06:01:02",
    },
    {
      txt: "Active Cup 1 and Fill it to PH7",
      date: "24/06/1999",
      time: "06:01:02",
    },
    {
      txt: "Active Cup 1 and Fill it to PH7",
      date: "24/06/1999",
      time: "06:01:02",
    },
  ];

  return (
    <>
      <Header title="Dashboard" />
      <div className="home-p flex rel sidebar-gap">
        <div className="container flex flex-col aic">
          <div className="cirlce-btns">
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              EC2
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              No2 (10)
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              No2 (100)
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3"></button>
            <button className="btn cleanbtn flex aic font s16 ">
              <div className="txt font s12 c000 b3">Imacimus conditioning</div>
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              PH4
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              PH7
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              KCL
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              M-ION ( P1 )
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              Distilled water
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              M-ION ( P2 )
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              EC1
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              <div className="inline-cirlce">
                <div className="inline-cirlce-btn">
                  <div className="text font s15 ">DO</div>
                </div>
                <div className="inline-cirlce-btn">
                  <div className="text font s15 ">AIR</div>
                </div>
                <div className="inline-cirlce-btn">
                  <div className="text font s15 ">EC</div>
                </div>
                <div className="inline-cirlce-btn">
                  <div className="text font s15 ">PH</div>
                </div>
                <div className="inline-cirlce-btn">
                  <div className="text font s15 ">MI</div>
                </div>
              </div>
            </button>
          </div>
          <div className="square-btns flex aic">
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              <div className="item">Waste drawer</div>
            </button>
            <button className="btn cleanbtn flex aic font s16 c000 b3">
              <div className="item">Sample Waste drawer</div>
            </button>
          </div>
          <div className="calibration-btns flex flex-col">
            <div className="row flex aic">
              <button className="cleanbtn btn font">Calibration</button>
              <button className="cleanbtn btn font">Water Sense</button>
            </div>
          </div>
        </div>
        <div className="logs-container">
          <Rightbar header={true} title="Activity Log">
            <div className="wrap flex flex-col">
              {logs.map((item) => (
                <div className="item flex aic">
                  <div className="flex aic">
                    <div className="ico color s16 b7">&#8212;</div>
                    <div className="txt font s13 c000">{item.txt}</div>
                  </div>
                  <div className="meta flex flex-col s10 aic">
                    <div className="date font c000 b5">{item.date}</div>
                    <div className="font c000">{item.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </Rightbar>
        </div>
      </div>
    </>
  );
};

export default Home;
