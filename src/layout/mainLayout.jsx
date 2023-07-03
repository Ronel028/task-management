import Navigation from "@/components/Navigation";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navigation />
      <section style={{ paddingTop: "61px" }}>{children}</section>
    </main>
  );
};

export default MainLayout;
