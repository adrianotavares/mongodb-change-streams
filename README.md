# Mongodb Change Streams

Spike: Mongodb Change Events    

IDE: Intellij IDEA Ultimate edition 

### Setup

- Install Mondodb and Mongo Shell
- Starting a local mongo with replicas

```
cd ~/dev/docker
mongod --dbpath ./data/db --replSet "rs"
```
### Running:

Watching all events
```
mongo createItems.js
mongo watchItemsAll.js 
```

Watching only updates with quantity less than 10 
```
mongo updateItems.js
mongo watchItemsUpdateQuantity.js
```
