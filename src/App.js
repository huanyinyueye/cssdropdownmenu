import "./App.css";
import Menu from "./component/Menu";
import MenuItem from "./component/MenuItem";

function App() {
  return (
    <ul class="drop-down-menu">
      <h3>Drop Down Menu!</h3>
      <li>
        <Menu name="Menu 1" href="#" num="4"></Menu>
        <ul>
          <li>
            <Menu name="Menu 1-1" href="#"></Menu>
            <ul>
              <MenuItem name="menu 1-1-1"></MenuItem>
              <MenuItem name="menu 1-1-2"></MenuItem>
              <MenuItem name="menu 1-1-3"></MenuItem>
            </ul>
          </li>
          <li>
          <Menu name="Menu 1-2" href="#" num="4"></Menu>
            <ul>
              <MenuItem name="menu 1-2-1"></MenuItem>
              <MenuItem name="menu 1-2-2"></MenuItem>
            </ul>
          </li>
          <li>
          <Menu name="Menu 1-3" href="#" num="4"></Menu>
            <ul>
              <MenuItem name="menu 1-3-1"></MenuItem>
            </ul>
          </li>
          <Menu name="Menu 1-4" href="#" num="4"></Menu>
        </ul>
      </li>
      <li>
        <Menu name="Menu 2" href="#"></Menu>
        <ul>
          <li>
            <MenuItem name="menu 2-1"></MenuItem>
            <ul>
              <MenuItem name="menu 2-1-1"></MenuItem>
            </ul>
          </li>
          <MenuItem name="menu 2-2"></MenuItem>
        </ul>
      </li>
      <li>
        <Menu name="Menu 3" href="#"></Menu>
        <ul>
          <li>
            <MenuItem name="menu 3-1"></MenuItem>
            <ul>
              <MenuItem name="menu 3-1-1"></MenuItem>
              <MenuItem name="menu 3-1-2"></MenuItem>
            </ul>
          </li>
          <li>
            <MenuItem name="menu 3-2"></MenuItem>
          </li>
          <li>
            <MenuItem name="menu 3-3"></MenuItem>
            <ul>
              <MenuItem name="menu 3-3-1"></MenuItem>
              <MenuItem name="menu 3-3-2"></MenuItem>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Menu name="Menu 4" href="#"></Menu>
        <ul>
          <li>
            <MenuItem name="menu 4-1"></MenuItem>
          </li>
        </ul>
      </li>
      <li>
        <Menu name="Menu 5" href="#"></Menu>
        <ul>
          <li>
            <MenuItem name="menu 5-1"></MenuItem>
          </li>
          <li>
            <MenuItem name="menu 5-2"></MenuItem>
            <ul>
              <MenuItem name="menu 5-2-1"></MenuItem>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <Menu name="Menu 6" href="#"></Menu>
        <ul>
          <li>
            <MenuItem name="menu 6-1"></MenuItem>
            <ul>
              <MenuItem name="menu 6-1-1"></MenuItem>
            </ul>
          </li>
          <li>
            <MenuItem name="menu 6-2"></MenuItem>
          </li>
          <li>
            <MenuItem name="menu 6-3"></MenuItem>
            <ul>
              <MenuItem name="menu 6-3-1"></MenuItem>
              <MenuItem name="menu 6-3-2"></MenuItem>
              <MenuItem name="menu 6-3-3"></MenuItem>
            </ul>
          </li>
        </ul>
      </li>
    </ul>
  );
}

export default App;
