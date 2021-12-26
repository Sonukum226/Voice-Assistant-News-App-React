import React, { useState, useEffect } from "react";
import alanBtn from "@alan-ai/alan-sdk-web"; //import alan

import wordsToNumbers from "words-to-numbers";

import NewsCards from "./components/NewsCards/NewsCards";

import useStyle from "./styles";

const alanKey =
  "744e67867fcedcf6cad640b385d656fa2e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [newsArticle, setNewsAtricle] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setNewsAtricle(articles);
          setActiveArticle(-1); //After referising reset to -1 for start with initially
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          //converting words to number
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];
          if (parsedNumber > 20) {
            alanBtn().playText("Please try that again.");
          } else {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          }
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
      <NewsCards articles={newsArticle} activeArticle={activeArticle} />
    </div>
  );
};

export default App;
