import React from 'react';


import { getButtonList, isNewRecord } from "../actions";
import List from '../components/list'

class QualityIssueList extends React.Component {
  constructor(props) {
    super(props)
    this.store = this.props.store;
    this.buttonList = [{ name: "Get Info", icon: "Collections", disabled: false },
    { name: "Open", icon: "OpenInBrowser", disabled: true },
    { name: "Delete", icon: "Delete", disabled: false },
    { name: "New", icon: "OpenInNew", disabled: false }];
  }

  componentWillMount = () => {
    this.store.dispatch(getButtonList(this.buttonList));
    this.store.dispatch(isNewRecord(false))
  }

  render() {
    const {props} = this.props
    return (
      <div>
        <List buttonList = {this.buttonList} {...props} store={this.store} />
      </div>
    );
  }
}

export default QualityIssueList