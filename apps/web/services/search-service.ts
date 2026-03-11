export async function search(query: string) {
  const res = await fetch(`/api/search?q=${query}`);

  if (!res.ok) {
    throw new Error('Search failed');
  }

  return res.json();
}
