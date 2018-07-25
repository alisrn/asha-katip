import React from 'react';


import { getButtonList, isNewRecord, actionBarClick } from "../actions";
import List from '../components/list'
import CriteriaPanel from '../components/criteriaPanel'


let id = 0;
function createData(ProblemDate,
  Customer,
  Project,
  PartNumber,
  ResponsibleDepartment) {
  id += 1;
  return {
    id,
    ProblemDate,
    Customer,
    Project,
    PartNumber,
    ResponsibleDepartment
  };
}

/* const data = [
  createData("01-01-2018", "Hyundai", "IA", "12345-ABC", "PLANT-1"),
  createData("01-02-2018", "Ford", "GB", "12123-ABC", "PLANT-2"),
  createData("01-03-2018", "Mobis", "FORD", "2231-ABC", "STA"),
  createData("01-04-2018", "Toyota", "MOBIS", "33345-ABC", "METHOD"),
  createData("01-05-2018", "Hyundai", "IA", "4412345-ABC", "MAINTENANCE"),
  createData("01-06-2018", "Hyundai", "IA", "51512345-ABC", "PLANT-1")
]; */


class QualityIssueList extends React.Component {
  constructor(props) {
    super(props)
    this.store = this.props.store;
    this.buttonList = [{ name: "Get Info", icon: "Collections", disabled: false },
    { name: "Open", icon: "OpenInBrowser", disabled: true },
    { name: "Delete", icon: "Delete", disabled: false },
    { name: "New", icon: "OpenInNew", disabled: false }];
    this.state = {
      data:[],
    }
  }

  componentWillMount = () => {
    this.store.dispatch(getButtonList(this.buttonList));
    this.store.dispatch(isNewRecord(false))
  }

  componentWillUpdate = (nextProps) => {
    if (this.actionClicked !== nextProps.store.getState().actionClicked) {
      switch (nextProps.store.getState().actionClicked) {
        case 'Get Info':
          this.onGetInfoClick()
          break;

        case 'Save':
          this.onSaveClick()
          break;

        default:
          break;
      };
      this.actionClicked = nextProps.store.getState().actionClicked;
      this.store.dispatch(actionBarClick(""))
    }
  }

  onGetInfoClick = () => {
    fetch("http://asha-katip.azurewebsites.net/api/issue", {
      method: 'GET',
    })
      .then((response) => response.json()
      )
      .then(response => {
        if (response[0].ok) {
          this.setState({ data: response})
        }
      }
      )

  }


  render() {
    const { props } = this.props
    return (
      <div>
        <CriteriaPanel />
        <List data={this.state.data} buttonList={this.buttonList} {...props} store={this.store} />
      </div>
    );
  }
}

export default QualityIssueList