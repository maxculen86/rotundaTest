var url = `/6/api/listings/3?sort=desc&limit=10`;

function parseURL(url){ 
    const regex = /\/([0-9])?\/(api)+\/(listings)\/([0-9]+)\?sort=([a-zA-Z]+)&limit=([0-9]+)/gm;
    var regexGroups = {version: 1,collection: 3,id: 4,sort: 5,limit: 6};
    var urlParsed = regex.exec(url);
    return {
        version : urlParsed[regexGroups.version],
        collection: urlParsed[regexGroups.collection],
        id: urlParsed[regexGroups.id],
        sort: urlParsed[regexGroups.sort],
        limit: urlParsed[regexGroups.limit]
    }

}

console.log(parseURL(url));
