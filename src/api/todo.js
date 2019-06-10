module.exports.handler = (event, ctx, done) => {
  done(null, {
    statusCode: 200,
    body: JSON.stringify({
      data: {
        id: event.pathParameters.id,
        name: "clean up",
        status: "open"
      }
    })
  });
};
