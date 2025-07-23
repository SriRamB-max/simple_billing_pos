import { BrowserRouter, Routes, Route } from "react-router-dom"
import { UserProvider } from "./components/shared/UserContext"
import Home from "./components/shared/Home"
import BillingPage from "./components/shared/BillingPage"
const App = () => {
  return (
    <div>
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/billing" element={<BillingPage />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </div>
  )
}

export default App