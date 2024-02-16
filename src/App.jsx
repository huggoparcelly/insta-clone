import { Route, Routes } from "react-router-dom"
import AuthPage from "./pages/AuthPage/AuthPage"
import HomePage from "./pages/HomePage/HomePage"
import PageLayout from "./Layout/PageLayout/PageLayout"
import ProfilePage from "./pages/ProfilePage/ProfilePage"

function App() {

  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/:userName" element={<ProfilePage />} />
      </Routes>
    </PageLayout>
  )
}

export default App
