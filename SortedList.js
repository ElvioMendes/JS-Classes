class SortedList {
    constructor() {
        this.aList = [];
        this.length = 0;
    }
    add(num) {
        if (this.aList.length == 0) {
            this.aList.splice(0, 0, num);
        }
        else {
            for (let index = this.aList.length - 1; index >= 0; index--) {
                if (index == 0) {
                    if (this.aList[index] > num) {
                        this.aList.splice(0, 0, num);
                        break;
                    }
                    else {
                        this.aList.splice(1, 0, num);
                        break;
                    }
                }
                if (this.aList[index] >= num) {
                    continue;
                }
                else {
                    this.aList.splice(index + 1, 0, num);
                    break;
                }
            }
        }
        this.length++;
    }
    get(index) {
        return this.aList[index];
    }
    getLength() {
        return this.length;
    }
}
var sl = new SortedList();
sl.add(2);
sl.add(5);
sl.add(7);
sl.add(6);
document.write("Result for index 2: " + sl.get(2) + "<p>");
