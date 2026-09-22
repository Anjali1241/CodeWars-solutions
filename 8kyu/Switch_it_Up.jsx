// When provided with a number between 0-9, return it in words. Note that the input is guaranteed to be within the range of 0-9.

// Input: 1

// Output: "One".

function switchItUp(number){
//Write your own Code!
const arr = [
  { id: 0, label: 'Zero' },
  { id: 1, label: 'One' },
  { id: 2, label: 'Two' },
  { id: 3, label: 'Three' },
  { id: 4, label: 'Four' },
  { id: 5, label: 'Five' },
  { id: 6, label: 'Six' },
  { id: 7, label: 'Seven' },
  { id: 8, label: 'Eight' },
  { id: 9, label: 'Nine' },
]
return arr.find((num)=>num.id==number).label
}
