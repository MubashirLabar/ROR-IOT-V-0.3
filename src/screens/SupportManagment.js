import React, { useState, useEffect } from "react";
import { Header, Rightbar } from "../components";
import {
  MessengerUserIcon,
  MessengerSendIcon,
  MessengerFileIcon,
} from "../svg";
import Messanger from "./Messanger";

const Users = () => {
  const [clients, setClients] = useState([
    {
      name: "Frankistin",
      email: "frankistin1122@gmail.com",
      date: "24/06/1999",
      subject: "Calibiration Working Issue......",
    },
  ]);

  return (
    <>
      <Header title="Support Managment" rightbarIcon="support" />
      <div className="support-managment-p flex sidebar-gap">
        <div className="container flex flex-col">
          <div className="page-hdr flex">
            <div className="title font s20 b6 c000 upc">Clients</div>
          </div>

          {/* Table */}
          <div className="table flex flex-col">
            <div className="table-hdr flex aic">
              <div className="col flex aic">
                <div className="lbl font s15">Name</div>
              </div>
              <div className="col flex aic">
                <div className="lbl font s15">Email</div>
              </div>
              <div className="col flex aic">
                <div className="lbl font s15">Date</div>
              </div>
              <div className="col flex aic">
                <div className="lbl font s15">Subject</div>
              </div>
            </div>
            {clients.map((item, index) => (
              <div key={index} className="row flex aic">
                <div className="col flex aic">
                  <div className="lbl font s15">{item.name}</div>
                </div>
                <div className="col flex aic">
                  <div className="lbl font s15">{item.email}</div>
                </div>
                <div className="col flex aic">
                  <div className="lbl font s15">{item.date}</div>
                </div>
                <div className="col flex aic">
                  <div className="lbl font s15">{item.subject}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="manag-rightbar">
          <Rightbar header={true} name="messanger">
            <div className="meta flex flex-col aic">
              <div className="dp flex aic">
                <MessengerUserIcon />
              </div>
              <div className="nam font s16 b6 upc c68">Frankistian</div>
            </div>
            <Messanger />
          </Rightbar>
        </div>
      </div>
    </>
  );
};

export default Users;
