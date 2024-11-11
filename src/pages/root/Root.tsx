import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";


export default function RootLayout() {
  return (
    <>

      <main className="">
        <Navbar />
        <Outlet />
      </main>

    </>
  );
}
