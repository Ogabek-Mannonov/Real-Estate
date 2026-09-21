import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, breadcrumb }) => {
  return (
    <section className="page-header" style={{
      backgroundColor: '#1a1f16',
      color: 'white',
      padding: '100px 20px',
      textAlign: 'center',
      borderRadius: '24px',
      margin: '20px',
      marginTop: '0'
    }}>
      <h1 style={{ fontSize: '4rem', marginBottom: '10px' }}>{title}</h1>
      <div style={{ color: '#aaa', fontSize: '1.1rem' }}>
        <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link> 
        <span style={{ margin: '0 10px', color: '#d1ff1a' }}>/</span> 
        {breadcrumb}
      </div>
    </section>
  );
};

export default PageHeader;
