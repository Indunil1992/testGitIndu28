let AWS = require('aws-sdk');
const s3 = new AWS.S3();

exports.handler = function (event, context, callback) {
    s3.copyObject({
        'Bucket': "sigma.smoketest",
        'CopySource': `/as2-test-lahiru/10`,
        'Key': "10"
    }).promise()
        .then(data => {
            console.log(data);           // successful response
            /*
            data = {
                CopyObjectResult: {
                    ETag: "\"6805f2cfc46c0f04559748bb039d69ae\"",
                    LastModified: "<Date Representation>"
                }
            }
            */
        })
        .catch(err => {
            console.log(err, err.stack); // an error occurred
        });

    callback(null, { "message": "Successfully executed" });
}