import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  //declare state where categories of fishes will be
  state = {
    fishes: {},
    order: {}
  };
  //the ref in d code below is reference to piece of data in d database
  //then sync the state to the
  componentDidMount() {
    console.log("Mounted!!!");
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: "fishes"
    });
  }

  //create a secondary method of add fish and pass the function via props to the inventory which contains the add fish component
  //to update state in app, use the setstate API otherwise it wont work.
  addFish = fish => {
    //1. To update a state, First take a copy of the existing state. To copy the exiting state,
    const fishes = { ...this.state.fishes };
    //2. add our new fish(ie the fish that we create on addFish Form) to that fishes variable
    //Dtae.now() is d number of miliseconds since 1970 ie any new fish we create will have the date stamp added to the name to make it unique from the other created fish
    fishes[`fish${Date.now()}`] = fish;
    //3. Update the state by setting the new fishes object created directly above to state fishes
    this.setState({ fishes: fishes });
  };

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes }); //the new fish object should b same name used on import from sample-fishes
  };

  addToOrder = key => {
    //1. To update a state, take a copy of the existing state
    const order = { ...this.state.order };
    //2. either add to d order or update the number in our order
    order[key] = order[key] + 1 || 1;
    //3. update d state by setting the new order which is {(order:order)} but since they both order make it one order in the code below
    this.setState({ order });
    //pass this method to addtoorder button by going to the fish tag
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" age={26} cool={true} />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => (
              <Fish
                key={key}
                //to access d key above in react, pass it to something other than key cos this.key.props wont work
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              />
            ))}
            {/*object.keys() are used to loop through an array by specifying d keys of all the data in d array
 then map which means for each key we got to do something */}
          </ul>
        </div>
        <div>
          {/*copy everything from state into order via the code below*/}
          <Order fishes={this.state.fishes} order={this.state.order} />
        </div>
        <div>
          {/*pass the add fish method to inventory */}
          <Inventory
            addFish={this.addFish}
            loadSampleFishes={this.loadSampleFishes}
          />
        </div>
      </div>
    );
  }
}
export default App;
//to update state in app, use the setstate API otherwise it wont work.
//To update a state,
//First take a copy of the existing state
