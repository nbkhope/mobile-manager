import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import { employeeEdit } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  onSavePress() {
    this.props.employeeEdit(null);
  }

  render() {
    return (
      <Card>
        <EmployeeForm />
        <CardSection>
          <Button onPress={this.onSavePress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default connect(null, { employeeEdit })(EmployeeEdit);
