const http_protocol = "http";
const base_url = `${http_protocol}://localhost/shoppingcart/api/`;
const product_url = `${base_url}product/`;

export async function getProducts() {
    const url = `${product_url}read.php`;
    let resp = await fetch(url);
    const data = await resp.json();
    if (data && data.records) return data.records;
    return [];
}

export async function placeorderwithIds(listids) {
    const url = `${product_url}placeorder.php`;
    const reqData = JSON.stringify({
        listids: listids
    })
    const options = {
        method: "POST",
        headers : new Headers(),
        body: reqData
    }
    let resp = await fetch(url, options);
    const data = await resp.json();
    if (data && data.records) return data.records;
    return [];
}