import { Header } from "@/components/Header/Header";

export default function AccNames() {
  return (
    <>
      <Header />
      <main className="main">
        <h1>Accessible Names</h1>
        <div className="accNameContainer">
          <button className="accNameBtn">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
          <button className="accNameBtn" aria-label="Navigation Toggle">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </button>
        </div>
      </main>
    </>
  );
}
