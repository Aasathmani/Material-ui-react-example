import './App.css';
import { MuiAutoComplete } from './components/MuiAutoComplete';
import { MuiButton } from './components/MuiButtons';
import { MuiCheckBox } from './components/MuiCheckBox';
import { MuiRadioButton } from './components/MuiRadioButton';
import { MuiRating } from './components/MuiRating';
import { MuiResponsivess } from './components/MuiResponsiness';
import { MuiSelect } from './components/MuiSelect';
import { MuiSwitch } from './components/MuiSwitch';
import { MuiTextField } from './components/MuiTextField';

function App() {
  return (
    <div className="App">
      <MuiAutoComplete/>
      <MuiRating/>
      <MuiRadioButton/>
      <MuiSelect/>
      <MuiTextField/>
      <MuiResponsivess/>
      <MuiButton/>
      <MuiCheckBox/>
      <MuiSwitch/>
    </div>
  );
}

export default App;
