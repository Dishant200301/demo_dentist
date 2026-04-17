import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, Loader2, ArrowRight } from 'lucide-react';
import { useWebAuth } from '../context/WebAuthContext';
import { API_BASE_URL, getPublicHeaders } from '@/modules/appointments/utils/apiConfig';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const { login } = useWebAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = (location.state as any)?.from?.pathname || '/dashboard';
  const { user } = useWebAuth();

  useEffect(() => {
    if (user) {
      navigate('/dashboard', { replace: true });
    }
  }, [user, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const resp = await fetch(`${API_BASE_URL}/web-auth/login`, {
        method: 'POST',
        headers: getPublicHeaders(),
        body: JSON.stringify({ email, password })
      });

      const data = await resp.json();

      if (data.success) {
        login(data.data.token, {
          id: data.data._id,
          name: data.data.name,
          email: data.data.email,
          phone: data.data.phone
        });
        navigate(from, { replace: true });
      } else {
        setError(data.message || 'Invalid email or password');
      }
    } catch (err) {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Login - Eyora Eye Care</title>
      </Helmet>
      
      <div className="min-h-screen bg-[#F8F9FA] flex items-center justify-center pt-28 md:pt-32 pb-20 px-4">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-[0_5px_40px_rgba(21,34,77,0.08)] p-6 md:p-8">
          
          <div className="text-center mb-8">
            <h2 className="text-[#15224D] text-2xl md:text-3xl font-bold mb-2">Welcome Back</h2>
            <p className="text-[#424C6F] text-sm md:text-base">Please enter your details to sign in.</p>
          </div>

          {error && (
            <div className="bg-red-50 text-red-500 text-sm p-3 rounded-lg text-center mb-6 border border-red-100">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#00ADEE] focus:ring-1 focus:ring-[#00ADEE] transition-all outline-none text-[#15224D]"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-14 pl-12 pr-4 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-[#00ADEE] focus:ring-1 focus:ring-[#00ADEE] transition-all outline-none text-[#15224D]"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full h-14 bg-[#00ADEE] text-white font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-[#15224D] transition-colors disabled:opacity-70 mt-2"
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : (
                <>Sign In <ArrowRight className="w-5 h-5" /></>
              )}
            </button>
          </form>

          <div className="mt-8 text-center text-[#424C6F]">
            Don't have an account?{' '}
            <Link to="/register" className="text-[#00ADEE] font-bold hover:underline">
              Create Account
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default LoginPage;
