"use client";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function ClientForm({ userId }) {
  const [originalUrl, setOriginalUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/links", { originalUrl, userId });

    console.log("res:",res)
      setShortUrl(`${window.location.origin}/${res.data.shortCode}`);
      setError("");
    } catch (err) {
      setError("Failed to shorten URL—try again!");
      console.error(err);
    }
  };

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
        <Button type="submit">Shorten</Button>
      </form>
      {shortUrl && (
        <p className="mt-2">
          Short URL: <a href={shortUrl} target="_blank">{shortUrl}</a>
        </p>
      )}
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </div>
  );
}