import {
  NumberPicker,
  Combobox,
  DropdownList,
  Multiselect,
  DatePicker,
} from "react-widgets";

import "./App.css";
import "react-widgets/styles.css";

const App = () => {

  let colors = [
    { id: 0, name: 'Violet'},
    { id: 1, name: 'Indigo'},
    { id: 2, name: 'Blue' },
    { id: 3, name: 'Green' },
    { id: 4, name: 'Yellow' },
    { id: 5, name: 'Orange' },
    { id: 6, name: 'Red' },
  ];

  return (
    <form className="App">
      <p><strong>Number Picker</strong></p>
      <NumberPicker
        className="mb-3"
        defaultValue={9000}
      />
      <NumberPicker
        className="mb-3"
        defaultValue={1.5}
        format={{ style: "currency", currency: "INR" }}
      />
      <p><strong>Dropdowns</strong></p>
      <Combobox
        className="mb-3"
        dataKey="id"
        textField="name"
        // defaultValue={1}
        data={colors}
        placeholder="Search for a color"
      />
      <DropdownList
        className="mb-3"
        dataKey="id"
        textField="name"
        defaultValue={1}
        data={colors}
        placeholder="Search for a color"
      />
      <Multiselect
        className="mb-3"
        dataKey="id"
        textField="name"
        defaultValue={[1]}
        data={colors}
        placeholder="Search for a color"
      />
      <p><strong>Date Picker</strong></p>
      <DatePicker 
        className="mb-3"
        placeholder="m/dd/yy"
      />
      <DatePicker
        className="mb-3"
        defaultValue={new Date()} includeTime 
      />
    </form>
  );
}

export default App;
