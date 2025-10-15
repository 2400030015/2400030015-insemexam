import React, { useState, useEffect } from 'react';

const studentData = {
  name: 'Dundi',
  id: '2400030015',
  major: 'Computer Science',
  gpa: '9.85',
};

const BREAKPOINT = 768;

function App() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: windowWidth > BREAKPOINT ? 'row' : 'column',
    flexWrap: windowWidth > BREAKPOINT ? 'wrap' : 'nowrap',
    justifyContent: windowWidth > BREAKPOINT ? 'space-between' : 'flex-start',
    gap: '15px',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    padding: '25px 40px',
    width: windowWidth > BREAKPOINT ? '400px' : '90%',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    margin: '20px auto',
  };

  const itemStyle = {
    backgroundColor: '#f1f3f8',
    borderRadius: '8px',
    padding: '10px 15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: windowWidth > BREAKPOINT ? '1 1 45%' : '1 1 100%',
    boxSizing: 'border-box',
  };

  const labelStyle = {
    fontWeight: 600,
    color: '#555',
    minWidth: '70px',
    textAlign: 'left',
  };

  const valueStyle = {
    fontWeight: 500,
    color: '#0078ff',
    textAlign: 'right',
  };

  return (
    <div style={cardStyle}>
      <h2 style={{ color: '#333', marginBottom: '20px' }}>Student Profile</h2>
      <div style={containerStyle}>
        <div style={itemStyle}>
          <span style={labelStyle}>Name:</span>
          <span style={valueStyle}>{studentData.name}</span>
        </div>
        <div style={itemStyle}>
          <span style={labelStyle}>ID:</span>
          <span style={valueStyle}>{studentData.id}</span>
        </div>
        <div style={itemStyle}>
          <span style={labelStyle}>Major:</span>
          <span style={valueStyle}>{studentData.major}</span>
        </div>
        <div style={itemStyle}>
          <span style={labelStyle}>GPA:</span>
          <span style={valueStyle}>{studentData.gpa}</span>
        </div>
      </div>
    </div>
  );
}

export default App;
