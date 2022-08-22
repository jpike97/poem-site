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
        <h1>Test</h1>
        <Feed />
        <Footer />
      </div>
    </div>
  );
}
