import "./App.css";
import BigMenu from "./component/BigMenu";

function App() {
  let title = "Drop Down Menu!";
  return (
    <ul class="drop-down-menu">
      <h3>{title}</h3>
      <li>
        <BigMenu name="Menu 1" href="#" num="4"></BigMenu>
      </li>
      <li>
        <BigMenu name="Menu 2" href="#" num="2"></BigMenu>
      </li>
      <li>
        <BigMenu name="Menu 3" href="#" num="5"></BigMenu>
      </li>
      <li>
        <BigMenu name="Menu 4" href="#" num="1"></BigMenu>
      </li>
      <li>
        <BigMenu name="Menu 5" href="#" num="3"></BigMenu>
      </li>
      <li>
        <BigMenu name="Menu 6" href="#" num="2"></BigMenu>
      </li>
    </ul>
  );
}

export default App;
