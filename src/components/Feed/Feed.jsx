import * as React from "react"
import Tweet from "../Tweet/Tweet"
import TweetBox from "../TweetBox/TweetBox"
import "./Feed.css"

export default function Feed({tweets, setTweets, userProfile }) {
  console.log("twitter feed", tweets)
  return (
    <div className="col feed">
      
        <TweetBox tweets={tweets} setTweets={setTweets} userProfile={userProfile}/>
        
        
       
      

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
