import Feed from "./components/Feed";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import Login from "./components/Login";
import RightSidebar from "./components/RightSidebar";

const user = null;
function App() {
  return (
    <>
      {!user ? (
        <Login />
      ) : (
        <div className="App">
          <Header />
          <div>
            <LeftSidebar />
            <Feed />
            <RightSidebar />
          </div>
          <h1>Hello App</h1>
        </div>
      )}
    </>
  );
}

export default App;
