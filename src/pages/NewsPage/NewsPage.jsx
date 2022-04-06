import React from "react";

import { newsApproved, newsCreated } from "../../shared/const";
import { NewsCard } from "../../components/NewsCard/NewsCard";

import c from "./newspage.module.scss"

const NewsPage = () => {
  
  return (
    <div className={c.container}>
      <h3 className={c.caption}>Новости</h3>
      {newsApproved.map((item, index) => <NewsCard key={index} caption={item.caption} description={item.description} date={item.date} />)}
      {newsCreated.map((item, index) => <NewsCard key={index} caption={item.caption} description={item.description} date={item.date} />)}
    </div>
  );
}

export {NewsPage};