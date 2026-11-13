// Deliberately unauthenticated: exists to trigger a security finding.
export function GET() {
  return Response.json([
    { id: 1, name: "Alice Example", email: "alice@example.com" },
    { id: 2, name: "Bob Example", email: "bob@example.com" },
  ]);
}
