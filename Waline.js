// components/Waline.js
import { useEffect } from 'react';
import Head from 'next/head';

const Waline = () => {
  useEffect(() => {
    const initWaline = async () => {
      // 使用动态导入，而不是直接的 import 语句
      const module = await import('https://unpkg.com/@waline/client@v3/dist/waline.js');
      module.init({
        el: '#waline',
        serverURL: 'https://com.dragonjay.top',
        pageview: true,
        path: window.location.pathname,
      });
    };

    initWaline();
  }, []);

  return (
    <>
      {/* 引入 Waline 样式 */}
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/@waline/client@v3/dist/waline.css"
        />
      </Head>

      {/* Waline 评论区域 */}
      <div id="waline"></div>
    </>
  );
};

export default Waline;
