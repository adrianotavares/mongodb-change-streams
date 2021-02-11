conn = new Mongo("mongodb://localhost:27017/demo?replicaSet=rs");
db = conn.getDB("demo");
collection = db.items;
let updatedQuantity = 1;

function sleepFor(sleepDuration) {
    var now = new Date().getTime();
    while (new Date().getTime() < now + sleepDuration) {
        /* do nothing */
    }
}

function update() {
    sleepFor(1000);
    res = collection.update({quantity:{$gt:10}}, {$inc: {quantity: -Math.floor(Math.random() * 10)}}, {multi: true});
    updatedQuantity = res.nMatched + res.nModified;
    print(res)
}

while (updatedQuantity > 0) {
    update();
}