function(doc) {
  if (doc._id.substr(0,7) === "people:") {
    emit(doc._id.substr(7), {
    	"job": doc.job,
    	"model": doc.model,
    	"age": doc.age,
    	"rev": doc._rev
    });
  }
};