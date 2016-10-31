import _ from 'lodash';
import React, { Component } from 'react';
import { ListView, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentWillReceiveProps(nextProps) {
    console.log("nextProps", nextProps);
    this.createDataSource(nextProps);
  }

  createDataSource({ employees }) {
    const dataSource = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = dataSource.cloneWithRows(employees);
  }

  renderRow(employee) {
    return (
      <Text>{employee.name}</Text>
    );
  }

  render() {
    return (
      <View>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  // (the state itself is an object with all employees)

  // Convert object of employees to array of employees with uid inside
  // each individual employee object
  const employees = _.map(state.employees, (employee, uid) => {
    return { ...employee, uid };
  });

  return { employees };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
