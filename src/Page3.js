import { useLocation } from "react-router-dom";
import User from "./components/User";

export default function Page3() {
  const { user } = useLocation();
  return (
    <div>
      <User user={user} />
    </div>
  );
}
