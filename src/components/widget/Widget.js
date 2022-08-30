import "./widget.css";

import LinearProgress from "@mui/material/LinearProgress";

const Widget = ({ type }) => {
  let data;

  switch (type) {
    case "user":
      data = {
        title: "EARNINGS(Monthly)",
        isMoney: "$40000",
        link: "",
      };
      break;
    case "order":
      data = {
        title: "EARNINGS(Annual)",
        isMoney: "$40000",
        link: "",
      };
      break;
    case "earning":
      data = {
        title: "Tasks",
        isMoney: " ",
        link: <LinearProgress variant="determinate" value={50} />,
      };
      break;
    case "balance":
      data = {
        title: "Pending requests",
        isMoney: true,
        link: "",
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="titl">{data.title}</span>
        <span className="count">{data.isMoney}</span>
        <span className="lin">{data.link}</span>
      </div>
    </div>
  );
};

export default Widget;
