import React from 'react';

class SimpleSelect extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      selectedOption: props.defaultValue || ''
    };
  }

  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      selectedOption: value
    });
    this.props.onChange(value);
  }

  render() {
    const { title, options, placeholder, className, style } = this.props;
    const { selectedOption } = this.state;

    return (
      <dev className ="simple-select-group">
        <dev className="simple-select-title">{title}</dev>
          <select
            value={selectedOption}
            onChange={this.handleChange}
            placeholder={placeholder}
            className={className}
            style={style}
          >
            <option value="">{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
      </dev>
    );
  }
}

export default SimpleSelect;