function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let s1L = s1.tolowerCase();
	let s2L = s2.tolowerCase();
	return s1L.indexOf(s2L);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
