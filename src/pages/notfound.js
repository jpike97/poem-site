import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => {
    document.title = "Not Found";
  }, []);

  return (
    <div class="not-found">
      <p>Not Found</p>
    </div>
  );
}
