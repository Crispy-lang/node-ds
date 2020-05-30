
const newStack = function(){
	this.collections = []
	this.count = 0

	this.push = function(value){
		this.collections[this.count] = value
		this.count += 1
	}


	this.peek = function(){
		return this.collections[this.count - 1];
	}

	this.values = function(){
		return this.collections
	}

	this.length = function(){
		return this.count
	}

	this.remove = function(item){
		if(this.count === 0) return false

		this.count -= 1	
		let result = this.collections[this.count]
		this.collections.pop()
		return result
	}

}

const stack = new newStack()
stack.push(2)
stack.push(3)
stack.push(4)
console.log('Stack length', stack.length())
console.log('Stack values', stack.values())
console.log('Element at the peek', stack.peek())
console.log('Value to remove',stack.remove())
console.log('Stack length', stack.length())
console.log('Stack values', stack.values())
console.log('Peek element', stack.peek())