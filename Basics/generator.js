// RegEX

var msg = "Las arepas son de maiz papa"

// General Matching
msg.match(/(a.)/g);

// Only last matching
msg.match(/(.a)$/g);

// LOOK AHEAD

// Positive assertion (ensure match if is fallow by a p)
msg.match(/(ar.)(?=p)/g);


// Negative Aassertion (only the one NOT follow by an p)
msg.match(/(a.)(?!p)/g)

// LOOK BEHIND (ES2018);

// Only Match if is precided by re
msg.match(/(?<=a)(re.)/g);


//Only Match if is NOT precideing by a pa
msg.match(/(?<!a)(. )/g);


// GROUPS
console.log("---------Groups---------")
// Capture Groups Parantesis are not only gruping oparators but also capturing operators. A way to have a sub part of the pattern

msg.match(/.(ar.)/);

msg.match(/([rp])a pa\1/);

msg.match(/(?<masa>ar.)/).groups;

msg.replace(/(?<masa>a.)/g, "-$<masa>-")

//dotall Mode

console.log("---------dotall---------")

var text = `El malandro salio espingao tan pronto llegaron los pacos`;

text.match(/malandro.*los/);

console.log(Math.sqrt(Math.floor(Math.random()* 100)))
// dot all match all over and expand up to the new line
text.match(/malandro.*tan/s);

