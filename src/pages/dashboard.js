export default function Dashboard() {
  useEffect(() => {
    document.title = "MAIN PAGE";
  }, []);

  return (
    <div className="dashboard">
      <Header />
      <div className="content__wrapper">
        <Feed />
        <Sidebar />
      </div>
    </div>
  );
}
