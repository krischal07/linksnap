
"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function ClientForm({ userId }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const[copied, setCopied] = useState("")


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
        { shortCode: res.data.shortCode, originalUrl, createdAt: new Date(), clicks: 0 },
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

  const handleCopy = (shortCode)=>{
      console.log("clciksed")
      const url = `${window.location.origin}/${shortCode}`
      navigator.clipboard.writeText(url).then(()=>{
          setCopied(shortCode)
          setTimeout(()=> setCopied(""),5000)
        })
        console.log(copied)
    
  }
  return (
    <div className="mt-4">
      <form onSubmit={handleSubmit}>
        <input
          type="url"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          placeholder="Enter URL to shorten"
          className="border p-2 mr-2"
          required
        />
        <Button type="submit" disabled={loading}>
          {loading ? "Shortening..." : "Shorten"}
        </Button>
      </form>
      {shortUrl && (
        <p className="mt-2">
          Short URL: <a href={shortUrl} target="_blank">{shortUrl}</a>
        </p>
      )}

      {loading ? (
        <p className="mt-2">Loading your links...</p>
      ) : (
        <div>
          {links.length > 0 ? (
            <div>
              <h2 className="text-xl font-semibold mb-2">Your Short URLs</h2>
              <table className="w-full border-collapse">
  <thead>
    <tr className="bg-gray-200">
      <th className="border p-2">Short URL</th>
      <th className="border p-2">Original URL</th>
      <th className="border p-2">Created</th>
      <th className="border p-2">Clicks</th>
      <th className="border p-2">Action</th>
    </tr>
  </thead>
  <tbody>
    {links.map((link) => (
      <tr key={link.shortCode} className="border-t">
        <td className="border p-2">
          <a href={`/${link.shortCode}`} className="text-blue-500" target="_blank">
            {`http://localhost:3000/${link.shortCode}`}
          </a>
        </td>
        <td className="border p-2 truncate max-w-xs">{link.originalUrl}</td>
        <td className="border p-2">
          {new Date(link.createdAt).toLocaleDateString()}
        </td>
        <td className="border p-2">
          {link.clicks}
        </td>
        <td className="border p-2">
            {copied!=link.shortCode?
            <Button variant="oultine" onClick={()=> handleCopy(link.shortCode)} className="bg-blue-400">Copy</Button>:
            <Button variant="secondary">Copied</Button>    
        }
          {/* <Button variant="outline" onClick={()=> handleCopy(link.shortCode)}>
            {copied === link.shortCode?"Copied":"Copy"}
          </Button> */}
        </td>
      </tr>
    ))}
  </tbody>
</table>

            </div>
          ) : (
            <p>No links available.</p>
          )}
        </div>
      )}

      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}