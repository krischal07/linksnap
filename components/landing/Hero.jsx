// import { Button } from "@/components/ui/button";
// import { Scissors } from "lucide-react";

// export default function Hero() {
//   return (
//     <section className="flex-1 flex items-center justify-center p-8 text-center">
//       <div>
//         <h2 className="text-2xl sm:text-4xl font-bold mb-4">
//           Shorten. Share. Track.
//         </h2>
//         <p className="text-lg mb-6">
//           Create short URLs and QR codes in seconds!
//         </p>
//         <Button variant="destructive" size="lg">
//           <a href="/dashboard" className="flex gap-2">
//             Shorten Now
//             <Scissors />
//           </a>
//         </Button>
//       </div>
//     </section>
//   );
// }





import { Check, Facebook, Instagram, Linkedin, Mail, Scissors } from 'lucide-react';
import Head from 'next/head';
// import Image from 'next/image';
// import { useState } from 'react';

export default function Hero() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>LinkSnap | URL Shortener & QR Code Generator</title>
        <meta name="description" content="Shorten URLs, generate QR codes, and track analytics with QuickLink" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation Bar */}


      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white rounded-lg mt-8 shadow-sm">
          <div className="relative">
            {/* Decorative elements */}
            <div className="absolute -left-10 top-10 transform -rotate-12">
              <div className="bg-yellow-200 p-4 rounded shadow-md w-48">
                <p className="text-sm italic font-handwriting">
                  Create short links, generate QR codes, and track performance all in one place.
                </p>
              </div>
            </div>
            
            <div className="absolute right-10 top-0">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <p className="font-bold mb-1">Analytics</p>
                <div className="flex items-center space-x-2">
                  <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Track clicks and engagement</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main content */}
            <div className="text-center pt-20 pb-8">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                Shorten, share, and track
                <span className="block text-gray-400 mt-2">all in one place</span>
              </h1>
              <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-10">
                Efficiently manage your links, generate QR codes, and boost engagement with powerful analytics.
              </p>
              <a
                href="/dashboard"
                className=" px-8 py-3 text-lg font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 transition-colors"
              >
                Get Demo
              </a>
            </div>

            {/* Features grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-4">Today's Link Performance</h3>
                <div className="space-y-4">
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-red-500 rounded-sm flex items-center justify-center text-white mr-3">1</div>
                        <p className="font-medium">Product launch link</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-6 w-6 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-gray-300">
                            <Check className='bg-green-500'/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="h-2 bg-blue-100 rounded-full mt-2">
                        <div className="h-full bg-blue-500 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 text-right mt-1">398 clicks</p>
                    </div>
                  </div>
                  
                  <div className="bg-white p-3 rounded shadow-sm">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className="h-6 w-6 bg-green-500 rounded-sm flex items-center justify-center text-white mr-3">2</div>
                        <p className="font-medium">Social media campaign</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-6 w-6 rounded-full overflow-hidden">
                          <div className="h-full w-full bg-gray-300">
                            <Check className='bg-green-500'/>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <div className="h-2 bg-blue-100 rounded-full mt-2">
                        <div className="h-full bg-red-500 rounded-full" style={{ width: '83%' }}></div>
                      </div>
                      <p className="text-xs text-gray-500 text-right mt-1">512 clicks</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="font-medium mb-2">100+ Integrations</h3>
                <div className="mt-4 flex justify-center">
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="h-12 w-12 flex items-center justify-center mx-auto">
                        {/* <svg viewBox="0 0 24 24" className="h-10 w-10">
                          <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                        </svg> */}
                        <Mail className="h-10 w-10"/>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="h-12 w-12 flex items-center justify-center mx-auto">
                        {/* <svg viewBox="0 0 24 24" className="h-10 w-10">
                          <path fill="#EA4335" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"></path>
                        </svg> */}
                        <Instagram className="h-10 w-10"/>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="h-12 w-12 flex items-center justify-center mx-auto">
                        {/* <svg viewBox="0 0 24 24" className="h-10 w-10">
                          <path fill="#00BFFF" d="M0 11.64C0 4.95 5.13 0 12 0s12 4.95 12 11.64c0 3.76-1.86 7.04-4.69 9.09v-6.44h3.22l.5-3.64h-3.72V8.89c0-1.06.52-2.06 2.17-2.06h1.69V3.81s-1.53-.26-2.98-.26c-3.05 0-5.04 1.85-5.04 5.2v2.92h-3.39v3.64h3.39v6.28A11.73 11.73 0 010 11.64z"></path>
                        </svg> */}
                        <Facebook className="h-10 w-10"/>
                      </div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <div className="h-12 w-12 flex items-center justify-center mx-auto">
                        {/* <svg viewBox="0 0 24 24" className="h-10 w-10">
                          <path fill="#34A853" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
                        </svg> */}
                        <Linkedin className="h-10 w-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Powerful Features</h2>
            <p className="mt-4 text-lg text-gray-600">Everything you need to manage and optimize your links</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">URL Shortening</h3>
              <p className="text-gray-600">Create compact, memorable links that are perfect for sharing on social media, emails, or anywhere character count matters.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">QR Code Generator</h3>
              <p className="text-gray-600">Generate custom QR codes for your links that can be downloaded in various formats and easily shared across digital and print media.</p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="h-12 w-12 rounded-md bg-blue-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Detailed Analytics</h3>
              <p className="text-gray-600">Track clicks, geographic data, devices, and more with our comprehensive dashboard to optimize your marketing efforts.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to optimize your links?</h2>
            <p className="mt-4 text-xl text-blue-100">Get started with QuickLink today and take control of your online presence.</p>
            <div className="mt-8 flex justify-center">
              <a
                href="/dashboard"
                className="px-8 py-3 text-lg font-medium text-blue-600 bg-white rounded-md hover:bg-blue-50 transition-colors mr-4"
              >
                Start for free
              </a>
              <a
                href="/features"
                className="px-8 py-3 text-lg font-medium text-white border border-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      {/* <footer className="bg-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-medium mb-4">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">API</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Guides</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Contact</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Partners</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-medium mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Security</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="h-8 w-8 mr-2">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
                  <circle cx="7" cy="7" r="3" fill="#0EA5E9" />
                  <circle cx="17" cy="7" r="3" fill="#ffffff" />
                  <circle cx="7" cy="17" r="3" fill="#ffffff" />
                  <circle cx="17" cy="17" r="3" fill="#ffffff" />
                </svg>
              </div>
              <span className="text-white font-bold text-xl">QuickLink</span>
            </div>
            <p className="text-gray-400 text-sm mt-4 md:mt-0">© 2025 QuickLink. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );

}