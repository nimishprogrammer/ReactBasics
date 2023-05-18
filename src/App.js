import "./styles.css";

function Header() {
  return (
    <header>
      {" "}
      <h1> Nimish's React Basic Tutorials</h1>{" "}
    </header>
  );
}
function Footer(props) {
  return (
    <footer>
      <h3> Copywright all right reserved {props.year}. </h3>{" "}
    </footer>
  );
}

function Main() {
  return (
    <main>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </main>
  );
}

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer year={2023} />
    </div>
  );
}
