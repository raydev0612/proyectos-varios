import { useRef } from "react";
import useFetch from "../use-fetch";

export default function ScrollToTopAndBottom() {
  const { data, error, pending } = useFetch(
    "https://dummyjson.com/products?limit=100",
    {}
  );

  const bottomRef = useRef(null);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleScrollToBottom = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  if (error) {
    return <h1>Error accured ! Please try again</h1>;
  }

  if (pending) {
    return <h1>Loading ! Please wait</h1>;
  }

  return (
    <div>
      <h1>Scroll To Top And Button Feature</h1>
      <h3>This is a top section</h3>
      <button onClick={handleScrollToBottom}>Scroll To Bottom</button>
      <ul style={{ listStyle: "none" }}>
        {data && data.products && data.products.length
          ? data.products.map((item) => <li key={item.id}>{item.title}</li>)
          : null}
      </ul>
      <button onClick={handleScrollToTop}>Scrool To Top</button>
      <div ref={bottomRef}></div>
      <h3>This is a button of the page</h3>
    </div>
  );
}
