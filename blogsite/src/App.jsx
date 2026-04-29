import Header from "./components/Header";
import About from "./components/About";
import Articlelist from "./components/Articlelist";
import blog from "./data/blog";

function App() {
  return (
    <div>
      <Header name={blog.name} />
      <About image={blog.image} about ={blog.about} />
      <Articlelist posts={blog.posts} />
    </div>
  );
}

export default App;