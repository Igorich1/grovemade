import React from "react";
import "./Meaningful.css";

// https://newbedev.com/javascript-import-all-images-from-a-folder-react-code-example
// Here is the explanation
function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}
const images = importAll(require.context(`./img`, false, /\.(png|jpe?g|svg)$/));

export const Meaningful = () => {
  return (
    <div>
      <div className="meaningful-text">
        <p className="work-text">Make Work Meaningful</p>
        <p className="work-mini">
          We're here because we believe that your work deserves the best. A team
          that loves working together is the magic that makes it all happen.
        </p>
      </div>
      <ul className="meaningful__list">
        {images &&
          Object.keys(images).map((id) => {
            return (
              <li className="meaningful__list-item">
                <img
                  key={id}
                  src={images[id].default}
                  alt=""
                  className="meaningful__list-img"
                />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
