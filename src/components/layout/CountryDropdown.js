import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

class Dropdown extends Component {
  constructor(props) {
    super(props);
    this.state = { country: '', region: '' };
  }

  selectCountry(val) {
    this.setState({ country: val });
    console.log(val);
  }

  // selectRegion(val) {
  //   this.setState({ region: val });
  // }

  render() {
    const { country } = this.state;
    return (
      <div>
        <CountryDropdown
          id='my-country-field-id'
          value={country}
          onChange={(val) => this.selectCountry(val)}
        />
        {/* <RegionDropdown
          country={country}
          value={region}
          onChange={(val) => this.selectRegion(val)}
        /> */}
      </div>
    );
  }
}
export default Dropdown;
