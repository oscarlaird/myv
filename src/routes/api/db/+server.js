import { json } from '@sveltejs/kit';


export async function GET() {
    const response = await fetch('http://northcarolina-b.tensordockmarketplace.com:22007/query_similar_tabs?k=5&query_prefix=help&user=oscar');
    const data = await response.json();

	return json(data);
}