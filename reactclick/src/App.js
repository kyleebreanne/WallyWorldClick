import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    FriendCard,
    score: 0,
    highscore: 0
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({highscore: this.state.score}, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.friends.forEach(card => {
      FriendCard.count = 0;
    });
    alert(`Game Over :( \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }

  clickCount = id => {
    this.state.FriendCard.find((o, i) => {
      if (o.id === id) {
        if(FriendCard[i].count === 0){
          FriendCard[i].count = FriendCard[i].count + 1;
          this.setState({score : this.state.score + 1}, function(){
            console.log(this.state.score);
          });
          this.state.Friend.sort(() => Math.random() - 0.5)
          return true; 
        } else {
          this.gameOver();
        }
      }
    });
  }
  // Map over this.state.Friend and render a  component for each  object
  render() {
    return (
      <Wrapper>
        
        <Title score={this.state.score} highscore={this.state.highscore}>Walmart Friends Clicky Game</Title>
        {this.state.FriendCard.map(FriendCard => (
          <FriendCard
          clickCount={this.clickCount}
          id={FriendCard.id}
          key={FriendCard.id}
          name={FriendCard.name}
          image={FriendCard.image}
          hobbies={FriendCard.hobbies}
          
        />
        ))}
      </Wrapper>
    );
  }
}

export default App;
