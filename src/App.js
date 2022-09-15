import Header from "./components/Template/Header"
import Footer from "./components/Template/Footer"

import  Home from "./components/Home"
import  NewsPage from "./components/Pages/News"
import Users from "./components/Pages/Users"

function App() {
  return (
    <>
      <Header />

      <main>

        {/* <Home />
        <NewsPage /> */}

        <Users />

      </main>

      <Footer />
    </>
  );
}

export default App;
