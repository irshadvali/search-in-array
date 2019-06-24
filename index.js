module.exports.getSearchResult = (val, data, searchByNode) => {
    let text;
    if (val) {
        text = val.toLowerCase();
        let filteredData = data.filter(item => {
            return item[searchByNode].toLowerCase().indexOf(text) > -1;
        });
        if (!Array.isArray(filteredData) && !filteredData.length) {
            return "result is empty";

        } else if (Array.isArray(filteredData)) {
            return filteredData;
        }
    } else {
        return data;
    }
}