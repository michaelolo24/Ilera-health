import _ from 'lodash';
import axios from 'axios';
import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import CryptoJS from 'crypto-js';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem';
import Checkbox from 'material-ui/Checkbox';
import {Table, TableBody, TableFooter, TableHeader, TableHeaderColumn, TableRow, TableRowColumn}
  from 'material-ui/Table';
import { TextField } from 'redux-form-material-ui'
import { getUserInfo, didInit } from '../../../actions/user.js';

// Actions
import { emergencyContact } from '../../../../auth-shared/actions/actions.js';

const validate = values => {
  const errors = {}

	if (values.weight && !/^[1-9][\.\d]*(,\d+)?$/.test(values.weight)) {
    errors.weight = 'Please enter a valid weight'
  }

	if (values.height && !/^[1-9][\.\d]*(,\d+)?$/.test(values.height)) {
    errors.height = 'Please enter a valid height'
  }

  return errors
}

class HealthInfoFormInitialized extends Component {

  constructor(props){
    super(props);
		let maxDate = new Date();

		let minDate = new Date(1900, 1, 1);
		console.log(maxDate, minDate);
		this.state = {
			fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: true,
      multiSelectable: true,
      enableSelectAll: true,
      showCheckboxes: true,
      height: '300px',
			allergies: []
		};
  }

  static contextTypes = {
    router: React.PropTypes.object
  }

  handleInitialize(nextProps){
    const data = {
      "gender": nextProps.health.gender,
      "weight": nextProps.health.weight,
      "height": nextProps.health.height,
      "blood_type": nextProps.health.blood_type,
      "procedures": nextProps.health.procedures,
      "conditions": nextProps.health.conditions,
      "medications": nextProps.health.medications,
      "allergies": nextProps.health.allergies
    }
    this.props.initialize(data);
    nextProps.didInit();
  }

  componentWillReceiveProps(nextProps){
		if(!nextProps.init){
		  this.handleInitialize(nextProps);
	  }
  }

	submitMe(prop){
		//get encoded id from local storage
		let id = localStorage.getItem('uid');
		//code to decode user id stored in local storage
		let code  = CryptoJS.AES.decrypt(id.toString(), 'key'); //need to change key
		prop.uid = code.toString(CryptoJS.enc.Utf8);

		axios.put('/api/patient/health', prop)
			.then( found => {
					// this.context.router.push('/patient/form/emergencyContact/');
			})
			.catch( err => {
					console.log("ERROR ENTERING INFORMATION", err);
			})
	}


	renderTextField (props) {
		return(
			<TextField
				hintText={props.label}
				floatingLabelText={props.label}
				fullWidth={true}
				errorText={props.touched && props.error}
				{...props}
			/>
		)
	}

	renderMultiLineTextField (props) {
		return(
			<TextField
				hintText={props.label}
				floatingLabelText={props.label}
				fullWidth={true}
				multiLine={true}
				rowsMax={4}
				errorText={props.touched && props.error}
				{...props}
			/>
		)
	}

	renderSelectField ({ input, label, meta: { touched, error }, children }) {
		return (
			<SelectField
				floatingLabelText={label}
				errorText={touched && error}
				fullWidth={true}
				{...input}
				onChange={(event, index, value) => input.onChange(value)}
				children={children}/>
		)
	}

	render() {
		const { error, handleSubmit, pristine, reset, submitting } = this.props;

		return (
			<div  className="forms">
				<h2>Health Info</h2>
					<form onSubmit={handleSubmit(props => this.submitMe(props))}>
						<div>
							<Field name="gender" component={this.renderSelectField} label="Gender">
									<MenuItem value={'Male'} primaryText="Male"/>
									<MenuItem value={'Female'} primaryText="Female"/>
									<MenuItem value={'Transgender'} primaryText="Transgender"/>
									<MenuItem value={'Transsexual'} primaryText="Transsexual"/>
									<MenuItem value={'Trans Woman'} primaryText="Trans Female"/>
									<MenuItem value={'Trans Man'} primaryText="Trans Male"/>
									<MenuItem value={'Genderfluid'} primaryText="Genderfluid"/>
									<MenuItem value={'Agender'} primaryText="Agender"/>
							</Field>
						</div>
						<Field name="weight" type="text" component={this.renderTextField} label="Weight (lbs)"/>
						<Field name="height" type="text" component={this.renderTextField} label="Height (0.0)"/>
						<div>
							<Field name="blood_type" component={this.renderSelectField} label="Blood Type">
								<MenuItem value={'A+'} primaryText="A+"/>
								<MenuItem value={'A-'} primaryText="A-"/>
								<MenuItem value={'B+'} primaryText="B+"/>
								<MenuItem value={'B-'} primaryText="B-"/>
								<MenuItem value={'AB+'} primaryText="AB+"/>
								<MenuItem value={'AB-'} primaryText="AB-"/>
								<MenuItem value={'O+'} primaryText="O+"/>
								<MenuItem value={'O-'} primaryText="O-"/>
							</Field>
						</div>
						<Field name="procedures" type="text" component={this.renderMultiLineTextField} label="Past Procedures (include dates)"/>
						<Field name="conditions" type="text" component={this.renderMultiLineTextField} label="Conditions"/>
						<Field name="medications" type="text" component={this.renderMultiLineTextField} label="Medications (include dosage/frequency)"/>
						<Field name="allergies" type="text" component={this.renderMultiLineTextField} label="Allergies (Ex: allergy-reaction;)"/>

						{error && <strong>{error}</strong>}
						<RaisedButton
								label='Save'
								primary={true}
								type='submit'
								className='btn'
						/>
					</form>
			</div>
			);
	}
};

HealthInfoFormInitialized = reduxForm({
  form: 'HealthInfoFormInitialized',
  destroyOnUnmount: false,
  validate
})(HealthInfoFormInitialized);

export default HealthInfoFormInitialized;