import React, { useContext } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../../context/Context";
import Card from "../card/Card";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    setRecent,
  } = useContext(Context);
  //card
  const handleCardClick = (prompt) => {
    setInput(prompt);
    onSent(prompt);
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <Card
                title="Suggest beautiful places to see on an  upcoming road trip"
                icon={assets.compass_icon}
                onClick={() =>
                  handleCardClick(
                    "Suggest beautiful places to see on an  upcoming road trip"
                  )
                }
              />

              <Card
                title="Please provide a list of Indian foods for breakfast , lunch, and dinner"
                icon={assets.bulb_icon}
                onClick={() =>
                  handleCardClick(
                    "Please provide a list of Indian foods for breakfast , lunch, and dinner"
                  )
                }
              />
              <Card
                title="Brainstorm team bonding activities for our work retreat"
                icon={assets.message_icon}
                onClick={() =>
                  handleCardClick(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
              />

              <Card
                title="Improve the readability of the following code"
                icon={assets.code_icon}
                onClick={() =>
                  handleCardClick(
                    "Improve the readability of the following code"
                  )
                }
              />
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info,including about people ,so
            double-check its respomses.Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
