import React from "react";
import AddFishForm from "./AddFishForm";

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        {/*now call the add fish fxn created on app component 
this.props.addfish here means the addFish method doesnt live on inventory, rather addFish was only passed in to inventory
if it lives on this inventory, it would be 'this.addFish'
        */}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample Fish</button>
      </div>
    );
  }
}

export default Inventory;
