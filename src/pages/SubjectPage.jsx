import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download, Upload, Trash2, FileText, Calendar, User } from 'lucide-react';
import { subjects } from '../data/dummyData';
import Button from '../components/ui/Button';
import Loading from '../components/ui/Loading';

const SubjectPage = () => {
  const { subjectId } = useParams();
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState('');
  const [subject, setSubject] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const role = localStorage.getItem('userRole');
    if (!role) {
      navigate('/login');
      return;
    }
    setUserRole(role);

    const foundSubject = subjects.find(s => s.id === parseInt(subjectId));
    if (!foundSubject) {
      navigate('/dashboard');
      return;
    }
    setSubject(foundSubject);
  }, [subjectId, navigate]);

  const handleDownload = (note) => {
    // Mock download functionality
    const link = document.createElement('a');
    link.href = '#';
    link.download = `${note.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setIsUploading(true);
    
    // Mock upload delay
    setTimeout(() => {
      const newNote = {
        id: Date.now(),
        title: file.name.replace('.pdf', ''),
        date: new Date().toISOString().split('T')[0],
        type: 'pdf',
        uploadedBy: 'You'
      };
      
      setSubject(prev => ({
        ...prev,
        notes: [newNote, ...prev.notes]
      }));
      setIsUploading(false);
    }, 2000);
  };

  const handleDelete = (noteId) => {
    if (window.confirm('Are you sure you want to delete this note?')) {
      setSubject(prev => ({
        ...prev,
        notes: prev.notes.filter(note => note.id !== noteId)
      }));
    }
  };

  const triggerFileUpload = () => {
    fileInputRef.current?.click();
  };

  if (!subject || !userRole) {
    return null;
  }

  return (
    <>
      <Loading isVisible={isUploading} message="Uploading PDF..." />
      <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Back Button and Subject Info */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <div className="flex items-center space-x-3">
                <div className={`w-10 h-10 ${subject.color} rounded-lg flex items-center justify-center`}>
                  <span className="text-xl">{subject.icon}</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold text-gray-900">{subject.name}</h1>
                  <p className="text-sm text-gray-500">{subject.description}</p>
                </div>
              </div>
            </div>

            {/* Upload Button for Teachers */}
            {userRole === 'teacher' && (
              <div className="flex items-center space-x-4">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleUpload}
                  className="hidden"
                  disabled={isUploading}
                />
                <Button
                  variant="primary"
                  size="sm"
                  disabled={isUploading}
                  onClick={triggerFileUpload}
                  className="flex items-center space-x-2"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <Upload className="h-4 w-4" />
                      <span>Upload PDF</span>
                    </>
                  )}
                </Button>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {userRole === 'student' ? 'Learning Materials' : 'Course Materials'}
              </h2>
              <p className="text-gray-600">
                {userRole === 'student' 
                  ? `Access all notes and materials for ${subject.name}`
                  : `Manage and upload materials for ${subject.name}`
                }
              </p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-primary-600">{subject.notes.length}</div>
              <div className="text-sm text-gray-500">Total Notes</div>
            </div>
          </div>
        </motion.div>

        {/* Notes List */}
        <div className="space-y-4">
          {subject.notes.map((note, index) => (
            <motion.div
              key={note.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{note.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-500 mt-1">
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{note.date}</span>
                      </div>
                      {note.uploadedBy && (
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{note.uploadedBy}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  {userRole === 'student' ? (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownload(note)}
                      className="flex items-center space-x-2"
                    >
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </Button>
                  ) : (
                    <>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDownload(note)}
                        className="flex items-center space-x-2"
                      >
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(note.id)}
                        className="flex items-center space-x-2 text-red-600 hover:text-red-700 hover:border-red-300"
                      >
                        <Trash2 className="h-4 w-4" />
                        <span>Delete</span>
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {subject.notes.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <div className="text-6xl mb-4">📄</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {userRole === 'student' ? 'No materials available' : 'No materials uploaded yet'}
            </h3>
            <p className="text-gray-600 mb-6">
              {userRole === 'student' 
                ? 'Check back later for new materials'
                : 'Upload your first PDF to get started'
              }
            </p>
            {userRole === 'teacher' && (
              <div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf"
                  onChange={handleUpload}
                  className="hidden"
                />
                <Button variant="primary" onClick={triggerFileUpload}>
                  <Upload className="h-4 w-4 mr-2" />
                  Upload First PDF
                </Button>
              </div>
            )}
          </motion.div>
        )}
      </main>
    </div>
    </>
  );
};

export default SubjectPage; 