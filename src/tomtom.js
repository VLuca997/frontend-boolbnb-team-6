var options = {
    searchOptions: {
      key: "BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J",
      language: "it-IT",
      limit: 5,
    },
    autocompleteOptions: {
      key: "BxLvW0WHQgAEf3K4FogUXlvUV2qjlM8J",
      language: "it-IT",
    },
  }

  let tom = document.getElementById('search-box-container');
  var ttSearchBox = new tt.plugins.SearchBox(tt.services, options)
  var searchBoxHTML = ttSearchBox.getSearchBoxHTML()

  tom.append(searchBoxHTML);
  let x = document.getElementsByClassName("tt-search-box-input");
  x[0].setAttribute("name", "address");
  x[0].setAttribute("value");