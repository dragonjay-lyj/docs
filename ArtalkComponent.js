// ArtalkComponent.js
import React, { useEffect } from 'react';

const ArtalkComponent = () => {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const Artalk = require('artalk').default;
      Artalk.init({
        el: '#Comments',
        pageKey: '/post/1',
        pageTitle: '关于引入 Artalk 这档子事',
        // 其他配置项
      });
    }
  }, []);

  return <div id="Comments"></div>;
};

export default ArtalkComponent;
