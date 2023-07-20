import React from 'react'
import Select from "react-select";

function SearchForm() {
  const options = [
    { value: "Autopilot & Robotics", label: "Autopilot & Robotics" },
    { value: "Charging", label: "Charging" },
    { value: "Construction & Facilities", label: "Construction & Facilities" },
    { value: "Design", label: "Design" },
    { value: "Energy - Solar & Storage", label: "Energy - Solar & Storage" },
    { value: "Engineering & Information Technology", label: "Engineering & Information Technology" },
    { value: "Finance", label: "Finance" },
    { value: "Legal & Government Affairs", label: "Legal & Government Affairs" },
    { value: "Manufacturing", label: "Manufacturing" },
    { value: "Operations & Business Support", label: "Operations & Business Support" },
    { value: "People", label: "People" },
    { value: "Sales & Customer Support", label: "Sales & Customer Support" },
    { value: "Supply Chain", label: "Supply Chain" },
    { value: "Vehicle Service", label: "Vehicle Service" },
    { value: "Vehicle Software", label: "Vehicle Software" },
  ];
  const options1 = [
    { value: "Full-Time", label: "Full-Time" },
    { value: "Part-Time", label: "Part-Time" },
    { value: "Intern/Apprentice", label: "Intern/Apprentice" },
    { value: "Seasonal", label: "Seasonal" },
  ];
  const region = [
    { value: "Africa", label: "Africa" },
    { value: "Asia Pacific", label: "Asia Pacific" },
    { value: "Europe", label: "Europe" },
    { value: "North America", label: "North America" },
  ];
  const location = [
    { value: "Australia", label: "Australia" },
    { value: "Austria", label: "Austria" },
    { value: "Belgium", label: "Belgium" },
    { value: "Canada", label: "Canada" },
    { value: "China Mainland", label: "China Mainland" },
    { value: "Cook Islands", label: "Cook Islands" },
    { value: "Croatia", label: "Croatia" },
    { value: "Czech Republic", label: "Czech Republic" },
    { value: "Denmark", label: "Denmark" },
    { value: "Finland", label: "Finland" },
    { value: "France", label: "France" },
    { value: "French Polynesia", label: "French Polynesia" },
    { value: "Germany", label: "Germany" },
    { value: "Greece", label: "Greece" },
    { value: "Hong Kong", label: "Hong Kong" },
    { value: "Hungary", label: "Hungary" },
    { value: "Iceland", label: "Iceland" },
    { value: "India", label: "India" },
    { value: "Ireland", label: "Ireland" },
    { value: "Israel", label: "Israel" },
    { value: "Italy", label: "Italy" },
    { value: "Japan", label: "Japan" },
    { value: "Jordan", label: "Jordan" },
    { value: "Korea, Republic of", label: "Korea, Republic of" },
    { value: "Luxembourg", label: "Luxembourg" },
    { value: "Macao", label: "Macao" },
    { value: "Malaysia", label: "Malaysia" },
    { value: "Malta", label: "Malta" },
    { value: "Mexico", label: "Mexico" },
    { value: "Netherlands", label: "Netherlands" },
    { value: "New Zealand", label: "New Zealand" },
    { value: "Norway", label: "Norway" },
    { value: "Philippines", label: "Philippines" },
    { value: "Poland", label: "Poland" },
    { value: "Portugal", label: "Portugal" },
    { value: "Puerto Rico", label: "Puerto Rico" },
    { value: "Romania", label: "Romania" },
    { value: "Singapore", label: "Singapore" },
    { value: "Slovenia", label: "Slovenia" },
    { value: "Solomon Islands", label: "Solomon Islands" },
    { value: "South Africa", label: "South Africa" },
    { value: "Spain", label: "Spain" },
    { value: "Sweden", label: "Sweden" },
    { value: "Switzerland", label: "Switzerland" },
    { value: "Taiwan", label: "Taiwan" },
    { value: "Thailand", label: "Thailand" },
    { value: "Turkey", label: "Turkey" },
    { value: "United Arab Emirates", label: "United Arab Emirates" },
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "United States of America", label: "United States of America" },
  ];

  //SELECT STYLES
  const style = {
    control: (base, state) => ({
      ...base,
      border: state.isFocused ? "none" : "1px solid var(--background)",
      boxShadow: "none",
      cursor: "pointer",
      '&:hover': {
        border: state.isFocused ? "none" : "1px solid var(--background)",
      },
    }),
    option: (styles) => ({
      ...styles,
      background: "var(--backgrond)",
      color: "var(--text)",
      fontSize: "1.4em"
    })
  }
  return (
    <form action="">
      <div className="row">
        <label htmlFor="category">Job Category</label>
        <Select
          name="rentalType"
          id="category"
          options={options}
          className="selectInput"
          styles={style}
          placeholder={"- SELECT -"}
        />
      </div>
      <div className="row">
        <label htmlFor="category">Job Type</label>
        <Select
          name="rentalType"
          id="category"
          options={options1}
          className="selectInput"
          styles={style}
          placeholder={"- SELECT -"}
        />
      </div>
      <div className="row">
        <label htmlFor="category">Region</label>
        <Select
          name="rentalType"
          id="category"
          options={region}
          className="selectInput"
          styles={style}
          placeholder={"- SELECT -"}
        />
      </div>
      <div className="row">
        <label htmlFor="category">Location</label>
        <Select
          name="rentalType"
          id="category"
          options={location}
          className="selectInput"
          styles={style}
          placeholder={"- SELECT -"}
        />
      </div>
      <div className="row">
        <label htmlFor="category">Location</label>
        <Select
          name="rentalType"
          id="category"
          options={[]}
          className="selectInput"
          styles={style}
          placeholder={"- SELECT -"}
        />
      </div>
    </form>
  )
}

export default SearchForm