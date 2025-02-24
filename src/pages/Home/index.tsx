import Socials from "../../components/organisms/Socials";
import FlexColumnContainer from "../../components/shared/FlexColumnContainer";

const Home = () => {
  return (
    <FlexColumnContainer style={{ textAlign: "center", color: "#ff4c24", backgroundColor: "#121212"}}>
        <h1 className="poppins-semibold" style={{ fontSize: "3rem" }}>VIACHESLAV DEMCHENKO</h1>
        <Socials />
    </FlexColumnContainer>
  );
};

export default Home;
