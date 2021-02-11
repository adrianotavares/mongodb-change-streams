conn = new Mongo("mongodb://localhost:27017/demo?replicaSet=rs");
db = conn.getDB("demo");
collection = db.items;

var docToInsert = {
    name: "Becks",
    quantity: 10
};

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
        /* do nothing */
    }
}

function create() {
    sleepFor(1000);
    print("inserting doc...");
    docToInsert.quantity = 10 + Math.floor(Math.random() * 10);
    res = collection.insert(docToInsert);
    print(res)
}

while (true) {
    create();
}