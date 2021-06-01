import React, { useState } from "react";

//IF WE WANT TO USE FUNCTION COMPONENTS WITH HOOK

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("");

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();

    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label>Video Search</label>
          <input type="text" value={term} onChange={onInputChange}></input>
        </div>
      </form>
    </div>
  );
};
export default SearchBar;

// Using Class Components

// class SearchBar extends React.Component {
//   state = { term: "" };

//   onInputChange = (event) => {
//     this.setState({ term: event.target.value });
//   };

//   onFormSubmit = (event) => {
//     event.preventDefault();

//     // call callback from parent component
//     this.props.onFormSubmit(this.state.term);
//   };

//   render() {
//     return (
//       <div className="search-bar ui segment">
//         <form onSubmit={this.onFormSubmit} className="ui form">
//           <div className="field">
//             <label>Video Search</label>
//             <input
//               type="text"
//               value={this.state.term}
//               onChange={this.onInputChange}
//             ></input>
//           </div>
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
