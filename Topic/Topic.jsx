import NavBar from "./NavBar";
import Notes from "./notes";


const Home=()=> {
  return (
    <div style={{display:'flex', flexDirection:'row'}}>
      <NavBar />
      <Notes />
    </div>
  );
}
export default Home; 