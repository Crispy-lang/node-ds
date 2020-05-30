

const Queue =  function(){

	this.collections = []

	//Add element to the quesu
	this.enqueue = function(element){
		this.collections.push(element)
	}

	//remove elementto the queue
	this.dequeue = function(){
		this.collections.shift()
	}
	// element on the front
	this.front = function(){
		if(this.size() !== 0) return this.collections[0]
	}

	// size of th element
	this.size = function(){
		return this.collections.length
	}

	// check if empty
	this.isEmpty = function(){
		return (this.size() == 0)
	}
	// print collections
	this.print = function(){
		return this.collections
	}
}


const Q = new Queue()

Q.enqueue(2)
Q.enqueue(3)
console.log(Q.print())
console.log(Q.front())
Q.dequeue()
console.log(Q.print())
console.log(Q.isEmpty())
Q.dequeue()
console.log(Q.isEmpty())

console.log('------------------------------------------------')

const PriorityQueue = function(){

	const collections = []

	this.isEmpty = function(){
		return (this.size() === 0)	
	}

	this.size = function(){
		return collections.length
	}

	this.enqueue = function(item){
		if(this.isEmpty()){
			collections.push(item)
		}else{
			var added = false

			for (var i = 0; i < collections.length; i++) {
				if(collections[i][1] > item[1]){
					collections.splice(i,0,item)
					added = true
					break; 
				}
				
			}

			if(!added) collections.push(item)
		}
	}

	this.dequeue = function(){
		collections.shift()
	}

	this.front = function(){
		return collections[0]
	}

	this.print = function(){
		return collections
	}
}

const PriQueue = new PriorityQueue()

PriQueue.enqueue(['First push',2])
console.log(PriQueue.print())
PriQueue.enqueue(['Before First push',1])
console.log(PriQueue.print())
PriQueue.enqueue(['After First push',3])
console.log('Final ', PriQueue.print())
console.log('Front', PriQueue.front())
PriQueue.dequeue()
console.log('Front', PriQueue.front())



