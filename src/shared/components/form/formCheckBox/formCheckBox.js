import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './formCheckBox.css';

class FormCheckBox extends Component {

  render() {
    return (
      <div>
        <input
          type="checkbox"
          name={this.props.name}
          id={this.props.value}
          value={this.props.value}
          onChange={this.props.onChange}
          className={styles.input}
        />
        <label className={styles.label} htmlFor={this.props.name}>
          {this.props.value}
        </label>
      </div>
    );
  }
}

FormCheckBox.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func
  // checked: PropTypes.bool
};

FormCheckBox.defaultProps = {
  checked: false,
  onChange: null
};

export default FormCheckBox;