// For this example, the incoming API data looks like this:
// [
//     {
//       "id": 1,
//       "body": "some comment",
//       "postId": 1
//     },
//     {
//       "id": 2,
//       "body": "some comment",
//       "postId": 1
//     }
// ]

// An asynchronous call using promises.
fetch('https://my-json-server.typicode.com/typicode/demo/comments')
.then(function(response) {
    return response.json();
}).then(function(data) {
    let jsonText = '{ "comments": ';
    jsonText += JSON.stringify(data);
    jsonText += '}';
    return jsonText;
    // At this point, jsonText =
    //{
    // "comments": [
    //     {
    //       "id": 1,
    //       "body": "some comment",
    //       "postId": 1
    //     },
    //     {
    //       "id": 2,
    //       "body": "some comment",
    //       "postId": 1
    //     }
    // ]
    //}
}).then(function(jsonText) {
    return JSON.parse(jsonText);
}).then(function(json) {
    const DIV_BODY = document.getElementById("comment-system");
    DIV_BODY.innerHTML += "<b>" + "Comments" + "</b>";
    DIV_BODY.innerHTML += "<p>" + "User #" + json.comments[0].id + ": " + json.comments[0].body + "</p>";
    DIV_BODY.innerHTML += "<p>" + "User #" + json.comments[1].id + ": " + json.comments[1].body + "</p>";
}).catch(function(err) {
    console.log(err)
});