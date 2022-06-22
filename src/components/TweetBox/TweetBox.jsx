import * as React from "react"
import TweetInput from "./TweetInput"
import "./TweetBox.css"

export default function TweetBox({tweets, setTweets, userProfile, tweetText, setTweetText, setUserProfile}) {
  function handleOnTweetTextChange(event) {
    setTweetText(event.target.value)
    
  }


  async function handleOnSubmit() {
    
      const newTweet= {
        name : userProfile.name,
        handle : userProfile.handle,
        text: tweetText,
        comments: 0,
        retweets: 0,
        likes: 0,
        id: tweets.length,
      }
      setTweets([...tweets, newTweet])

      setTweetText("")
    
    
    
  }


  return (
    <div className="tweet-box">
      <TweetInput value={tweetText} handleOnChange={handleOnTweetTextChange}/>

      <div className="tweet-box-footer">
        <TweetBoxIcons />
        <TweetCharacterCount tweetText={tweetText}/>
        <TweetSubmitButton handleOnSubmit={handleOnSubmit} tweetText={tweetText}/>
      </div>
    </div>
  )
}

export function TweetBoxIcons() {
  return (
    <div className="tweet-box-icons">
      <i className="fas fa-image"></i>
      <i className="icon-gif">GIF</i>
      <i className="far fa-chart-bar"></i>
      <i className="fas fa-map-marker-alt"></i>
    </div>
  )
}

export function TweetCharacterCount({tweetText}) {
  var charLeft = 140 - tweetText.length
  if (charLeft === 140) return (null)
  var flagClass = charLeft < 0 ? "tweet-length red" : "tweet-length"
  return <span className={flagClass}>{charLeft}</span>
}

export function TweetSubmitButton({handleOnSubmit, tweetText}) {
  
    return (
     
      <div className="tweet-submit">
        <i className="fas fa-plus-circle"></i>
        <button className="tweet-submit-button" onClick={handleOnSubmit} disabled={(!tweetText || tweetText.length >140) ? true:false}>Tweet</button>
      </div>
      
    ) 
  
  
}
