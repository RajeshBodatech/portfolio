import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

function SplashScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 z-50">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mx-auto mb-6"></div>
        <h1 className="text-3xl font-bold text-white mb-2">Admin Dashboard</h1>
        <p className="text-lg text-white/80">Loading...</p>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  const [showSplash, setShowSplash] = useState(true);
  const [passcode, setPasscode] = useState('');
  const [entered, setEntered] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Hide splash after 1.5s
  useState(() => {
    const timer = setTimeout(() => setShowSplash(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  async function handlePasscodeSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const res = await fetch(`https://portfolio-qj8m.onrender.com/api/contact/admin?passcode=${encodeURIComponent(passcode)}`);
      const data = await res.json();
      if (res.ok) {
        setContacts(data);
        setEntered(true);
      } else {
        setError(data.error || 'Invalid passcode.');
      }
    } catch (err) {
      setError('Failed to fetch contacts.');
    }
    setLoading(false);
  }

  if (showSplash) return <SplashScreen />;

  if (!entered) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600">
        <form onSubmit={handlePasscodeSubmit} className="bg-white/90 rounded-2xl shadow-lg p-8 flex flex-col gap-4 min-w-[320px]">
          <h2 className="text-2xl font-bold text-center text-blue-800 mb-2">Admin Dashboard</h2>
          <input
            type="password"
            placeholder="Enter admin passcode"
            className="rounded-lg px-4 py-2 border border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={passcode}
            onChange={e => setPasscode(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-2 rounded-lg shadow hover:from-blue-700 hover:to-purple-700 transition-all"
            disabled={loading}
          >
            {loading ? 'Checking...' : 'Enter'}
          </button>
          {error && <div className="text-red-500 text-center font-semibold">{error}</div>}
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-purple-700 to-pink-600 p-8">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="max-w-4xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-10"
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl font-extrabold text-blue-800 mb-2 text-center tracking-tight"
        >
          Welcome, Admin Rajesh Boda
        </motion.h2>
        <div className="text-center text-lg text-gray-700 mb-8">Here are your latest contact submissions.</div>
        {contacts.length === 0 ? (
          <div className="text-center text-gray-600">No contacts found.</div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
            className="overflow-x-auto"
          >
            <table className="min-w-full border border-gray-300 rounded-2xl overflow-hidden shadow-lg">
              <thead>
                <tr className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 sticky top-0 z-10">
                  <th className="px-6 py-3 text-left text-lg font-bold text-blue-900">Name</th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-blue-900">Email</th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-blue-900">Message</th>
                  <th className="px-6 py-3 text-left text-lg font-bold text-blue-900">Date</th>
                </tr>
              </thead>
              <tbody>
                <AnimatePresence>
                  {contacts.map((c, idx) => (
                    <motion.tr
                      key={c._id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.5, delay: 0.1 + idx * 0.07, ease: 'easeOut' }}
                      className={
                        `border-t border-gray-200 ${idx % 2 === 0 ? 'bg-white/80' : 'bg-blue-50/70'} hover:bg-blue-100/80 transition-colors`
                      }
                    >
                      <td className="px-6 py-3 font-semibold text-blue-900 max-w-[160px] truncate" title={c.name}>{c.name}</td>
                      <td className="px-6 py-3 text-blue-700 max-w-[200px] truncate" title={c.email}>{c.email}</td>
                      <td className="px-6 py-3 text-gray-800 max-w-[320px] break-words whitespace-pre-line">{c.message}</td>
                      <td className="px-6 py-3 text-gray-500 whitespace-nowrap">{new Date(c.createdAt).toLocaleString()}</td>
                    </motion.tr>
                  ))}
                </AnimatePresence>
              </tbody>
            </table>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 
