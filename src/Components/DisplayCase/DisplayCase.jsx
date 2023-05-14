import { useRef, useState } from "react";
import "./DisplayCase.css";

export function DisplayCase({ onDisplay, modalRef }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const figRef = useRef(null);

  function onSlideChange(e) {
    let nextIndex = currentIndex;
    let value = e.target.dataset.value;

    if (value === "next") {
      nextIndex++;
      if (nextIndex >= onDisplay.length) nextIndex = 0;
      figRef.current.style.cssText = "animation: slideOutLeft 500ms";
    }
    if (value === "prev") {
      nextIndex--;
      if (nextIndex < 0) nextIndex = onDisplay.length - 1;
      figRef.current.style.cssText = "animation: slideOutRight 500ms";
    }
    if (value >= 0 && value < onDisplay.length) {
      nextIndex = value;
    }

    // update state to reflect the new category

    setTimeout(() => {
      setCurrentIndex(nextIndex);
      figRef.current.style.cssText = "animation: fadeIn 500ms";
    }, "200");
  }
  return (
    <dialog ref={modalRef} className="display-dialog">
      <div className="carousel">
        <button
          onClick={() => modalRef.current.close()}
          className="carousel-btn close">
          X
        </button>
        <button
          onClick={onSlideChange}
          className="carousel-btn prev"
          data-value="prev">
          &#8656;
        </button>
        <button
          onClick={onSlideChange}
          className="carousel-btn next"
          data-value="next">
          &#8658;
        </button>
        {onDisplay.length > 0 ? (
          <figure className="carousel-slide" ref={figRef}>
            <img
              src={onDisplay[currentIndex].value}
              alt=""
              className="slide-img "
            />
          </figure>
        ) : (
          ""
        )}
      </div>
    </dialog>
  );
}

/**
 *         {onDisplay.map((image, index) => {
          return (
            <figure key={index} className="carousel-slide">
              <img src={image.value} alt="" className="slide-img " />
            </figure>
          );
        })}
 */
