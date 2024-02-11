import { json } from '@sveltejs/kit';


export async function GET({ url }) {
    const query_prefix = url.searchParams.get('query_prefix');
    const user = url.searchParams.get('user');
    const k = url.searchParams.get('k');

    const response = await fetch(`http://northcarolina-b.tensordockmarketplace.com:22007/query_similar_tabs?k=${k}&query_prefix=${query_prefix}&user=${user}`);
    const data = await response.json();

    return json(data);
}
