// ArtalkComponent.js
import React, { useEffect } from 'react';

const ArtalkComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const script = document.createElement('script');
      script.src = 'http://localhost:8080/dist/Artalk.js';
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        const Artalk = window.Artalk;
        Artalk.init({
          el: '#Comments',
          pageKey: '/post/1',
          pageTitle: '关于引入 Artalk 这档子事',
          server: 'http://localhost:8080',
          site: 'Artalk 的博客',
        });
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, []);

  return (
    <>
      <link href="http://localhost:8080/dist/Artalk.css" rel="stylesheet" />
      <div id="Comments"></div>
    </>
  );
};

export default ArtalkComponent;
