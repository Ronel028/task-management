import Navigation from "@/components/Navigation";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Navigation />
      <section style={{ padding: "71px 0", backgroundColor: "#F5F5F5" }}>
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
