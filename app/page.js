import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1>Team Portfolio</h1>
      <p>Welcome to our team website.</p>
      
      <ul style={{ marginTop: 20, lineHeight: '2' }}>
        <li>
          <Link href="/">Member A (เจต)</Link> 
        </li>
        <li>
          <Link href="/member-b">Member B (ปอ)</Link>
        </li>
      </ul>
    </main>
  );
}