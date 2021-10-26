import "./App.css";
import DropMenu from "./component/Menu";


function App() {
  return (
    <ul class="drop-down-menu">
    <h3>Drop Down Menu!</h3>
    <li>
      <DropMenu name="Menu 1" href="#" ></DropMenu>
      <ul>
        <li>
          <DropMenu name="Menu 1-1" href="#" num="3"></DropMenu>
        </li>
        <li>
          <DropMenu name="Menu 1-2" href="#" num="2"></DropMenu>
        </li>
        <li>
          <DropMenu name="Menu 1-3" href="#" num="1"></DropMenu>
        </li>
        <DropMenu name="Menu 1-4" href="#" num="2"></DropMenu>
      </ul>
    </li>
    <li>
      <DropMenu name="Menu 2" href="#"></DropMenu>
      <ul>
        <li>
          <DropMenu name="menu 2-1" href="#" num="1"></DropMenu>
        </li>
        <DropMenu name="menu 2-2" href="#" num="3"></DropMenu>
      </ul>
    </li>
    <li>
      <DropMenu name="Menu 3" href="#"></DropMenu>
      <ul>
        <li>
          <DropMenu name="menu 3-1" href="#" num="2"></DropMenu>
        </li>
        <li>
          <DropMenu name="menu 3-2" href="#" num="1"></DropMenu>
        </li>
        <li>
          <DropMenu name="menu 3-3" href="#" num="5"></DropMenu>
        </li>
      </ul>
    </li>
    <li>
      <DropMenu name="Menu 4" href="#"></DropMenu>
      <ul>
        <li>
          <DropMenu name="menu 4-1" href="#" num="3"></DropMenu>
        </li>
      </ul>
    </li>
    <li>
      <DropMenu name="Menu 5" href="#"></DropMenu>
      <ul>
        <li>
          <DropMenu name="menu 5-1" href="#" num="6"></DropMenu>
        </li>
        <li>
          <DropMenu name="menu 5-2" href="#" num="2"></DropMenu>
        </li>
      </ul>
    </li>
    <li>
      <DropMenu name="Menu 6" href="#"></DropMenu>
      <ul>
        <li>
          <DropMenu name="menu 6-1" href="#" num="1"></DropMenu>
        </li>
        <li>
          <DropMenu name="menu 6-2" href="#" num="6"></DropMenu>
        </li>
        <li>
          <DropMenu name="menu 6-3" href="#" num="3"></DropMenu>
        </li>
      </ul>
    </li>
  </ul>
  );
}

export default App;
