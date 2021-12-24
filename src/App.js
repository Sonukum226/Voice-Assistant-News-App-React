import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web"; //import alan

import NewsCards from "./components/NewsCards/NewsCards";

import useStyle from "./styles";

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
          setNewsAtricle(articles);
        }
      },
    });
  }, []);

  const classes = useStyle();

  return (
    <div>
      <div className={classes.logoContainer}>
        <img
          src="https://voicebot.ai/wp-content/uploads/2019/10/alan.jpg"
          className={classes.alanLogo}
        />
      </div>
      <NewsCards articles={newsArticle} />
    </div>
  );
};

export default App;
