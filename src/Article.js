import React from "react";
import moment from "moment";
const Article = ({ date, title, snippet, length }) => {
  return (
    <article className="post">
      <h2>{title}</h2>
      <div className="post-info">
        <span>{moment(date).format("MMMM dddd Do, YYYY")}</span>
        <span>{length} mins read</span>
      </div>
      <p>{snippet}</p>
    </article>
  );
};

export default Article;
