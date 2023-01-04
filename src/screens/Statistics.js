import React, { useState } from "react";
import { Header, Rightbar } from "../components";
import {
  UptimeIcon,
  TemperatureIcon,
  DropIcon,
  OutlineCalenderIcon,
  FanIcon,
  SolutionLevelIcon,
  PumpStatusIcon,
  WaterLevelIcon,
  ActivityStatusIcon,
} from "../svg";

const Statistics = () => {
  const [activeTab, setActiveTab] = useState("Water Sensing");
  const [fan, setFan] = useState(true);

  const [statistics, setStatistics] = useState([
    {
      label: "Uptime",
      value: "24:01:00",
      icon: <UptimeIcon />,
    },
    {
      label: "Temperature",
      value: "24C",
      icon: <TemperatureIcon />,
      symbole: "degree",
    },
    {
      label: "humidity",
      value: "78%",
      icon: <DropIcon />,
    },
  ]);
  const [activityTabs, setActivityTabs] = useState([
    { label: "Calibrations" },
    { label: "Water Sensing" },
    { label: "Support Requests" },
  ]);

  const waterSensing = [
    {
      date: "24/06/1999",
      time: "12:01:12",
      duration: "12mins 22sec",
      excuted_by: "Frankistin",
    },
    {
      date: "24/06/1999",
      time: "12:01:12",
      duration: "12mins 22sec",
      excuted_by: "Frankistin",
    },
    {
      date: "24/06/1999",
      time: "12:01:12",
      duration: "12mins 22sec",
      excuted_by: "Frankistin",
    },
    {
      date: "24/06/1999",
      time: "12:01:12",
      duration: "12mins 22sec",
      excuted_by: "Frankistin",
    },
    {
      date: "24/06/1999",
      time: "12:01:12",
      duration: "12mins 22sec",
      excuted_by: "Frankistin",
    },
    {
      date: "24/06/1999",
      time: "12:01:12",
      duration: "12mins 22sec",
      excuted_by: "Frankistin",
    },
    {
      date: "24/06/1999",
      time: "12:01:12",
      duration: "12mins 22sec",
      excuted_by: "Frankistin",
    },
  ];

  return (
    <>
      <Header title="Statistics" rightbarIcon="setting" />
      <div className="statistic-p flex rel sidebar-gap">
        <div className="container flex flex-col">
          {/* Summary block */}
          <div className="summary flex aic">
            {statistics.map((item, index) => (
              <div key={index} className="blk flex flex-col">
                <div className="hdr flex aic">
                  <div className="lbl font s16 b3 c333 upc">{item.label}</div>
                  <div className="ico flex aic">{item.icon}</div>
                </div>
                <div className="meta rel">
                  <div className="txt font s26 b6">{item.value}</div>
                  {item.symbole === "degree" && <div className="symbol abs" />}
                </div>
              </div>
            ))}
          </div>

          {/* Activity Meter */}
          <div className="activity-meter flex aic">
            <div className="left flex aic">
              <div className="activity-tit font s18 b6 upc c68">
                Activity Meter
              </div>
            </div>
            <div className="blk flex aic">
              <div className="center flex aic">
                <div className="actions flex aic">
                  {activityTabs.map((item, index) => (
                    <button
                      className={`cleanbtn btn font s14 b5 c68 upc anim ${
                        activeTab === item.label ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(item.label)}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>
              <div className="right flex aic">
                <button className="cleanbtn calender flex aic">
                  <div className="ico">
                    <OutlineCalenderIcon />
                  </div>
                  <div className="txt font s13 b5 c68">24/06/1999</div>
                </button>
              </div>
            </div>
          </div>

          <div className="activity-content flex flex-col rel">
            <div className="hdr">
              <div className="meta flex aic">
                <div className="tit font s18 b6 c68 upc flex aic">
                  Water Sensing
                </div>
              </div>
              <div className="row flex aic">
                <div className="col flex aic">
                  <div className="lbl font wordwrap">Date</div>
                </div>
                <div className="col flex aic">
                  <div className="lbl font wordwrap">Time</div>
                </div>
                <div className="col flex aic">
                  <div className="lbl font wordwrap">Duration</div>
                </div>
                <div className="col flex aic">
                  <div className="lbl font wordwrap">Executed By</div>
                </div>
              </div>
            </div>
            <div className="wrap">
              {waterSensing.map((item, index) => (
                <div className="row flex aic">
                  <div className="col flex aic">
                    <div className="lbl font wordwrap">{item.date}</div>
                  </div>
                  <div className="col flex aic">
                    <div className="lbl font wordwrap">{item.time}</div>
                  </div>
                  <div className="col flex aic">
                    <div className="lbl font wordwrap">{item.duration}</div>
                  </div>
                  <div className="col flex aic">
                    <div className="lbl font wordwrap">{item.excuted_by}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="static-rightbar">
          <Rightbar header={true}>
            <div className="controls flex flex-col">
              {/* Fan Control */}
              <div className="block">
                <div className="tit font s16 c68 upc">Fan Control</div>
                <div className="row flex aic">
                  <div className="meta flex aic">
                    <div className="ico">
                      <FanIcon />
                    </div>
                    <div className="font s14 b6 c68">Fan</div>
                  </div>
                  <div className="right">
                    <button
                      className={`fan-btn cleanbtn ${fan ? "on" : "off"}`}
                      onClick={() => setFan(!fan)}
                    >
                      <div className="txt font s13">ON</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Status of containers */}
              <div className="block containers">
                <div className="tit font s16 c68 upc">Status of containers</div>
                <div className="row flex aic">
                  <div className="meta flex aic">
                    <div className="ico">
                      <SolutionLevelIcon />
                    </div>
                    <div className="font s14 b6 c68">Solution level</div>
                  </div>
                  <div className="right">
                    <div className="val font s13 b6 c68">-94%</div>
                  </div>
                </div>
                <div className="row flex aic">
                  <div className="meta flex aic">
                    <div className="ico pump">
                      <PumpStatusIcon />
                    </div>
                    <div className="font s14 b6 c68">Pump status</div>
                  </div>
                  <div className="right">
                    <button className={`cleanbtn status-btn flex aic active`}>
                      <div className="dot" />
                      <div className="txt font s11 upc cfff">Active</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Status of drawer */}
              <div className="block containers">
                <div className="tit font s16 c68 upc">Status of drawer</div>
                <div className="row flex aic">
                  <div className="meta flex aic">
                    <div className="ico waterlevel">
                      <WaterLevelIcon />
                    </div>
                    <div className="font s14 b6 c68">Water Level</div>
                  </div>
                  <div className="right">
                    <div className="val font s13 b6 c68">-94%</div>
                  </div>
                </div>
                <div className="row flex aic">
                  <div className="meta flex aic">
                    <div className="ico pump">
                      <ActivityStatusIcon />
                    </div>
                    <div className="font s14 b6 c68">Activity Status</div>
                  </div>
                  <div className="right">
                    <button className={`cleanbtn status-btn flex aic closed`}>
                      <div className="dot" />
                      <div className="txt font s11 upc cfff">Closed</div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Status of drawer */}
              <div className="block containers">
                <div className="tit font s16 c68 upc">Status of cups</div>
                <div className="row flex aic">
                  <div className="meta flex aic">
                    <div className="ico waterlevel">
                      <WaterLevelIcon />
                    </div>
                    <div className="font s14 b6 c68">Water Level</div>
                  </div>
                  <div className="right">
                    <div className="val font s13 b6 c68">-94%</div>
                  </div>
                </div>
                <div className="row flex aic">
                  <div className="meta flex aic">
                    <div className="ico pump">
                      <ActivityStatusIcon />
                    </div>
                    <div className="font s14 b6 c68">Activity Status</div>
                  </div>
                  <div className="right">
                    <button className={`cleanbtn status-btn flex aic closed`}>
                      <div className="dot" />
                      <div className="txt font s11 upc cfff">Closed</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Rightbar>
        </div>
      </div>
    </>
  );
};

export default Statistics;
