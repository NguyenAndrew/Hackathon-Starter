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

const convertResponseToJson = function(response) {
    return response.json();
};

const convertJsonToFormattedJsonString = function(data) {
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
};

const convertStringToJson = function(jsonText) {
    return JSON.parse(jsonText);
};

const useJsonToMakeComments = function(json) {
        const DIV_BODY = document.getElementById("comment-system");
        DIV_BODY.innerHTML += "<b>" + "Comments" + "</b>";
        
        // For each comment in json.comments, add the comment information to the HTML.
        for (comment of json.comments) {
            DIV_BODY.innerHTML += "<p>" + "User #" + comment.id + ": " + comment.body + "</p>";
        }
};

const anyErrorsAndLogThem = function(err) {
    console.log(err);
};


// USED TO CLEAR UP ANY CONFUSION FROM LESSON 3
// An asynchronous call using promises.
fetch('https://my-json-server.typicode.com/typicode/demo/comments')
.then(convertResponseToJson)
.then(convertJsonToFormattedJsonString)
.then(convertStringToJson)
.then(useJsonToMakeComments)
.catch(anyErrorsAndLogThem);