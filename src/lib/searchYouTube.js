var searchYouTube = (options, callback) => {
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {
      q: options.query,
      maxResults: options.max,
      key: options.key,
      part: 'snippet',
    },
    dataType: 'json',
    success: data => {
      callback(data.items);
    },
    error: () => {
      console.error('Request Failed');
    }
  });
};

export default searchYouTube;

// get(url_settings?: string | JQuery<TElement = HTMLElement>.UrlAjaxSettings<any>)

// {
//   "kind": "youtube#searchListResponse",
//   "etag": etag,
//   "nextPageToken": string,
//   "prevPageToken": string,
//   "regionCode": string,
//   "pageInfo": {
//     "totalResults": integer,
//     "resultsPerPage": integer
//   },
//   "items": [
//     search Resource
//   ]
// }