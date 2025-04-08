// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { Button } from "@/components/ui/button";
// import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

// export default function ClientForm({ userId }) {
//   const [originalUrl, setOriginalUrl] = useState("");
//   const [shortUrl, setShortUrl] = useState("");
//   const [error, setError] = useState("");
//   const [links, setLinks] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [copied, setCopied] = useState("");
//   const [qrCode, setQrCode] = useState("");

//   useEffect(() => {
//     async function fetchLinks() {
//       try {
//         const res = await axios.get("/api/links/mine");
//         setLinks(res.data);
//       } catch (error) {
//         setError("Failed to load links.");
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchLinks();
//   }, []);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     try {
//       const res = await axios.post("/api/links", { originalUrl, userId });
//       const newShortUrl = `${window.location.origin}/${res.data.shortCode}`;
//       setShortUrl(newShortUrl);
//       setLinks([
//         {
//           shortCode: res.data.shortCode,
//           originalUrl,
//           createdAt: new Date(),
//           clicks: 0,
//         },
//         ...links,
//       ]);
//       setOriginalUrl("");
//       setError("");
//     } catch (err) {
//       setError("Failed to shorten URL—try again!");
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleCopy = (shortCode) => {
//     console.log("clciksed");
//     const url = `${window.location.origin}/${shortCode}`;
//     navigator.clipboard.writeText(url).then(() => {
//       setCopied(shortCode);
//       setTimeout(() => setCopied(""), 5000);
//     });
//     console.log(copied);
//   };

//   const handleQrToggle = (shortCode) => {
//     if (qrCode === shortCode) {
//       setQrCode("");
//     } else {
//       setQrCode(shortCode);
//     }
//   };

//   const handleQrDownload = (shortCode) => {
//     const qrCanvas = document.getElementById(`qr-${shortCode}`);
//     const qrUrl = qrCanvas.toDataURL("image/png");
//     const link = document.createElement("a");
//     link.href = qrUrl;
//     link.download =` ${shortCode}.png`;
//     link.click();
//   };
//   return (
//     <div className="mt-4">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="url"
//           value={originalUrl}
//           onChange={(e) => setOriginalUrl(e.target.value)}
//           placeholder="Enter loooooooong URL"
//           className="border p-2 mr-2"
//           required
//         />
//         <Button type="submit" disabled={loading}>
//           {loading ? "Shortening..." : "Shorten"}
//         </Button>
//       </form>
//       {shortUrl && (
//         <div className="flex justify-evenly">
//         <p className="mt-2">
//           Short URL:{" "}
//           <a href={shortUrl} target="_blank">
//             {shortUrl}
//           </a>
//         </p>
//           <QRCodeSVG value={shortUrl} />

//         </div>
//       )}

//       {loading ? (
//         <p className="mt-2">Loading your links...</p>
//       ) : (
//         <div>
//           {links.length > 0 ? (
//             <div>
//               <h2 className="text-xl font-semibold mb-2">Your Short URLs</h2>
//               <table className="w-full border-collapse">
//                 <thead>
//                   <tr className="bg-gray-200">
//                     <th className="border p-2">Short URL</th>
//                     <th className="border p-2">Original URL</th>
//                     <th className="border p-2">Created</th>
//                     <th className="border p-2">Clicks</th>
//                     <th className="border p-2">Action</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {links.map((link) => (
//                     <tr key={link.shortCode} className="border-t">
//                       <td className="border p-2">
//                         <a
//                           href={`/${link.shortCode}`}
//                           className="text-blue-500"
//                           target="_blank"
//                         >
//                           {`${window.location.origin}/${link.shortCode}`}
//                         </a>
//                       </td>
//                       <td className="border p-2 truncate max-w-xs">
//                         {link.originalUrl}
//                       </td>
//                       <td className="border p-2">
//                         {new Date(link.createdAt).toLocaleDateString()}
//                       </td>
//                       <td className="border p-2">{link.clicks}</td>
//                       <td className="border p-2">
//                         {copied != link.shortCode ? (
//                           <Button
//                             variant="oultine"
//                             onClick={() => handleCopy(link.shortCode)}
//                             className="bg-blue-400"
//                           >
//                             Copy
//                           </Button>
//                         ) : (
//                           <Button variant="secondary">Copied</Button>
//                         )}
//                         {/* <Button variant="outline" onClick={()=> handleCopy(link.shortCode)}>
//             {copied === link.shortCode?"Copied":"Copy"}
//           </Button> */}

//                         <Button
//                           variant="outline"
//                           size="sm"
//                           onClick={() => handleQrToggle(link.shortCode)}
//                         >
//                           {qrCode === link.shortCode ? "Hide QR" : "Show QR"}
//                         </Button>
//                         {qrCode === link.shortCode && (
//                           <div className="mt-2">
//                             <QRCodeCanvas
//                              id={`qr-${link.shortCode}`}  
//                               value={`${window.location.origin}/${link.shortCode}`}
//                               size={128}
//                             />
//                              <Button
//                               variant="outline"
//                               size="sm"
//                               onClick={() => handleQrDownload(link.shortCode)}
//                             >Download</Button>
//                           </div>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           ) : (
//             <p>No links available.</p>
//           )}
//         </div>
//       )}

//       {error && <p className="mt-2 text-red-500">{error}</p>}
//     </div>
//   );
// }


"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { QRCodeCanvas, QRCodeSVG } from "qrcode.react";

export default function ClientDashboard({ userId }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [activeTab, setActiveTab] = useState("links");

  useEffect(() => {
    async function fetchLinks() {
      try {
        const res = await axios.get("/api/links/mine");
        setLinks(res.data);
      } catch (error) {
        setError("Failed to load links.");
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchLinks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/links", { originalUrl, userId });
      const newShortUrl = `${window.location.origin}/${res.data.shortCode}`;
      setShortUrl(newShortUrl);
      setLinks([
        {
          shortCode: res.data.shortCode,
          originalUrl,
          createdAt: new Date(),
          clicks: 0,
        },
        ...links,
      ]);
      setOriginalUrl("");
      setError("");
    } catch (err) {
      setError("Failed to shorten URL—try again!");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = (shortCode) => {
    const url = `${window.location.origin}/${shortCode}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(shortCode);
      setTimeout(() => setCopied(""), 3000);
    });
  };

  const handleQrToggle = (shortCode) => {
    if (qrCode === shortCode) {
      setQrCode("");
    } else {
      setQrCode(shortCode);
    }
  };

  const handleQrDownload = (shortCode) => {
    const qrCanvas = document.getElementById(`qr-${shortCode}`);
    const qrUrl = qrCanvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = `${shortCode}.png`;
    link.click();
  };

  // Calculate analytics data
  const totalClicks = links.reduce((sum, link) => sum + link.clicks, 0);
  const topLink = links.length > 0 ? 
    links.reduce((prev, current) => (prev.clicks > current.clicks) ? prev : current) : 
    null;
  const linksWithClicks = links.filter(link => link.clicks > 0);
  const conversionRate = links.length > 0 ? ((linksWithClicks.length / links.length) * 100).toFixed(1) : 0;

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Create Short URL</h1>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 mb-6">
            <input
              type="url"
              value={originalUrl}
              onChange={(e) => setOriginalUrl(e.target.value)}
              placeholder="Enter long URL to shorten"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <Button 
              type="submit" 
              disabled={loading}
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors whitespace-nowrap"
            >
              {loading ? "Shortening..." : "Shorten URL"}
            </Button>
          </form>

          {error && (
            <div className="bg-red-50 text-red-700 p-4 rounded-md mb-6">
              {error}
            </div>
          )}

          {shortUrl && (
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 w-full min-w-0">
                  <h3 className="text-lg font-medium text-gray-900 mb-2">Your new short URL is ready!</h3>
                  <div className="flex items-center max-w-full">
                    <a 
                      href={shortUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-blue-600 font-medium hover:underline truncate max-w-md"
                    >
                      {shortUrl}
                    </a>
                    <button
                      onClick={() => handleCopy(shortUrl.split("/").pop())}
                      className="ml-3 text-gray-500 hover:text-gray-700 flex-shrink-0"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="flex flex-col items-center flex-shrink-0">
                  <QRCodeSVG value={shortUrl} size={120} />
                  <button
                    onClick={() => handleQrDownload(shortUrl.split("/").pop())}
                    className="mt-3 text-blue-600 text-sm hover:underline flex items-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    Download QR
                  </button>
                  <QRCodeCanvas 
                    id={`qr-${shortUrl.split("/").pop()}`} 
                    value={shortUrl} 
                    size={120} 
                    style={{ display: 'none' }} 
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {links.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm mb-8">
            <div className="px-6 py-4 border-b border-gray-200">
              <div className="flex space-x-4">
                <button 
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'links' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  onClick={() => setActiveTab('links')}
                >
                  Your Links
                </button>
                <button 
                  className={`pb-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'analytics' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}
                  onClick={() => setActiveTab('analytics')}
                >
                  Analytics
                </button>
              </div>
            </div>

            {activeTab === 'analytics' && (
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-1">Total Links</div>
                    <div className="text-3xl font-bold text-gray-900">{links.length}</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-1">Total Clicks</div>
                    <div className="text-3xl font-bold text-gray-900">{totalClicks}</div>
                  </div>
                  <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                    <div className="text-sm font-medium text-gray-500 mb-1">Link Engagement</div>
                    <div className="text-3xl font-bold text-gray-900">{conversionRate}%</div>
                  </div>
                </div>
                
                {topLink && topLink.clicks > 0 && (
                  <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Top Performing Link</h3>
                    <div className="bg-blue-50 p-6 rounded-lg">
                      <div className="flex flex-col md:flex-row justify-between">
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{`${window.location.origin}/${topLink.shortCode}`}</div>
                          <div className="text-sm text-gray-500 truncate">{topLink.originalUrl}</div>
                        </div>
                        <div className="mt-4 md:mt-0 flex-shrink-0">
                          <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium whitespace-nowrap">
                            {topLink.clicks} clicks
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="mt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Link Performance</h3>
                  <div className="overflow-hidden bg-gray-50 rounded-lg shadow-sm">
                    {links.slice(0, 5).map((link, index) => (
                      <div key={link.shortCode} className={`p-4 ${index !== 0 ? 'border-t border-gray-200' : ''}`}>
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
                          <div className="flex-1 min-w-0 max-w-full">
                            <div className="flex items-center max-w-full">
                              <div className="font-medium truncate max-w-xs md:max-w-md">{`${window.location.origin}/${link.shortCode}`}</div>
                              <button
                                onClick={() => handleCopy(link.shortCode)}
                                className="ml-2 text-gray-400 hover:text-gray-600 flex-shrink-0"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                              </button>
                            </div>
                            <div className="text-sm text-gray-500 truncate max-w-xs md:max-w-md">{link.originalUrl}</div>
                          </div>
                          <div className="flex items-center mt-2 md:mt-0 flex-shrink-0">
                            <div className="text-sm text-gray-500 mr-4 whitespace-nowrap">{new Date(link.createdAt).toLocaleDateString()}</div>
                            <div className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm font-medium whitespace-nowrap">
                              {link.clicks} clicks
                            </div>
                          </div>
                        </div>
                        <div className="mt-2">
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-blue-500 rounded-full" 
                              style={{ width: `${Math.max((link.clicks / (topLink?.clicks || 1)) * 100, 5)}%` }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'links' && (
              <div className="p-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {links.map((link) => (
                    <div key={link.shortCode} className="bg-gray-50 p-4 rounded-lg shadow-sm">
                      <div className="flex justify-between">
                        <div className="flex-1 min-w-0">
                          <a
                            href={`/${link.shortCode}`}
                            className="text-blue-600 font-medium hover:underline block truncate"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {`${window.location.origin}/${link.shortCode}`}
                          </a>
                          <div className="text-sm text-gray-500 truncate mt-1">
                            {link.originalUrl}
                          </div>
                        </div>
                        <div className="ml-4 flex-shrink-0">
                          <span className="bg-blue-100 text-blue-800 py-1 px-2 rounded-full text-xs font-medium whitespace-nowrap">
                            {link.clicks} clicks
                          </span>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-500 mt-2">
                        Created: {new Date(link.createdAt).toLocaleDateString()}
                      </div>
                      
                      <div className="flex mt-4 space-x-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleCopy(link.shortCode)}
                          className={`text-xs whitespace-nowrap ${copied === link.shortCode ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50'}`}
                        >
                          {copied === link.shortCode ? (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                              Copied
                            </>
                          ) : (
                            <>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                              </svg>
                              Copy
                            </>
                          )}
                        </Button>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleQrToggle(link.shortCode)}
                          className="text-xs whitespace-nowrap"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
                          </svg>
                          {qrCode === link.shortCode ? "Hide QR" : "Show QR"}
                        </Button>
                      </div>
                      
                      {qrCode === link.shortCode && (
                        <div className="mt-4 flex flex-col items-center">
                          <QRCodeCanvas
                            id={`qr-${link.shortCode}`}  
                            value={`${window.location.origin}/${link.shortCode}`}
                            size={128}
                            className="border border-gray-200 p-2 bg-white rounded"
                          />
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleQrDownload(link.shortCode)}
                            className="mt-2 text-xs flex items-center"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            Download QR
                          </Button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {!loading && links.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2">No links yet</h2>
            <p className="text-gray-600 mb-4">
              Shorten your first URL above to get started tracking clicks and generating QR codes.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}