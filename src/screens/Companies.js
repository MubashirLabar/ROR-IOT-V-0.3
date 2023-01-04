import React, { useState, useEffect } from "react";
import { Header } from "../components";
import { SearchIcon, PlusIcon, ArrowDownIcon } from "../svg";
const Companies = () => {
  const [users, setUsers] = useState([
    {
      name: "Frankistin",
      companyName: "Newbiz.src",
      email: "Frankistin1122@gmail.com",
      roles: [{ label: "Admin" }, { label: "User" }, { label: "Mode" }],
    },
    {
      name: "Ar Owaisi",
      companyName: "Newbiz.src",
      email: "Frankistin1122@gmail.com",
      roles: [{ label: "Admin" }, { label: "User" }, { label: "Mode" }],
    },
  ]);

  const UserInfo = ({ item }) => {
    const [dropRole, setDropRole] = useState(false);
    const [selectedRole, setSelectedRole] = useState("Admin");
    const [roles, setRoles] = useState([
      { label: "Admin" },
      { label: "User" },
      { label: "Mode" },
    ]);

    useEffect(() => {
      document.body.addEventListener("click", () => setDropRole(false));
    }, []);

    return (
      <div className="row flex aic">
        <div className="col flex aic">
          <div className="lbl font s15 wordwrap">{item.name}</div>
        </div>
        <div className="col flex aic">
          <div className="lbl font s15 wordwrap">{item.companyName}</div>
        </div>
        <div className="col flex aic">
          <div className="lbl font s15 wordwrap">{item.email}</div>
        </div>
        <div className="col flex aic">
          {/* Role Button */}
          <button
            className="cleanbtn flex aic font s14 c000 cstm-slt rel"
            onClick={(e) => {
              e.stopPropagation();
              setDropRole(!dropRole);
            }}
          >
            {item.roles.map(
              (item) =>
                selectedRole === item.label && (
                  <div className="lb">{item.label}</div>
                )
            )}
            {dropRole && (
              <div className="options flex flex-col abs">
                {roles.map((item) => (
                  <button
                    className="cleanbtn item flex aic anim"
                    onClick={() => {
                      setDropRole(!dropRole);
                      setSelectedRole(item.label);
                    }}
                  >
                    <div className="txt font s14 c000">{item.label}</div>
                  </button>
                ))}
              </div>
            )}
            <div className="ico s12 anim">
              <ArrowDownIcon />
            </div>
          </button>
        </div>
        <div className="col flex aic">
          <button
            className="cleanbtn cross-btn font cfff flex aic"
            onClick={() => console.log("Deleted")}
          >
            &times;
          </button>
        </div>
      </div>
    );
  };

  return (
    <>
      <Header title="Company Managment" />
      <div className="users-p company-p sidebar-gap">
        <div className="title-blk flex aic">
          <div className="lit flex aic">
            <div className="title font s20 b6 c000 upc">Users</div>
          </div>
          <div className="rit flex aix">
            <button className="cleanbtn add-btn flex aic">
              <div className="ico">
                <PlusIcon />
              </div>
              <div className="txt s15 b5 cfff">Add User</div>
            </button>
          </div>
        </div>
        <div className="srch-blk flex aic">
          <div className="srch-bar flex aic">
            <input type="text" className="iput cleanbtn font s14 c000" />
            <button className="cleanbtn icon">
              <SearchIcon />
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table flex flex-col">
          <div className="table-hdr flex aic">
            <div className="col flex aic">
              <div className="lbl font s15">Name</div>
            </div>
            <div className="col flex aic">
              <div className="lbl font s15">Company Name</div>
            </div>
            <div className="col flex aic">
              <div className="lbl font s15">E-mail</div>
            </div>
            <div className="col flex aic">
              <div className="lbl font s15">Role</div>
            </div>
            <div className="col flex aic">
              <div className="lbl font s15">Action</div>
            </div>
          </div>
          {users.map((item, index) => (
            <UserInfo item={item} />
          ))}
        </div>
      </div>
      ;
    </>
  );
};

export default Companies;
