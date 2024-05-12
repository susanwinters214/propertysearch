import React from 'react';
import '@/assets/styles/globals.css';

export const metadata = {
    title: 'Property Risk Mitigation | Resources for Homeowners',
    description: 'Find resources for your residential properties',
    author: 'Susan Winters'
}


const MainLayout = ({ children }) => {
    return (
      <html lang="en">
        <body>
                <div>{ children }</div>
        </body>
      </html>
    );
}

export default MainLayout