import React, { useState } from "react";
import { Header, Rightbar } from "../components";
import { EnvalopIcon, PhoneNumberIcon, EmailIcon } from "../svg";

const Support = () => {
  const _supports = [
    {
      label: "Send support form",
      icon: <EnvalopIcon />,
      address: "",
    },
    {
      label: "Phone numbers",
      icon: <PhoneNumberIcon />,
      address: {
        contact_1: "+92321251064",
        contact_2: "+923212510678",
      },
    },
    {
      label: "Email",
      icon: <EmailIcon />,
      address: { contact_1: "colvito@gmail.com" },
    },
  ];
  const [title, setTital] = useState("");
  const [subject, setSubject] = useState("");
  const [txt, setTxt] = useState("");

  return (
    <>
      <Header title="Support" rightbarIcon="support" />
      <div className="support-p flex rel sidebar-gap">
        <div className="container flex flex-col">
          {/* Summary block */}
          <div className="summary flex aic">
            {_supports.map((item, index) => (
              <div key={index} className="blk flex flex-col">
                <div className="hdr flex">
                  <div className="lbl font s16 c333 upc">{item.label}</div>
                  <div className="ico flex aic">{item.icon}</div>
                </div>
                <div className="meta flex flex-col">
                  <div className="txt font s12">{item.address.contact_1}</div>
                  <div className="txt font s12">{item.address.contact_2}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="support-rightbar">
          <Rightbar header={true}>
            <div className="support-form flex flex-col aic">
              <div className="tit font s17 b6 c68 upc">Support Form</div>
              <div className="feild flex flex-col aic">
                <div className="lbl font s14 c68">Tital Of Content</div>
                <input
                  className="cleanbtn iput font s14 c68"
                  type="text"
                  onChange={(e) => setTital(e.target.value)}
                />
              </div>
              <div className="feild flex flex-col aic">
                <div className="lbl font s14 c68">Subject</div>
                <input
                  className="cleanbtn iput font s14 c68"
                  type="text"
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>
              <div className="feild flex flex-col aic">
                <div className="lbl font s14 c68">Insert Text</div>
                <textarea
                  className="cleanbtn iput area font s14 c68"
                  type="text"
                  onChange={(e) => setTxt(e.target.value)}
                />
              </div>
              <button className="submit cleanbtn s13 b6 upc cfff">Send</button>
            </div>
          </Rightbar>
        </div>
      </div>
    </>
  );
};

export default Support;
