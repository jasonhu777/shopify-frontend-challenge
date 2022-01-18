import React, { useState } from "react";

export default function CardHeader({
  liked,
  handleLikeClick,
  date,
  title,
  url,
}) {
  const shareButtonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-share"
      viewBox="0 0 16 16"
    >
      <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5zm-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3z" />
    </svg>
  );
  const copiedIconCheck = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-file-earmark-check"
      viewBox="0 0 16 16"
    >
      <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z" />
      <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z" />
    </svg>
  );
  const likeButtonIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill={liked ? "white" : "red"}
      className="bi bi-heart"
      viewBox="0 0 16 16"
    >
      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
    </svg>
  );

  const [linkButtonContent, setLinkButtonContent] = useState(shareButtonIcon);
  const handleShareClick = () => {
    navigator.clipboard.writeText(url);
    setLinkButtonContent(copiedIconCheck)
    setTimeout(() => {
      setLinkButtonContent(shareButtonIcon);
    }, 5000);

  };

  return (
    <header className="d-flex card-header justify-content-between align-items-start pt-3 ps-4 pe-4">
      <div>
        <h6 className="d-inline-box card-title fs-5 font-monospace mb-1">
          {title}
        </h6>
        <time className="d-inline-box card-subtitle text-muted font-monospace">
          {date}
        </time>
      </div>
      <div>
        <button
          className="btn btn-outline-secondary rounded pb-2"
          onClick={handleShareClick}
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Copy Link"
        >
          {linkButtonContent}
        </button>
        <button
          className={
            liked
              ? "btn btn-danger rounded pb-2 ms-3"
              : "btn btn-outline-danger rounded shadow-none pb-2 ms-3"
          }
          onClick={handleLikeClick}
          style={
            liked
              ? {
                  color: "#fff",
                  backgroundColor: "red",
                  borderColor: "red",
                }
              : {}
          }
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title={liked ? "UnLike" : "Like"}
        >
          {likeButtonIcon}
        </button>
      </div>
    </header>
  );
}
