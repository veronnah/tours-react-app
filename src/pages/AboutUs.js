import React from "react";
import "../pages/AboutUs.css";
import YoutubePlayer from "../components/ui/YoutubePlayer";

export class AboutUsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() {
    return (
      <div>
        <h1>About us</h1>
       
        <div className='about__us-box'>
          <img src={require("../assets/img/pic1.jpg")} alt="" />
          <p>
            We are simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <h2 className="time-badge"><span>{this.state.date.toLocaleTimeString()}</span></h2>
        <YoutubePlayer videoId={'4Z9mUjtFJYY'}/>
      </div>
    );
  }
}
