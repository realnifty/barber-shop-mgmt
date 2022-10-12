import { Outlet } from "react-router-dom";
import videoBg from "../../assets/videos/bs-intro.mp4";

function Home() {
  return (
    <div>
        <video src={videoBg} autoPlay loop muted></video>
        <h1>Home</h1>
        <a href="/signup">signup</a>
        <a href="/login">login</a>
      <Outlet />
    </div>
  );
}

export default Home;
