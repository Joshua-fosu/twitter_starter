import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed({tweets, setTweets, userProfile, tweetText, setTweetText, setUserProfile }) {
  return (
    <div className="col feed">
      
        <TweetBox tweets={tweets} setTweets={setTweets} userProfile={userProfile} tweetText={tweetText} setTweetText={setTweetText} setUserProfile={setUserProfile} />
        
        
       
      

      <div className="see-new-tweets beet">
        <p>
          See <span>{13}</span> New Tweets
        </p>
      </div>

      <div className="twitter-feed">{
      
        tweets.map((tweet) => 
        <Tweet tweet={tweet}/>
        
        )}</div>
    </div>
  )
}
