import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
  }

  render() {
    return (
      <View>
        <Text>Somebody</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // the state itself is an object with all employees
  return state;
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
