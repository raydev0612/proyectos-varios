/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useState } from "react";
import "./scroll.css";

export default function ScrollIndicator({ url }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [scrollPercentage, setScrollPercentage] = useState(0);

  async function fetchData(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(getUrl);
      const data = await response.json();

      console.log(data);

      if (data && data.products && data.products.length > 0) {
        setData(data.products);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  }

  const handleScrollPercentage = () => {
    console.log(
      document.body.scrollTop,
      document.documentElement.scrollTop,
      document.documentElement.scrollHeight,
      document.documentElement.clientHeight
    );

    const howMuchScrolled =
      document.body.scrollTop || document.documentElement.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    setScrollPercentage((howMuchScrolled / height) * 100);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  useEffect(() => {
    window.addEventListener("scroll", handleScrollPercentage);

    return () => {
      window.removeEventListener("scroll", () => {
        handleScrollPercentage;
      });
    };
  }, []);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  if (errorMessage) {
    return <div>Error ! {errorMessage}</div>;
  }

  return (
    <div>
      <div className="top_container">
        <h1>Custom Scroll Indicator</h1>
        <div className="scroll_progress_tracking_container">
          <div
            className="current_progress_bar"
            style={{ width: `${scrollPercentage}%` }}
          ></div>
        </div>
      </div>

      <div className="data_container">
        {data && data.length > 0
          ? data.map((dataItem) => <p key={dataItem.id}>{dataItem.title}</p>)
          : null}
      </div>
    </div>
  );
}
