import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { NewsCard } from "../../components/NewsCard/NewsCard";
import { TextInput } from "../../components/TextInput/TextInput";

import { openNews } from "../../redux/actions/modalActions";
import { changeFilterInput } from "../../redux/actions/newsActions";

import "./newspage.scss";

const NewsPage = () => {
  const dispatch = useDispatch();
  const store = useSelector((state) => {
    return { news: state.news, auth: state.auth };
  });

  const onAddNews = () => {
    dispatch(openNews());
  };

  const onFilterNews = (value) => {
    dispatch(changeFilterInput(value));
  };

  return (
    <div className="container news__container">
      <h3 className="heading news__heading">Новости</h3>
      <div className="toolbar news__toolbar">
        <TextInput
          className="toolbar__textinput"
          type="text"
          placeholder="Поиск новости"
          value={store.news.filterInputValue}
          onChange={onFilterNews}
          validateRules={[]}
        />
        {(store.auth.userRole === "user" ||
          store.auth.userRole === "admin") && (
          <button
            className="toolbar__button button button_primary"
            onClick={onAddNews}
          >
            Добавить новость
          </button>
        )}
      </div>

      <ul className="list news__cardlist">
        {store.news.newsApproved
          .filter(
            (item) =>
              item.caption
                .toLowerCase()
                .includes(store.news.filterInputValue.toLowerCase()) ||
              item.description
                .toLowerCase()
                .includes(store.news.filterInputValue.toLowerCase())
          )
          .map((item) => (
            <li className="news__carditem" key={item.id}>
              <NewsCard
                id={item.id}
                caption={item.caption}
                description={item.description}
                date={item.date}
                status={"approved"}
              />
            </li>
          ))}
      </ul>

      {(store.auth.userRole === "user" || store.auth.userRole === "admin") && (
        <div>
          {!!store.news.newsCreated.length && (
            <h4 className="heading news__heading">Неопубликованные новости</h4>
          )}
          <ul className="list news__cardlist">
            {store.news.newsCreated
              .filter(
                (item) =>
                  item.caption
                    .toLowerCase()
                    .includes(store.news.filterInputValue.toLowerCase()) ||
                  item.description
                    .toLowerCase()
                    .includes(store.news.filterInputValue.toLowerCase())
              )
              .map((item) => (
                <li className="news__carditem" key={item.id}>
                  <NewsCard
                    id={item.id}
                    caption={item.caption}
                    description={item.description}
                    date={item.date}
                    status={"created"}
                  />
                </li>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { NewsPage };
