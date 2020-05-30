


const newSet = function(){

	const collections = []

	this.has = function(element){
		return (collections.indexOf(element) !== -1)
	}

	this.add = function(element){
		if(this.has(element)) return false

		collections.push(element)
	return true
	}

	this.length = function(){
		return collections.length
	}

	this.values = function(){
		return collections
	}

	this.remove = function(element){

		if(!this.has(element)) return false

		let index = collections.indexOf(element)
		collections.splice(index,1)
		return true

	}

	this.union = function(otherSet){
		let unionSet = new newSet()
		let firstSet = this.values()

		firstSet.forEach(item=>{
			unionSet.add(item)
		})
		otherSet.values().forEach(item=>{
			unionSet.add(item)
		})

		return unionSet
	}

	this.intersection = function(otherSet){
		let intersectionSet = new newSet()
		let firstSet = this.values()

		firstSet.forEach(element => {
			if(otherSet.has(element)) intersectionSet.add(element)
		})

		return intersectionSet
	}

	this.different = function(otherSet){
		let diff = new newSet()
		let firstSet = this.values()

		firstSet.forEach(item => {
			if(!otherSet.has(item)) diff.add(item)
		})

		return diff
	}

	this.subset = function(otherSet) {

		let firstSet = this.values()

		return firstSet.every(item =>{
			return otherSet.has(item) 
		})
		
	}
}

const setA = new newSet()

for(let i=0; i< 10; i++) setA.add(i)

console.log('Size of the set', setA.length())
console.log('values', setA.values())
setA.remove(2)
console.log('Size of the set', setA.length())
console.log('values', setA.values())

const setB =  new newSet()

for(let i=5; i< 15; i++) setB.add(i)


console.log('Union Set', setA.union(setB).values())
console.log('IntersctionSet A B', setA.intersection(setB).values())
console.log('difference A B', setB.different(setA).values())


const setC = new newSet()

for(let i=6; i< 12; i++) setC.add(i)

console.log(setB.subset(setC))

