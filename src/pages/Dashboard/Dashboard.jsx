function Dashboard() {
  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/auth/login";
  }

  return (
    <>
      <h1>Halaman Dashboard</h1>
      <button
        onClick={handleLogout}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Logout
      </button>
    </>
  );
}

export default Dashboard;
