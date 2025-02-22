import { Outlet } from "react-router";
import TopNav from "../components/TopNav";
import { Container } from "../components/Container";

const MainLayout = () => {
  return (
    <>
      <TopNav />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
export default MainLayout;
