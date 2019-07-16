import React from 'react';
import { connect } from 'react-redux';
import { addArticle } from '../actions';
import uuidv1 from 'uuid';

class ConnectedForm extends React.PureComponent {
  constructor() {
    super();

    this.state = {
      title: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.id]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id }); // Accessing Redux action through props
    this.setState({ title: '' }); // Reset input field after submit
  }

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title: </label>
          <input type="text" className="form-control" id="title" value={title} onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-success btn-lg">
          save
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addArticle: article => dispatch(addArticle(article))
});

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedForm);

export default Form;
