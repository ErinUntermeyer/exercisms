export class Squares {
  constructor(num) {
		this.num = num
  }

  get sumOfSquares() {
		let totalSumSquared = 0
		for (let i = 1; i <= this.num; i++) {
			totalSumSquared = totalSumSquared + (i * i)
		}
		return totalSumSquared
  }

  get squareOfSum() {
		let totalSum = 0
		for (let i = 1; i <= this.num; i++) {
			totalSum = totalSum + i
		}
		let squared = totalSum * totalSum
		return squared
  }

  get difference() {
		const difference = this.squareOfSum - this.sumOfSquares
		return difference
  }
}
