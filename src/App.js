import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web"; //import alan

import NewsCards from "./components/NewsCards/NewsCards";

const alanKey =
  "744e67867fcedcf6cad640b385d656fa2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticle, setNewsAtricle] = useState([]);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === "newHeadlines") {
          console.log(articles);
        }
      },
    });
  }, []);

  return (
    <div>
      <h1>Alan AI News Application</h1>
      <NewsCards articles={newsArticle} />
    </div>
  );
};

export default App;
