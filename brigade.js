const {events, Job} = require("brigadier");

events.on("Microsoft.Storage.BlobCreated", (e, p) => {
  console.log(e.payload);
});
events.on("Microsoft.Storage.BlobDeleted", (e, p) => {
  console.log(e.payload);
});
