import React, { Component } from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import { Router, Route, Link } from 'react-router'
import { connect } from 'react-redux';
import axios from 'axios';

const getPhysicians = '/api/patient/getallphy';
const getPatients = '/api/physician/patients';
   
//BETTER DOCTOR ALL DOC REQUIREMENTS: At least one of the request parameters 'query', 'location', 'name', 'first_name', 'last_name' needs to be provided",

const renderInput = field => 
  <div>
    <input {...field.input} type={field.type} onChange={field.onChange} value={field.value}/>
    {field.meta.touched &&
     field.meta.error &&
     <span className="error">{field.meta.error}</span>}
  </div>


class AllUsers extends Component {
  constructor(props){
    super(props);
    this.state = {
      docs: [],   
      doc_name: null,
      doc_specialty: null,
      doc_query: null,
      doc_gender: null,
      doc_sort: null,
      doc_limit: null,
      doc_state:null,
      doc_city:null,
      lat: undefined,
      lon: undefined,
      
      
      pats: [],
      pat_first: null,
      pat_last: null,
      pat_gender: null,
      pat_sort: null,
      pat_limit: null,
      pat_location:null,      
    }
  }

  componentWillMount() {
    let that = this;

    // PATIENT VIEW OF ALL PHYSICIANS -- Initialize to show physicians close to them

    if(this.props.userType === 'patient'){
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          let query = `https://api.betterdoctor.com/2016-03-01/doctors?location=${lat}%2C${lon}%2C100&user_location=${lat}%2C${lon}&skip=0&limit=50&user_key=bdd1495417e49ba2f1aa40461ce8f17d`;
          axios.get(query)
            .then(result => {
              let docs = [];
              result.data.data.map(doctor => {
                docs.push({
                  title: doctor.profile.title,
                  first_name: doctor.profile.first_name, 
                  last_name: doctor.profile.last_name,  
                  image: doctor.profile.image_url,
                  specialty: doctor.specialties,
                  bd_uid: doctor.uid
                });
              })
              that.setState({docs: docs});
            })
            .catch(err => { console.log("ERROR FETCHING DOCTOR INFO", err) })
        })
      } 
    } else {
        this.setState({docs: []});
    }

    //PHYSICIAN VIEW OF ALL PATIENTS

    if(this.props.userType === 'physician'){
      

    }
  }


  searchSubmit(search) {
    let that = this;
    let qName = this.state.doc_name ? `name=${this.state.doc_name}`:'';
    let qQuery = this.state.doc_query ? `&query=${this.state.doc_query}`:'';
    let qSpecialty = this.state.doc_specialty ? `&specialty_uid=${this.state.doc_specialty}` : '' ;
    let qLocation = (this.state.doc_state && this.state.doc_city) ? `&location=${this.state.doc_state}-${this.state.doc_city}`: '';
    let qGender =  this.state.doc_gender ? `&gender=${this.state.doc_gender}`: '';
    let qSort = this.state.doc_sort ? `&sort=${this.state.doc_sort}`: '';
    let qLimit = this.state.doc_limit ? `&limit=${this.state.doc_limit}`: '&limit=50'; //Let users set the limit ??
    let authKey = `&user_key=4cccf671bab24d87e0f4e4cad7dc0e29`;
    let query = `https://api.betterdoctor.com/2016-03-01/doctors?` + qName + qQuery + qSpecialty + qLocation + qGender + qSort + qLimit + authKey;
    console.log("QUERY",query);
      axios.get(query)
        .then(result => {
          let docs = [];
          result.data.data.map(doctor => {
            docs.push({
              title: doctor.profile.title,
              first_name: doctor.profile.first_name, 
              last_name: doctor.profile.last_name,  
              image: doctor.profile.image_url,
              specialty: doctor.specialties,
              bd_uid: doctor.uid
          });
          })
          that.setState({docs: docs});
          console.log("STATE", that.state);
        })
        .catch(err => { console.log("ERROR FETCHING DOCTOR INFO", err) })

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      doc_query: nextProps.searchVals.docQuery,
      doc_name: nextProps.searchVals.docName,
      doc_specialty: nextProps.searchVals.docSpecialty,
      doc_gender: nextProps.searchVals.docGender,
      doc_sort: nextProps.searchVals.docSort,
      doc_state: nextProps.searchVals.docState ? nextProps.searchVals.docState.toLowerCase() : null,
      doc_city: nextProps.searchVals.docCity ? nextProps.searchVals.docCity.toLowerCase() : null
    })
  }

  
      

  render() {
    const { handleSubmit} = this.props;
    console.log("PROPPA",this.props);
      return (
        
          <div>

            <form onSubmit={handleSubmit(props => this.searchSubmit(props))} >
              <div>
                <label htmlFor="docQuery">Search Physicians</label>
                <Field name="docQuery" type="text" component={renderInput} />
              </div>
              <div>
                <label htmlFor="docName">Provider Name</label>
                <Field name="docName" type="text" component={renderInput} />
              </div>
              <div>
                <label htmlFor="docSpecialty">Provider Specialty / Practice Type</label>
                  <Field name="docSpecialty" component="select">
                    <option value="">Select Specialty</option>
                    <option value="Allergist">Allergist</option>
                    <option value="Anesthesiologist">Anesthesiologist</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Cardiothoracic Surgeon">Cardiothoracic Surgeon</option>
                    <option value="Colorectal Surgeon">Colorectal Surgeon</option>
                    <option value="Critical Care Doctor">Critical Care Doctor</option>
                    <option value="Dentistry">Dentistry</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Ear, Nose and Throat Doctor">Ear, Nose and Throat Doctor</option>
                    <option value="Emergency Medicine Doctor">Emergency Medicine Doctor</option>
                    <option value="Endocrinologist">Endocrinologist</option>
                    <option value="Eye Doctor">Eye Doctor</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                    <option value="General Surgeon">General Surgeon</option>
                    <option value="Geneticist">Geneticist</option>
                    <option value="Geriatric Medicine Doctor">Geriatric Medicine Doctor</option>
                    <option value="Hospice Care and Palliative">Hospice Care and Palliative</option>
                    <option value="Infectious Disease Doctor">Infectious Disease Doctor</option>
                    <option value="Nephrologist">Nephrologist</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Neuromusculoskeletal Medicine">Neuromusculoskeletal Medicine</option>
                    <option value="Neurosurgeon">Neurosurgeon</option>
                    <option value="Nuclear Medicine Doctor">Nuclear Medicine Doctor</option>
                    <option value="Nurse Practicioner">Nurse Practicioner</option>
                    <option value="OBGYN">OBGYN</option>
                    <option value="Oncologist">Oncologist</option>
                    <option value="Opthalmologist">Opthalmologist</option>
                    <option value="Optometrist">Optometrist</option>
                    <option value="Oral Surgeon">Oral Surgeon</option>
                    <option value="Orthopedic Surgeon">Orthopedic Surgeon</option>
                    <option value="Pain Management Doctor">Pain Management Doctor</option>
                    <option value="Pathologist">Pathologist</option>
                    <option value="Pediatric Surgeon">Pediatric Surgeon</option>
                    <option value="Pediatrics">Pediatrics</option>
                    <option value="Physiatrist">Physiatrist</option>
                    <option value="Physical Therapist">Physical Therapist</option>
                    <option value="Plastic Surgeon">Plastic Surgeon</option>
                    <option value="Podiatrist">Podiatrist</option>
                    <option value="Preventetive Medicine Doctor">Preventetive Medicine Doctor</option>
                    <option value="Prmary Care Doctor">Prmary Care Doctor</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="Psychologist">Psychologist</option>
                    <option value="Psychologist">Psychologist</option>
                    <option value="Pulmonologist">Pulmonologist</option>
                    <option value="Radiologist">Radiologist</option>
                    <option value="Sleep Medicine Doctor">Sleep Medicine Doctor</option>
                    <option value="Urologist">Urologist</option>
                    <option value="Vascular Surgeon">Vascular Surgeon</option>
                </Field>
              </div>
              <div>
                <label htmlFor="docGender">Provider Gender</label>
                <Field name="docGender" component="select">
                    <option value="">Gender</option>
                    <option value="female">Female</option>
                    <option value="male">Male</option>
                </Field>
              </div>
              <div>
                <label htmlFor="docSort">Sort By</label>
                  <Field name="docSort" component="select">
                    <option value ="" disabled>Sort</option>
                    <option value="full-name-asc">Name</option>
                    <option value="best-match-asc">best-match-asc</option>
                    <option value="best-match-desc">best-match-desc</option>
                    <option value="distance-asc">distance-asc</option>
                    <option value="distance-desc">distance-desc</option>
                    <option value="first-name-asc">first-name-asc</option>
                    <option value="first-name-desc">first-name-desc</option>
                    <option value="full-name-asc">full-name-asc</option>
                    <option value="full-name-desc">full-name-desc</option>
                    <option value="last-name-asc">last-name-asc</option>
                    <option value="last-name-desc">last-name-desc</option>
                    <option value="rating-asc">rating-asc</option>
                    <option value="rating-desc">rating-desc</option>
                  </Field>
              </div>
              <div>
                <label htmlFor="docState">State</label>
                <Field name="docState" component="select">
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
							  </Field>
              </div>
              <div>
                <label htmlFor="docCity">Philadelphia</label>
                <Field name="docCity" component={renderInput} type="text"/>
              </div>
                <button type="submit">Submit</button>
            </form>

                    
          <ul>
          {this.state.docs.map((doc,index) => {
            return ( 
              <li key={index}><Link to={"/patient/physicians/"+doc.bd_uid}>
              <img src={doc.image} />
              {doc.title} {doc.first_name} {doc.last_name}
              <br/>
              {doc.specialty[0].actor}
              </Link></li>
            )
          })}
          </ul>

        </div>
      );
    }
};

AllUsers = reduxForm({
  form: 'getAllUsers' // a unique name for this form
})(AllUsers);

const selector = formValueSelector('getAllUsers');

const mapStateToProps = (state) => {
  return {
    userType: state.authentication.userType,
    searchVals: selector(state, 'docQuery', 'docName', 'docSpecialty', 'docGender', 'docSort', 'docState','docCity')
  }
}

export default connect(mapStateToProps)(AllUsers);