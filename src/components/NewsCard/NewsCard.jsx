import { useDispatch, useSelector } from "react-redux";

import { approveNews, deleteNews } from "../../redux/actions/newsActions";

import "./newscard.scss";

const NewsCard = (props) => {
  const { id, caption, description, date, status } = props;
  const dispatch = useDispatch();
  const store = useSelector((state) => state.auth);

  const onApprove = () => {
    dispatch(approveNews(id));
  };

  const onDelete = () => {
    dispatch(deleteNews(id));
  };

  return (
    <div className="card">
      <div
        className={`card__wrapper ${
          status === "created" ? "card__wrapper_created" : ""
        }`}
      >
        <h4 className="card__caption">{caption}</h4>
        <span className="card__date">{date}</span>
        <p className="card__description">{description}</p>
      </div>
      <div className="card__button-wrapper">
        {store.userRole === "admin" && status === "created" && (
          <button className="button button_primary" onClick={onApprove}>
            Одобрить
          </button>
        )}
        {(store.userRole === "admin" ||
          (store.userRole === "user" && status === "created")) && (
          <button className="button button_delete" onClick={onDelete}>
            Удалить
          </button>
        )}
      </div>
    </div>
  );
};

export { NewsCard };
