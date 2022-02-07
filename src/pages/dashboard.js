import Sidebar from "../components/sidebar/sidebar";
import Feed from "../components/feed";
import Footer from "../components/footer";

import { useEffect } from "react";

export default function Dashboard() {
  useEffect(() => {
    document.title = "MAIN PAGE";
  }, []);

  return (
    <div className="dashboard">
      <div className="content__wrapper">
        <Feed />
        <Sidebar />

        <Footer />
      </div>
    </div>
  );
}
