async function donutsGuds(url){
    let res = await fetch(url);
    
    if(!res.ok) {
        throw new Error(`Could not feach ${url} status: ${res.status} `)
    }
    
    return await res.json();
}
donutsGuds('./goods.json');