import { Icon, IconButton, Typography } from "@mui/material";
import React from "react";

const Users = [
  {
    id: 1,
    selected: false,
    "S.no": 1,
    Feed: "https://www.drupal.org/project/dummy_link",
    country: "USA",
    Source: "Phishtank Verified Online Url feed",
  },
  {
    id: 2,
    selected: false,
    "S.no": 1,
    Feed: "https://www.drupal.org/project/dummy_link",
    country: "USA",
    Source: "Phishtank Verified Online Url feed",
  },
  {
    id: 3,
    selected: false,
    "S.no": 1,
    Feed: "https://www.drupal.org/project/dummy_link",
    country: "USA",
    Source: "Phishtank Verified Online Url feed",
  },
  {
    id: 4,
    selected: false,
    "S.no": 1,
    Feed: "https://www.drupal.org/project/dummy_link",
    country: "USA",
    Source: "Phishtank Verified Online Url feed",
  },
  {
    id: 5,
    selected: false,
    "S.no": 1,
    Feed: "https://www.drupal.org/project/dummy_link",
    country: "USA",
    Source: "Phishtank Verified Online Url feed",
  },
  {
    id: 6,
    selected: false,
    "S.no": 1,
    Feed: "https://www.drupal.org/project/dummy_link",
    country: "USA",
    Source: "Phishtank Verified Online Url feed",
  },
  {
    id: 7,
    selected: false,
    "S.no": 1,
    Feed: "https://www.drupal.org/project/dummy_link",
    country: "USA",
    Source: "Phishtank Verified Online Url feed",
  },
  {
    id: 8,
    selected: true,
    "S.no": 1,
    Feed: "https://www.drupal.org/project/dummy_link",
    country: "USA",
    Source: "Phishtank Verified Online Url feed",
  },
];

const SelectTableComponent = (props) => {
  const [state, setState] = React.useState({
    List: Users,
    MasterChecked: false,
    SelectedList: [],
  });
  const { List, MasterChecked, SelectedList } = state;
  const onMasterCheck = (e) => {
    let tempList = List;

    tempList.map((user) => (user.selected = e.target.checked));
    setState((prev) => ({
      ...prev,
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: List.filter((e) => e.selected),
    }));
  };

  const onItemCheck = (e, item) => {
    let tempList = List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });

    const totalItems = List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;
    setState((prev) => ({
      ...prev,
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: List.filter((e) => e.selected),
    }));
  };

  const getSelectedRows = () => {
    setState((prev) => ({
      ...prev,
      SelectedList: List.filter((e) => e.selected),
    }));
  };

  return (
    <div
      className="container"
      style={{
        paddingTop: "15px",
        boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <IconButton>
            <Icon>search</Icon>
          </IconButton>
          <IconButton>
            <Icon>download</Icon>
          </IconButton>
          <IconButton>
            <Icon>filter_alt</Icon>
          </IconButton>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography style={{ fontWeight: 700 }}>Grid View</Typography>
          <IconButton>
            <Icon>dashboard</Icon>
          </IconButton>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={MasterChecked}
                    id="mastercheck"
                    onChange={(e) => onMasterCheck(e)}
                  />
                </th>

                <th scope="col">S.no</th>
                <th scope="col">Feed</th>
                <th scope="col">country</th>
                <th scope="col">Source</th>
              </tr>
            </thead>
            <tbody>
              {List.map((user) => (
                <tr key={user.id} className={user.selected ? "selected" : ""}>
                  <th scope="row">
                    <input
                      type="checkbox"
                      checked={user.selected}
                      className="form-check-input"
                      id="rowcheck{user.id}"
                      onChange={(e) => onItemCheck(e, user)}
                    />
                  </th>
                  <td>{user["S.no"]}</td>
                  <td>
                    <a style={{ textDecoration: "underline", color: "blue" }}>
                      {user.Feed}
                    </a>
                  </td>
                  <td>{user.country}</td>
                  <td>{user.Source}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default SelectTableComponent;
