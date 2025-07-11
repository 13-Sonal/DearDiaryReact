import { useLocation } from "react-router-dom";

const SummaryPage = () => {
  const location = useLocation();
  const fertileDays = location.state?.fertileDays;

  return (
    <div className="p-6 space-y-4 bg-pink-50 min-h-screen">
      <h2 className="text-2xl font-bold">Your Period Summary</h2>

      <section className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">1. Current Period Health</h3>
        <p>You're doing great! Drink plenty of water and rest well 💪</p>
      </section>

      <section className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">2. Foods to Intake</h3>
        <ul className="list-disc ml-6">
          <li>Dark chocolate 🍫</li>
          <li>Leafy greens 🥬</li>
          <li>Bananas 🍌</li>
          <li>Warm soups 🍜</li>
        </ul>
      </section>

      <section className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">3. Your Next Fertile Days</h3>
        <p>{fertileDays || "Calculating..."}</p>
      </section>

      <section className="bg-white p-4 shadow rounded">
        <h3 className="text-xl font-semibold">4. Chocolate Cravings?</h3>
        <ul className="list-disc ml-6">
          <li>
            <a
              href="https://www.amazon.in/s?k=dark+chocolate"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Buy Dark Chocolate 🍫
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default SummaryPage;
