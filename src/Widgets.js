import React from "react";
import "./styles/Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";

function Widgets() {
  const newsArticle = (heading, subtitle, link) => (
    <div
      onClick={() => {
        window.location.href = link;
      }}
      className="widgets__article"
    >
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>Social App News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Redux is worth it?",
        "Top news - 9099 readers",
        "https://www.reddit.com/r/reactjs/comments/fvzgm0/is_redux_worth_it_in_2020/"
      )}
      {newsArticle(
        "When should you use react?",
        "Top news - 1055 readers",
        "https://www.simform.com/blog/why-use-react/"
      )}
      {newsArticle(
        "New vaccine for Corona!",
        "Top news - 3567 readers",
        "https://www.who.int/news-room/q-a-detail/coronavirus-disease-(covid-19)-vaccines?adgroupsurvey={adgroupsurvey}"
      )}
      {newsArticle(
        "Quantum particle novel discovery",
        "Top news - 502 readers",
        "https://pubs.acs.org/doi/abs/10.1021/cm501866x"
      )}
    </div>
  );
}

export default Widgets;
