'use client';

import { BuilderComponent, builder, useIsPreviewing } from '@builder.io/react';
import { useEffect, useState } from 'react';

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY || '');

interface PageProps {
  params: {
    page?: string[];
  };
}

export default function Page({ params }: PageProps) {
  const [content, setContent] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const isPreviewing = useIsPreviewing();

  const urlPath = params.page ? `/${params.page.join('/')}` : '/';

  useEffect(() => {
    async function fetchContent() {
      try {
        const apiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;
        const timestamp = Date.now();
        const url = `https://cdn.builder.io/api/v3/content/page?apiKey=${apiKey}&url=${encodeURIComponent(urlPath)}&cachebust=true&_=${timestamp}`;

        const response = await fetch(url, {
          cache: 'no-store'
        });

        if (response.ok) {
          const data = await response.json();
          if (data.results && data.results.length > 0) {
            setContent(data.results[0]);
            setLoading(false);
          } else {
            setLoading(false);
          }
        } else {
          setLoading(false);
        }
      } catch (error) {
        console.error('Error fetching Builder.io content:', error);
        setLoading(false);
      }
    }

    fetchContent();
  }, [urlPath]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!content && !isPreviewing) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600">Page not found</p>
      </div>
    );
  }

  return (
    <BuilderComponent
      model="page"
      content={content}
    />
  );
}