import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  LayoutDashboard, GraduationCap, Newspaper, Mail, LogOut, 
  Users, Plus, Edit2, Trash2, Eye, Search, Filter
} from 'lucide-react';

const API_URL = 'http://localhost:5000/api';

interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: string;
  token: string;
}

const AdminDashboard: React.FC = () => {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [activeTab, setActiveTab] = useState<'departments' | 'news' | 'enquiries'>('departments');
  const [data, setData] = useState<any[]>([]);
  const [stats, setStats] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('adminToken');
    const userStr = localStorage.getItem('adminUser');
    
    if (!token || !userStr) {
      navigate('/admin/login');
      return;
    }

    setUser(JSON.parse(userStr));
    fetchData();
  }, [activeTab, navigate]);

  const getAuthHeaders = () => {
    const token = localStorage.getItem('adminToken');
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    };
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      let endpoint = '';
      switch (activeTab) {
        case 'departments':
          endpoint = '/departments';
          break;
        case 'news':
          endpoint = '/news/all';
          break;
        case 'enquiries':
          endpoint = '/enquiries';
          const statsRes = await fetch(`${API_URL}/enquiries/stats`, {
            headers: getAuthHeaders()
          });
          const statsData = await statsRes.json();
          if (statsData.success) setStats(statsData.data);
          break;
      }

      const response = await fetch(`${API_URL}${endpoint}`, {
        headers: getAuthHeaders()
      });
      const result = await response.json();
      
      if (result.success) {
        setData(result.data);
      }
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminUser');
    navigate('/admin/login');
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    try {
      const endpoint = activeTab === 'departments' ? 
        `/departments/${id}` : 
        activeTab === 'news' ?
        `/news/${id}` :
        `/enquiries/${id}`;

      const response = await fetch(`${API_URL}${endpoint}`, {
        method: 'DELETE',
        headers: getAuthHeaders()
      });

      const result = await response.json();
      if (result.success) {
        fetchData();
      }
    } catch (error) {
      console.error('Delete error:', error);
    }
  };

  const handleStatusChange = async (id: string, status: string) => {
    try {
      const response = await fetch(`${API_URL}/enquiries/${id}/status`, {
        method: 'PUT',
        headers: getAuthHeaders(),
        body: JSON.stringify({ status })
      });

      const result = await response.json();
      if (result.success) {
        fetchData();
      }
    } catch (error) {
      console.error('Status update error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#004a99] rounded-xl flex items-center justify-center">
              <LayoutDashboard size={20} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-black text-slate-900">ESCET Admin</h1>
              <p className="text-xs text-slate-500">Content Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-bold text-slate-900">{user?.name}</p>
              <p className="text-xs text-slate-500">{user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 text-white rounded-xl font-bold text-xs hover:bg-red-700 flex items-center gap-2"
            >
              <LogOut size={14} />
              Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 min-h-screen p-6">
          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab('departments')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'departments' 
                  ? 'bg-[#004a99] text-white' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <GraduationCap size={18} />
              Departments
            </button>
            <button
              onClick={() => setActiveTab('news')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'news' 
                  ? 'bg-[#004a99] text-white' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Newspaper size={18} />
              News & Events
            </button>
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold text-sm transition-all ${
                activeTab === 'enquiries' 
                  ? 'bg-[#004a99] text-white' 
                  : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Mail size={18} />
              Enquiries
              {stats && stats.pending > 0 && (
                <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {stats.pending}
                </span>
              )}
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">
          {/* Stats Cards for Enquiries */}
          {activeTab === 'enquiries' && stats && (
            <div className="grid grid-cols-4 gap-6 mb-8">
              {[
                { label: 'Total', value: stats.total, color: 'bg-blue-500' },
                { label: 'Pending', value: stats.pending, color: 'bg-yellow-500' },
                { label: 'Contacted', value: stats.contacted, color: 'bg-orange-500' },
                { label: 'Converted', value: stats.converted, color: 'bg-green-500' }
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                  <div className={`w-10 h-10 ${stat.color} rounded-xl flex items-center justify-center text-white mb-3`}>
                    <Mail size={20} />
                  </div>
                  <p className="text-3xl font-black text-slate-900">{stat.value}</p>
                  <p className="text-xs font-bold text-slate-500 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-black text-slate-900">
              {activeTab === 'departments' ? 'Departments' : 
               activeTab === 'news' ? 'News & Events' : 'Admission Enquiries'}
            </h2>
            {activeTab !== 'enquiries' && (
              <button
                onClick={() => setShowModal(true)}
                className="px-6 py-3 bg-[#004a99] text-white rounded-xl font-bold text-sm flex items-center gap-2 hover:bg-blue-700"
              >
                <Plus size={18} />
                Add New
              </button>
            )}
          </div>

          {/* Data Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            {loading ? (
              <div className="p-12 text-center">
                <div className="animate-spin w-8 h-8 border-4 border-[#004a99] border-t-transparent rounded-full mx-auto"></div>
                <p className="mt-4 text-slate-500">Loading...</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-slate-50 border-b border-slate-200">
                    <tr>
                      {activeTab === 'departments' && (
                        <>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Department</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">HOD</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Seats</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Status</th>
                          <th className="px-6 py-4 text-right text-xs font-black text-slate-700 uppercase">Actions</th>
                        </>
                      )}
                      {activeTab === 'news' && (
                        <>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Title</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Category</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Date</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Status</th>
                          <th className="px-6 py-4 text-right text-xs font-black text-slate-700 uppercase">Actions</th>
                        </>
                      )}
                      {activeTab === 'enquiries' && (
                        <>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Name</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Email</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Phone</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Department</th>
                          <th className="px-6 py-4 text-left text-xs font-black text-slate-700 uppercase">Status</th>
                          <th className="px-6 py-4 text-right text-xs font-black text-slate-700 uppercase">Actions</th>
                        </>
                      )}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {data.map((item: any) => (
                      <tr key={item._id} className="hover:bg-slate-50 transition-colors">
                        {activeTab === 'departments' && (
                          <>
                            <td className="px-6 py-4">
                              <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-[#004a99] rounded-lg flex items-center justify-center text-white font-black text-sm">
                                  {item.shortName}
                                </div>
                                <div>
                                  <p className="font-bold text-sm text-slate-900">{item.name}</p>
                                  <p className="text-xs text-slate-500">{item.id}</p>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">{item.hod}</td>
                            <td className="px-6 py-4 text-sm font-bold text-slate-900">{item.seats}</td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                item.isActive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                              }`}>
                                {item.isActive ? 'Active' : 'Inactive'}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-end gap-2">
                                <button className="p-2 hover:bg-blue-100 rounded-lg text-blue-600">
                                  <Edit2 size={16} />
                                </button>
                                <button 
                                  onClick={() => handleDelete(item.id)}
                                  className="p-2 hover:bg-red-100 rounded-lg text-red-600"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </>
                        )}
                        {activeTab === 'news' && (
                          <>
                            <td className="px-6 py-4">
                              <p className="font-bold text-sm text-slate-900">{item.title}</p>
                              <p className="text-xs text-slate-500 mt-1 line-clamp-1">{item.description}</p>
                            </td>
                            <td className="px-6 py-4">
                              <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold">
                                {item.category}
                              </span>
                            </td>
                            <td className="px-6 py-4 text-sm text-slate-700">
                              {new Date(item.date).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4">
                              <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                                item.isPublished ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'
                              }`}>
                                {item.isPublished ? 'Published' : 'Draft'}
                              </span>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-end gap-2">
                                <button className="p-2 hover:bg-blue-100 rounded-lg text-blue-600">
                                  <Edit2 size={16} />
                                </button>
                                <button 
                                  onClick={() => handleDelete(item._id)}
                                  className="p-2 hover:bg-red-100 rounded-lg text-red-600"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </>
                        )}
                        {activeTab === 'enquiries' && (
                          <>
                            <td className="px-6 py-4 font-bold text-sm text-slate-900">{item.firstName}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{item.email}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{item.phone}</td>
                            <td className="px-6 py-4 text-sm text-slate-700">{item.department}</td>
                            <td className="px-6 py-4">
                              <select
                                value={item.status}
                                onChange={(e) => handleStatusChange(item._id, e.target.value)}
                                className="px-3 py-1 border border-slate-200 rounded-lg text-xs font-bold"
                              >
                                <option value="pending">Pending</option>
                                <option value="contacted">Contacted</option>
                                <option value="converted">Converted</option>
                                <option value="rejected">Rejected</option>
                              </select>
                            </td>
                            <td className="px-6 py-4">
                              <div className="flex items-center justify-end gap-2">
                                <button className="p-2 hover:bg-blue-100 rounded-lg text-blue-600">
                                  <Eye size={16} />
                                </button>
                                <button 
                                  onClick={() => handleDelete(item._id)}
                                  className="p-2 hover:bg-red-100 rounded-lg text-red-600"
                                >
                                  <Trash2 size={16} />
                                </button>
                              </div>
                            </td>
                          </>
                        )}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
