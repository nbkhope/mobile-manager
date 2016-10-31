import _ from 'lodash';
import React, { Component } from 'react';
import Communications from 'react-native-communications';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Confirm } from './common';
import { employeeEdit, employeeUpdate } from '../actions';
import EmployeeForm from './EmployeeForm';

class EmployeeEdit extends Component {
  // Initial component state
  state = {
    showModal: false
  };

  componentWillMount() {
    // the employee is injected when an employee list item is clicked
    _.each(this.props.employee, (value, prop) => {
      // call EMPLOYEE STATE UPDATE for each property
      // note that it might be better to create an action creator that
      // will update the whole employee instead of going through each
      // property every time
      this.props.employeeUpdate({ prop, value });
    });
  }

  onSavePress() {
    const { name, phone, shift } = this.props;
    this.props.employeeEdit({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextPress() {
    const { phone, shift } = this.props;
    Communications.text(phone, `Your upcoming shift is on ${shift}.`);
  }

  toggleModal() {
    const showModal = !this.state.showModal;
    this.setState({ showModal });
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
        <CardSection>
          <Button onPress={this.onTextPress.bind(this)}>
            Text Schedule
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.toggleModal()}>
            Remove
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
          onAccept={() => null}
          onDecline={() => this.toggleModal()}
        >
          Are you sure you want to perform this action?
        </Confirm>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeEdit, employeeUpdate })(EmployeeEdit);
