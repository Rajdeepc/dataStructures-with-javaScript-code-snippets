
let mySet = function() {

    // lets create an empty set which will hold an array of distinct items
    let collection = [];

    // this method will check whether an element already exist in the set or not
    this.has = function(elem){
        return (collection.indexOf(elem) !== -1) // this checks whether the element exists or not, if yes, then it return true or else false
    }

    // this method returns the values of the collection
    this.values = function(){
        return collection;
    }

    // this method adds an item to the set
    this.add = function(item){
        if(!this.has(item)){ // if the item to be pushed not exist
            collection.push(item);
            return true
        }
        return false
    }

    // this method deletes and item from the set
    this.remove = function(item){
        if(this.has(item)){ // if the item to be removed exist
            let index = collection.indexOf(item);
            collection.slice(index, 1); // removes the item
            return true
        }
        return false
    }


    // this method show the size of the set
    this.size = function(){
        return collection.length;
    }


    /**
     * Set DataStructures Methods
     */

    // this method returns the union of two sets
    this.union = function(otherSet){
        let unionSet = new mySet();
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach(function(element) {
            unionSet.add(element);
        });
        secondSet.forEach(function(element) {
            unionSet.add(element);
        })
        return unionSet
    }

    // this method returns the intersection of two Sets
    this.intersection = function(otherSet){
        let interSectionSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(elem){
            if(otherSet.has(elem)){
                interSectionSet.add(elem)
            }
        })
        return interSectionSet;
    }


    // this method returns the difference between two sets
    this.difference = function(otherSet){
        let differenceSet = new mySet();
        let firstSet = this.values();
        firstSet.forEach(function(elem){
            if(!otherSet.has(e)){
                differenceSet.add(e);
            }
        });
        return differenceSet;
    }

    // this method return whether one set is a subset of one another or not
    this.subset = function(otherSet){
        let firstSet = this.values();
        return firstSet.forEach(function(elem) {
            return otherSet.has(elem);
        })
    }


}