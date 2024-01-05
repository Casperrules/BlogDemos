import Header from "./components/header.component/header";
import Dashboard from "./components/main.component/main";
import Sidebar from "./components/sidebar.component/sidebar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <div className="content flex flex-1">
        <Sidebar />
        <Dashboard />
      </div>
    </main>
  );
}
