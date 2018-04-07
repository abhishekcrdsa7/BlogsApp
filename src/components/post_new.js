import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { submitPost } from '../actions/index';
import '../index.css';

class PostNew extends Component {

renderField(field){
  return(
    <div className="form-group">
      <label>{field.label}</label>
      <input className="form-control"
      type="text"
        {...field.input}
      />
      <div style={{"color":"red"}}>
        {field.meta.touched ? field.meta.error : ''}
      </div>
    </div>
  );
}

redirect() {
  this.props.history.push('/posts');
}
onSubmit(values){
  this.props.submitPost(values,this.redirect.bind(this));
}

render() {
    const { handleSubmit } = this.props;
    return(
      <div>
        <form onSubmit= { handleSubmit(this.onSubmit.bind(this)) }>
            <Field name="title" label="Title" component={this.renderField}/>
            <Field name="categories" label="Categories" component={this.renderField}/>
            <Field name="content" label="Content" component={this.renderField}/>
              <button className="btn btn-primary">Submit</button>
              <Link className="btn btn-primary" to="/posts">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if(!values.title){
    errors.title = 'Please enter a title';
  }else if(!values.categories){
    errors.categories = 'Please enter a category';
  }else if (!values.content){
    errors.content = 'Please enter some content';
  }
  return errors;
}

export default reduxForm({
  form: 'PostNewForm',
  validate
})(
  connect(null,{ submitPost })
  (PostNew)
);
