import { React} from "react";
import { genreTypes } from "../../config/appConfig";
import styles from "./featured.module.css";
import { useSelector } from "react-redux";
const Categories = ({ type }) => {
  const genres = useSelector((state) => state.genres);
  return (
    <>
      {type && (
        <div className={styles.category}>
          <span>{type === genreTypes.MOVIES ? "Movies" : "TV Shows"}</span>
          <select className={styles.select} name="genre" id="genre">
            <option>Genre</option>
            {genres &&
              genres.map((el, i) => (
                <option value={el} key={i}>
                  {" "}
                  {el}{" "}
                </option>
              ))}
          </select>
        </div>
      )}
    </>
  );
};

export default Categories;
