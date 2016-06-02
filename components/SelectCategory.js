import React from 'react';
import { browserHistory } from 'react-router';

class SelectCategory extends React.Component {

  constructor(props) {
    super(props);
    this.changeSelectedvalue = this.changeSelectedvalue.bind(this);
    this.data = { selectedCategory: this.props.state.get('app').get('selectedCategory') };
  }

  changeSelectedvalue(event) {
    event.stopPropagation();
    this.data.selectedCategory = event.target.value;
  }

  render() {
    return (

      <form className="CategoryForm" onSubmit={this.next} ref="selectedCategory">
        <label>Select category</label>
      </form>

    );
  }

}

SelectCategory.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  state: React.PropTypes.object.isRequired
};


export default SelectCategory;
