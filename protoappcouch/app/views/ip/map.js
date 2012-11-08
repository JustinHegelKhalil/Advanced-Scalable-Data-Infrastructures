function(doc) {
  if (doc._id.substr(0,3) === "ip:") {
    emit(doc._id.substr(3), {
    	"demo": doc.demo,
    	"genre": doc.genre,
    	"gross": doc.gross,
    	"rev": doc._rev
    });
  }
};