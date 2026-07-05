import { client } from '../lib/sanity';

export async function GET() {
  try {
    // 1. Buscamos as matérias no Sanity
    const query = `*[_type == "post"] | order(publishedAt desc)[0...6] {
      title,
      "slug": slug.current,
      publishedAt,
      "imageUrl": mainImage.asset->url
    }`;
    
    const postsSanity = await client.fetch(query);

    // 2. Formatamos os dados
    const materiasFormatadas = postsSanity.map(post => ({
      titulo: post.title,
      link: `https://blog.imperatransito.com.br/materia/${post.slug}`,
      imagem: post.imageUrl || './img/placeholder.jpeg',
      tipo: 'Matéria', 
      resumo: 'Clique para ler a matéria completa no nosso portal de educação.' 
    }));

    // 3. Retornamos a resposta em formato JSON com os headers corrigidos
    return new Response(JSON.stringify(materiasFormatadas), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://imperatransito.com.br",
        "Access-Control-Allow-Methods": "GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });

  } catch (error) {
    return new Response(JSON.stringify({ error: "Erro ao carregar dados" }), { 
      status: 500,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://imperatransito.com.br"
      }
    });
  }
}